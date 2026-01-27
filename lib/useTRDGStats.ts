'use client'

import { useState, useEffect, useCallback } from 'react'

// Contract addresses (verified from original main.js)
const TRDG_BSC_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'
const TRDG_ETH_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'
const WBNB_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const PCSV1_POOL_ADDRESS = '0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E'
const UNISWAP_POOL_ADDRESS = '0xc2367025716cf1109321e4cb96f47c0e3f9beb05'
const BURN_WALLET_ADDRESS = '0x000000000000000000000000000000000000dead'
const DONATION_WALLET_ADDRESS = '0xface884c4bcaedf27ae1f31199726c67e711d8dd'
const GOLDFARM_ADDRESS = '0xb97591b3a5a7017a8e92e24f75eb28106dd94f0a'

// API Keys (from original main.js)
const BSC_API_KEY = '2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET'
const ETH_API_KEY = 'U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2'

// Max supply (from original: 100000 * 10 ** 12 = 100 Quadrillion with 9 decimals)
const MAX_SUPPLY = 100000 * 10 ** 12

export interface TRDGStats {
    // Prices
    bscPrice: number
    ethPrice: number
    bscPricePerTrillion: number
    ethPricePerTrillion: number

    // Native token prices
    bnbPrice: number
    ethNativePrice: number

    // Burn stats
    bscBurned: number
    ethBurned: number
    totalBurned: number
    burnPercentage: number

    // Market caps
    bscMarketCap: number
    ethMarketCap: number

    // Liquidity
    bscLiquidity: number
    ethLiquidity: number

    // Pool balances
    bscPoolTrdg: number
    bscPoolWbnb: number
    ethPoolTrdg: number
    ethPoolWeth: number

    // Circulating supply
    bscCirculating: number
    ethCirculating: number
}

export interface WalletStats {
    address: string
    balance: number
    rewards: number
    valueUsd: number
    rewardsValueUsd: number
}

const defaultStats: TRDGStats = {
    bscPrice: 0,
    ethPrice: 0,
    bscPricePerTrillion: 0,
    ethPricePerTrillion: 0,
    bnbPrice: 0,
    ethNativePrice: 0,
    bscBurned: 0,
    ethBurned: 0,
    totalBurned: 0,
    burnPercentage: 0,
    bscMarketCap: 0,
    ethMarketCap: 0,
    bscLiquidity: 0,
    ethLiquidity: 0,
    bscPoolTrdg: 0,
    bscPoolWbnb: 0,
    ethPoolTrdg: 0,
    ethPoolWeth: 0,
    bscCirculating: 0,
    ethCirculating: 0,
}

// Wait helper
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Get BSC token balance (matching original getBscAccountBalanceByContractAddress)
async function getBscTokenBalance(contractAddress: string, walletAddress: string): Promise<number> {
    try {
        const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${BSC_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.status === '1' && data.result) {
            return parseInt(data.result) || 0
        }
        console.warn('BSC API returned:', data)
        return 0
    } catch (error) {
        console.error('Error fetching BSC balance:', error)
        return 0
    }
}

// Get ETH token balance (matching original getEthAccountBalanceByContractAddress)
async function getEthTokenBalance(contractAddress: string, walletAddress: string): Promise<number> {
    try {
        // Note: Original uses api.etherscan.com but api.etherscan.io also works
        const url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${ETH_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.status === '1' && data.result) {
            return parseInt(data.result) || 0
        }
        console.warn('ETH API returned:', data)
        return 0
    } catch (error) {
        console.error('Error fetching ETH balance:', error)
        return 0
    }
}

// Get BNB price (matching original getWbnbPrice)
async function getBnbPrice(): Promise<number> {
    try {
        const url = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${BSC_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.status === '1' && data.result?.ethusd) {
            return parseFloat(data.result.ethusd) || 0
        }
        console.warn('BNB price API returned:', data)
        return 0
    } catch (error) {
        console.error('Error fetching BNB price:', error)
        return 0
    }
}

