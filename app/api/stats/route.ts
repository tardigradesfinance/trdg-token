import { NextResponse } from 'next/server'

// Required for Cloudflare Pages deployment
export const runtime = 'edge'

// Contract addresses
const TRDG_BSC_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'
const TRDG_ETH_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'
const WBNB_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const PCSV1_POOL_ADDRESS = '0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E'
const UNISWAP_POOL_ADDRESS = '0xc2367025716cf1109321e4cb96f47c0e3f9beb05'
const BURN_WALLET_ADDRESS = '0x000000000000000000000000000000000000dead'

// API Keys for Etherscan V2 (works for both ETH and BSC with different chainid)
const ETH_API_KEY = 'NYC5AEGYB163CF5M4WQCVCRGIWV98A6QXI'
const BSC_API_KEY = 'HT5DPQEIA923Z57R3HQ8Z2HXPXF2JUX959'
// Note: BSC uses same Etherscan V2 API with chainid=56

// BSC Public RPC endpoints - Round robin
const BSC_RPC_URLS = [
    'https://bsc-dataseed.binance.org',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed2.defibit.io',
]

// ETH Public RPC endpoints - Round robin
const ETH_RPC_URLS = [
    'https://eth.llamarpc.com',
    'https://rpc.ankr.com/eth',
    'https://ethereum.publicnode.com',
    'https://1rpc.io/eth',
]

const MAX_SUPPLY = 100000 * 10 ** 12

// Wait helper
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// ERC20 balanceOf function signature
const BALANCE_OF_SELECTOR = '0x70a08231'

// Format address for ABI encoding (pad to 32 bytes)
function padAddress(address: string): string {
    return '000000000000000000000000' + address.toLowerCase().replace('0x', '')
}

// Call balanceOf via RPC with fallback strategy
async function getTokenBalanceViaRpc(rpcUrls: string[], tokenAddress: string, walletAddress: string): Promise<number> {
    const data = BALANCE_OF_SELECTOR + padAddress(walletAddress)

    for (const rpcUrl of rpcUrls) {
        try {
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 3000)

            const response = await fetch(rpcUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'eth_call',
                    params: [{ to: tokenAddress, data }, 'latest'],
                    id: 1
                }),
                signal: controller.signal
            })

            clearTimeout(timeoutId)

            if (!response.ok) continue

            const result = await response.json()
            if (result.result) {
                // Convert hex to number (BigInt for large values)
                return Number(BigInt(result.result))
            }
        } catch (error) {
            // Continue to next RPC
            continue
        }
    }

    console.error('All RPCs failed for', tokenAddress)
    return 0
}

// Get prices from CoinGecko (free, no API key needed)
async function getPrices(): Promise<{ bnbPrice: number; ethPrice: number }> {
    try {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,ethereum&vs_currencies=usd',
            { headers: { 'Accept': 'application/json' } }
        )
        const data = await response.json()
        return {
            bnbPrice: data.binancecoin?.usd || 0,
            ethPrice: data.ethereum?.usd || 0
        }
    } catch (error) {
        console.error('CoinGecko fetch error:', error)
        return { bnbPrice: 0, ethPrice: 0 }
    }
}

// Fetch holder count from Etherscan API V2
async function getHolderCount(chainId: number, contractAddress: string, apiKey: string): Promise<number> {
    try {
        const url = `https://api.etherscan.io/v2/api?chainid=${chainId}&module=token&action=tokenholdercount&contractaddress=${contractAddress}&apikey=${apiKey}`

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' },
            signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
            console.error(`Holder count API error (chain ${chainId}):`, response.status)
            return 0
        }

        const data = await response.json()

        if (data.status === '1' && data.result) {
            return parseInt(data.result, 10)
        }

        console.error(`Holder count API failed (chain ${chainId}):`, data.message || data.result)
        return 0
    } catch (error) {
        console.error(`Holder count fetch error (chain ${chainId}):`, error)
        return 0
    }
}

function calculateTrdgPrice(nativeInPool: number, trdgInPool: number, nativePrice: number): number {
    if (trdgInPool === 0) return 0
    const nativeBalanceAdjusted = nativeInPool * (10 ** -18)
    const trdgBalanceAdjusted = trdgInPool * (10 ** -9)
    return (nativeBalanceAdjusted * nativePrice) / trdgBalanceAdjusted
}

