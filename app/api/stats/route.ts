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

// API Keys
const BSC_API_KEY = '2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET'
const ETH_API_KEY = 'U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2'

const MAX_SUPPLY = 100000 * 10 ** 12

// Wait helper - 500ms like the original main.js
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function getBscTokenBalance(contractAddress: string, walletAddress: string): Promise<number> {
    try {
        const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${BSC_API_KEY}`
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        })
        const data = await response.json()
        if (data.status === '1' && data.result) {
            return parseInt(data.result) || 0
        }
        console.log('BSC API response:', JSON.stringify(data))
        return 0
    } catch (error) {
        console.error('BSC fetch error:', error)
        return 0
    }
}

async function getEthTokenBalance(contractAddress: string, walletAddress: string): Promise<number> {
    try {
        const url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${ETH_API_KEY}`
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        })
        const data = await response.json()
        if (data.status === '1' && data.result) {
            return parseInt(data.result) || 0
        }
        console.log('ETH API response:', JSON.stringify(data))
        return 0
    } catch (error) {
        console.error('ETH fetch error:', error)
        return 0
    }
}

async function getBnbPrice(): Promise<number> {
    try {
        const url = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${BSC_API_KEY}`
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        })
        const data = await response.json()
        if (data.status === '1' && data.result?.ethusd) {
            return parseFloat(data.result.ethusd) || 0
        }
        console.log('BNB price API response:', JSON.stringify(data))
        return 0
    } catch (error) {
        console.error('BNB price fetch error:', error)
        return 0
    }
}

async function getEthPrice(): Promise<number> {
    try {
        const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ETH_API_KEY}`
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        })
        const data = await response.json()
        if (data.status === '1' && data.result?.ethusd) {
            return parseFloat(data.result.ethusd) || 0
        }
        console.log('ETH price API response:', JSON.stringify(data))
        return 0
    } catch (error) {
        console.error('ETH price fetch error:', error)
        return 0
    }
}

function calculateTrdgPrice(nativeInPool: number, trdgInPool: number, nativePrice: number): number {
    if (trdgInPool === 0) return 0
    const nativeBalanceAdjusted = nativeInPool * (10 ** -18)
    const trdgBalanceAdjusted = trdgInPool * (10 ** -9)
    return (nativeBalanceAdjusted * nativePrice) / trdgBalanceAdjusted
}

// Fetch all BSC data sequentially with delays
async function fetchBscData() {
    const bnbPrice = await getBnbPrice()
    await wait(500)

    const bscPoolWbnbRaw = await getBscTokenBalance(WBNB_ADDRESS, PCSV1_POOL_ADDRESS)
    await wait(500)

    const bscPoolTrdgRaw = await getBscTokenBalance(TRDG_BSC_ADDRESS, PCSV1_POOL_ADDRESS)
    await wait(500)

    const bscBurnedRaw = await getBscTokenBalance(TRDG_BSC_ADDRESS, BURN_WALLET_ADDRESS)

    return { bnbPrice, bscPoolWbnbRaw, bscPoolTrdgRaw, bscBurnedRaw }
}

// Fetch all ETH data sequentially with delays
async function fetchEthData() {
    const ethNativePrice = await getEthPrice()
    await wait(500)

    const ethPoolWethRaw = await getEthTokenBalance(WETH_ADDRESS, UNISWAP_POOL_ADDRESS)
    await wait(500)

    const ethPoolTrdgRaw = await getEthTokenBalance(TRDG_ETH_ADDRESS, UNISWAP_POOL_ADDRESS)
    await wait(500)

    const ethBurnedRaw = await getEthTokenBalance(TRDG_ETH_ADDRESS, BURN_WALLET_ADDRESS)

    return { ethNativePrice, ethPoolWethRaw, ethPoolTrdgRaw, ethBurnedRaw }
}

export async function GET() {
    try {
        // Fetch BSC and ETH data in parallel (they use different API endpoints)
        const [bscData, ethData] = await Promise.all([
            fetchBscData(),
            fetchEthData()
        ])

        const { bnbPrice, bscPoolWbnbRaw, bscPoolTrdgRaw, bscBurnedRaw } = bscData
        const { ethNativePrice, ethPoolWethRaw, ethPoolTrdgRaw, ethBurnedRaw } = ethData

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