// Get ETH price (matching original getWethPrice)
async function getEthPrice(): Promise<number> {
    try {
        const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ETH_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.status === '1' && data.result?.ethusd) {
            return parseFloat(data.result.ethusd) || 0
        }
        console.warn('ETH price API returned:', data)
        return 0
    } catch (error) {
        console.error('Error fetching ETH price:', error)
        return 0
    }
}

// Calculate TRDG price from pool (matching original getTokenPricePcsV1/getTokenPriceUniswap)
// Formula: (basePairBalance * 10^-18 * nativePrice) / (tokenBalance * 10^-9)
function calculateTrdgPrice(nativeInPool: number, trdgInPool: number, nativePrice: number): number {
    if (trdgInPool === 0) return 0
    const nativeBalanceAdjusted = nativeInPool * (10 ** -18)
    const trdgBalanceAdjusted = trdgInPool * (10 ** -9)
    return (nativeBalanceAdjusted * nativePrice) / trdgBalanceAdjusted
}

export function useTRDGStats(refreshInterval: number = 30000) {
    const [stats, setStats] = useState<TRDGStats>(defaultStats)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    const fetchStats = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            // Step 1: Get native token prices first (required for price calculation)
            const bnbPrice = await getBnbPrice()
            await wait(300) // Rate limiting
            const ethNativePrice = await getEthPrice()
            await wait(300)

            // Step 2: Get BSC pool balances
            const bscPoolWbnbRaw = await getBscTokenBalance(WBNB_ADDRESS, PCSV1_POOL_ADDRESS)
            await wait(300)
            const bscPoolTrdgRaw = await getBscTokenBalance(TRDG_BSC_ADDRESS, PCSV1_POOL_ADDRESS)
            await wait(300)

            // Step 3: Get ETH pool balances
            const ethPoolWethRaw = await getEthTokenBalance(WETH_ADDRESS, UNISWAP_POOL_ADDRESS)
            await wait(300)
            const ethPoolTrdgRaw = await getEthTokenBalance(TRDG_ETH_ADDRESS, UNISWAP_POOL_ADDRESS)
            await wait(300)

            // Step 4: Get burn wallet balances
            const bscBurnedRaw = await getBscTokenBalance(TRDG_BSC_ADDRESS, BURN_WALLET_ADDRESS)
            await wait(300)
            const ethBurnedRaw = await getEthTokenBalance(TRDG_ETH_ADDRESS, BURN_WALLET_ADDRESS)

            // Calculate prices using the original formula
            const bscPrice = calculateTrdgPrice(bscPoolWbnbRaw, bscPoolTrdgRaw, bnbPrice)
            const ethPrice = calculateTrdgPrice(ethPoolWethRaw, ethPoolTrdgRaw, ethNativePrice)

            // Convert burn values (divide by 10^9 for TRDG's 9 decimals)
            const bscBurned = bscBurnedRaw / (10 ** 9)
            const ethBurned = ethBurnedRaw / (10 ** 9)
            const totalBurned = bscBurned + ethBurned

            // Calculate burn percentage (each chain started with MAX_SUPPLY)
            const burnPercentage = ((bscBurned + ethBurned) / (MAX_SUPPLY * 2)) * 100

            // Calculate circulating supply
            const bscCirculating = MAX_SUPPLY - bscBurned
            const ethCirculating = MAX_SUPPLY - ethBurned

            // Calculate market caps (matching original: (MAX_SUPPLY - burned) * price)
            const bscMarketCap = bscCirculating * bscPrice
            const ethMarketCap = ethCirculating * ethPrice

            // Calculate liquidity (matching original: poolNative * nativePrice)
            const bscPoolWbnb = bscPoolWbnbRaw * (10 ** -18)
            const ethPoolWeth = ethPoolWethRaw * (10 ** -18)
            const bscLiquidity = bscPoolWbnb * bnbPrice
            const ethLiquidity = ethPoolWeth * ethNativePrice

            // Pool TRDG balances (adjusted)
            const bscPoolTrdg = bscPoolTrdgRaw * (10 ** -9)
            const ethPoolTrdg = ethPoolTrdgRaw * (10 ** -9)

            const newStats: TRDGStats = {
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

            setStats(newStats)
            setLastUpdated(new Date())
            console.log('TRDG Stats Updated:', {
                bscPrice: bscPrice.toFixed(18),
                ethPrice: ethPrice.toFixed(18),
                bnbPrice,
                ethNativePrice,
                bscBurned: formatCompact(bscBurned),
                ethBurned: formatCompact(ethBurned)
            })
        } catch (err) {
            console.error('Error fetching TRDG stats:', err)
            setError('Failed to fetch stats')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchStats()
        const interval = setInterval(fetchStats, refreshInterval)
        return () => clearInterval(interval)
    }, [fetchStats, refreshInterval])

    return { stats, loading, error, lastUpdated, refresh: fetchStats }
}