// Fetch all BSC data via RPC
async function fetchBscData() {
    const bscPoolWbnbRaw = await getTokenBalanceViaRpc(BSC_RPC_URLS, WBNB_ADDRESS, PCSV1_POOL_ADDRESS)
    await wait(100)

    const bscPoolTrdgRaw = await getTokenBalanceViaRpc(BSC_RPC_URLS, TRDG_BSC_ADDRESS, PCSV1_POOL_ADDRESS)
    await wait(100)

    const bscBurnedRaw = await getTokenBalanceViaRpc(BSC_RPC_URLS, TRDG_BSC_ADDRESS, BURN_WALLET_ADDRESS)

    return { bscPoolWbnbRaw, bscPoolTrdgRaw, bscBurnedRaw }
}

// Fetch all ETH data via RPC
async function fetchEthData() {
    const ethPoolWethRaw = await getTokenBalanceViaRpc(ETH_RPC_URLS, WETH_ADDRESS, UNISWAP_POOL_ADDRESS)
    await wait(100)

    const ethPoolTrdgRaw = await getTokenBalanceViaRpc(ETH_RPC_URLS, TRDG_ETH_ADDRESS, UNISWAP_POOL_ADDRESS)
    await wait(100)

    const ethBurnedRaw = await getTokenBalanceViaRpc(ETH_RPC_URLS, TRDG_ETH_ADDRESS, BURN_WALLET_ADDRESS)

    return { ethPoolWethRaw, ethPoolTrdgRaw, ethBurnedRaw }
}

export async function GET() {
    try {
        // Fetch prices, chain data, and holder counts in parallel
        const [prices, bscData, ethData, bscHolders, ethHolders] = await Promise.all([
            getPrices(),
            fetchBscData(),
            fetchEthData(),
            getHolderCount(56, TRDG_BSC_ADDRESS, BSC_API_KEY), // BSC chainid = 56
            getHolderCount(1, TRDG_ETH_ADDRESS, ETH_API_KEY),  // ETH chainid = 1
        ])

        const { bnbPrice, ethPrice: ethNativePrice } = prices
        const { bscPoolWbnbRaw, bscPoolTrdgRaw, bscBurnedRaw } = bscData
        const { ethPoolWethRaw, ethPoolTrdgRaw, ethBurnedRaw } = ethData

        // Calculate prices
        const bscPrice = calculateTrdgPrice(bscPoolWbnbRaw, bscPoolTrdgRaw, bnbPrice)
        const ethPrice = calculateTrdgPrice(ethPoolWethRaw, ethPoolTrdgRaw, ethNativePrice)

        // Burn values
        const bscBurned = bscBurnedRaw / (10 ** 9)
        const ethBurned = ethBurnedRaw / (10 ** 9)
        const totalBurned = bscBurned + ethBurned
        const burnPercentage = ((bscBurned + ethBurned) / (MAX_SUPPLY * 2)) * 100

        // Circulating
        const bscCirculating = MAX_SUPPLY - bscBurned
        const ethCirculating = MAX_SUPPLY - ethBurned

        // Market caps
        const bscMarketCap = bscCirculating * bscPrice
        const ethMarketCap = ethCirculating * ethPrice

        // Liquidity
        const bscPoolWbnb = bscPoolWbnbRaw * (10 ** -18)
        const ethPoolWeth = ethPoolWethRaw * (10 ** -18)
        const bscLiquidity = bscPoolWbnb * bnbPrice
        const ethLiquidity = ethPoolWeth * ethNativePrice

        // Pool TRDG
        const bscPoolTrdg = bscPoolTrdgRaw * (10 ** -9)
        const ethPoolTrdg = ethPoolTrdgRaw * (10 ** -9)

        const response = NextResponse.json({
            success: true,
            timestamp: new Date().toISOString(),
            data: {
                bscPrice,
                ethPrice,
                bscPricePerTrillion: bscPrice * (10 ** 12),
                ethPricePerTrillion: ethPrice * (10 ** 12),
                bnbPrice,
                ethNativePrice,
                bscBurned,
                ethBurned,
                totalBurned,
                burnPercentage,
                bscMarketCap,
                ethMarketCap,
                bscLiquidity,
                ethLiquidity,
                bscPoolTrdg,
                bscPoolWbnb,
                ethPoolTrdg,
                ethPoolWeth,
                bscCirculating,
                ethCirculating,
                bscHolders,
                ethHolders,
                totalHolders: bscHolders + ethHolders,
            }
        })

        // Add cache headers to reduce API calls (cache for 30 seconds)
        response.headers.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=60')

        return response
    } catch (error) {
        console.error('Stats API error:', error)
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch stats'
        }, { status: 500 })
    }
}