// Hook for wallet-specific stats (matching original rewards calculation)
export function useWalletStats(chain: 'bsc' | 'eth', address: string | null) {
    const [walletStats, setWalletStats] = useState<WalletStats | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchWalletStats = useCallback(async (walletAddress: string, currentPrice: number) => {
        if (!walletAddress || walletAddress.length !== 42) return

        setLoading(true)
        setError(null)

        try {
            const apiKey = chain === 'bsc' ? BSC_API_KEY : ETH_API_KEY
            const baseUrl = chain === 'bsc' ? 'https://api.bscscan.com' : 'https://api.etherscan.io'
            const trdgAddress = chain === 'bsc' ? TRDG_BSC_ADDRESS : TRDG_ETH_ADDRESS

            // Get current balance
            const balanceRaw = chain === 'bsc'
                ? await getBscTokenBalance(trdgAddress, walletAddress)
                : await getEthTokenBalance(trdgAddress, walletAddress)
            const balance = balanceRaw / (10 ** 9)

            await wait(300)

            // Get transfer history for rewards calculation
            const transfersUrl = `${baseUrl}/api?module=account&action=tokentx&contractaddress=${trdgAddress}&address=${walletAddress}&page=1&offset=10000&startblock=0&endblock=999999999&sort=asc&apikey=${apiKey}`
            const transfersResponse = await fetch(transfersUrl)
            const transfersData = await transfersResponse.json()
            const transfers = transfersData.result || []

            // Calculate rewards (matching original calculateBscTrdgRewards/calculateEthTrdgRewards)
            let trdgIn = 0
            let trdgOut = 0
            const addr = walletAddress.toLowerCase()
            const tax = 5 // 5% tax

            for (const transfer of transfers) {
                const value = parseInt(transfer.value) || 0
                if (transfer.to.toLowerCase() === addr) {
                    trdgIn += value
                } else {
                    trdgOut += value
                }
            }

            // Original formula: currentBalance - (trdgIn - trdgOut / (1 - tax / 100))
            const expectedBalance = (trdgIn - trdgOut / (1 - tax / 100)) / (10 ** 9)
            const rewards = balance - expectedBalance

            setWalletStats({
                address: walletAddress,
                balance,
                rewards: Math.max(0, rewards),
                valueUsd: balance * currentPrice,
                rewardsValueUsd: Math.max(0, rewards) * currentPrice,
            })
        } catch (err) {
            console.error('Error fetching wallet stats:', err)
            setError('Failed to fetch wallet stats')
        } finally {
            setLoading(false)
        }
    }, [chain])

    return { walletStats, loading, error, fetchWalletStats }
}

// Formatting helpers
export function formatNumber(num: number, decimals: number = 0): string {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: decimals,
    }).format(num)
}

export function formatCurrency(num: number, decimals: number = 2): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: decimals,
    }).format(num)
}

export function formatCompact(num: number): string {
    if (num >= 1e15) return `${(num / 1e15).toFixed(2)}Q`
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
    return num.toFixed(2)
}

// Export constants for use elsewhere
export const TRDG_CONTRACT = TRDG_BSC_ADDRESS
export const TRDG_MAX_SUPPLY = MAX_SUPPLY
