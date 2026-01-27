'use client'

import { useState, useEffect, useCallback } from 'react'

// Contract addresses
const TRDG_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'
const WBNB_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const PCSV1_POOL_ADDRESS = '0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E'
const UNISWAP_POOL_ADDRESS = '0xc2367025716cf1109321e4cb96f47c0e3f9beb05'
const BURN_WALLET_ADDRESS = '0x000000000000000000000000000000000000dead'

// API Keys (public, rate-limited)
const BSC_API_KEY = '2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET'
const ETH_API_KEY = 'U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2'

const MAX_SUPPLY = 100000 * 10 ** 12 // 100 quadrillion

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

// Helper to fetch token balance
async function getTokenBalance(chain: 'bsc' | 'eth', contractAddress: string, walletAddress: string): Promise<number> {
    const apiKey = chain === 'bsc' ? BSC_API_KEY : ETH_API_KEY
    const baseUrl = chain === 'bsc' ? 'https://api.bscscan.com' : 'https://api.etherscan.io'

    try {
        const url = `${baseUrl}/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        return parseInt(data.result) || 0
    } catch (error) {
        console.error(`Error fetching ${chain} balance:`, error)
        return 0
    }
}

// Helper to fetch native token price (BNB/ETH)
async function getNativePrice(chain: 'bsc' | 'eth'): Promise<number> {
    const apiKey = chain === 'bsc' ? BSC_API_KEY : ETH_API_KEY
    const baseUrl = chain === 'bsc' ? 'https://api.bscscan.com' : 'https://api.etherscan.io'

    try {
        const url = `${baseUrl}/api?module=stats&action=${chain === 'bsc' ? 'bnbprice' : 'ethprice'}&apikey=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        return parseFloat(data.result?.ethusd) || 0
    } catch (error) {
        console.error(`Error fetching ${chain} native price:`, error)
        return 0
    }
}

// Calculate token price from pool balances
function calculatePrice(poolTokenBalance: number, poolNativeBalance: number, nativePrice: number): number {
    if (poolTokenBalance === 0) return 0
    const tokenBalanceAdjusted = poolTokenBalance / 10 ** 9
    const nativeBalanceAdjusted = poolNativeBalance / 10 ** 18
    return (nativeBalanceAdjusted * nativePrice) / tokenBalanceAdjusted
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

            // Fetch all data in parallel where possible
            const [
                bnbPrice,
                ethNativePrice,
                bscPoolWbnb,
                bscPoolTrdg,
                ethPoolWeth,
                ethPoolTrdg,
                bscBurnedRaw,
                ethBurnedRaw,
            ] = await Promise.all([
                getNativePrice('bsc'),
                getNativePrice('eth'),
                getTokenBalance('bsc', WBNB_ADDRESS, PCSV1_POOL_ADDRESS),
                getTokenBalance('bsc', TRDG_ADDRESS, PCSV1_POOL_ADDRESS),
                getTokenBalance('eth', WETH_ADDRESS, UNISWAP_POOL_ADDRESS),
                getTokenBalance('eth', TRDG_ADDRESS, UNISWAP_POOL_ADDRESS),
                getTokenBalance('bsc', TRDG_ADDRESS, BURN_WALLET_ADDRESS),
                getTokenBalance('eth', TRDG_ADDRESS, BURN_WALLET_ADDRESS),
            ])

            // Calculate prices
            const bscPrice = calculatePrice(bscPoolTrdg, bscPoolWbnb, bnbPrice)
            const ethPrice = calculatePrice(ethPoolTrdg, ethPoolWeth, ethNativePrice)

            // Calculate burn stats
            const bscBurned = bscBurnedRaw / 10 ** 9
            const ethBurned = ethBurnedRaw / 10 ** 9
            const totalBurned = bscBurned + ethBurned
            const burnPercentage = (totalBurned / (MAX_SUPPLY * 2)) * 100 // *2 because both chains started with max supply

            // Calculate circulating supply
            const bscCirculating = MAX_SUPPLY - bscBurned
            const ethCirculating = MAX_SUPPLY - ethBurned

            // Calculate market caps
            const bscMarketCap = bscCirculating * bscPrice
            const ethMarketCap = ethCirculating * ethPrice

            // Calculate liquidity
            const bscLiquidity = (bscPoolWbnb / 10 ** 18) * bnbPrice
            const ethLiquidity = (ethPoolWeth / 10 ** 18) * ethNativePrice

            const newStats: TRDGStats = {
                bscPrice,
                ethPrice,
                bscPricePerTrillion: bscPrice * 10 ** 12,
                ethPricePerTrillion: ethPrice * 10 ** 12,
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
                bscPoolTrdg: bscPoolTrdg / 10 ** 9,
                bscPoolWbnb: bscPoolWbnb / 10 ** 18,
                ethPoolTrdg: ethPoolTrdg / 10 ** 9,
                ethPoolWeth: ethPoolWeth / 10 ** 18,
                bscCirculating,
                ethCirculating,
            }

            setStats(newStats)
            setLastUpdated(new Date())
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

// Hook for wallet-specific stats
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

            // Get current balance
            const balanceRaw = await getTokenBalance(chain, TRDG_ADDRESS, walletAddress)
            const balance = balanceRaw / 10 ** 9

            // Get transfer history for rewards calculation
            const transfersUrl = `${baseUrl}/api?module=account&action=tokentx&contractaddress=${TRDG_ADDRESS}&address=${walletAddress}&page=1&offset=10000&startblock=0&endblock=999999999&sort=asc&apikey=${apiKey}`
            const transfersResponse = await fetch(transfersUrl)
            const transfersData = await transfersResponse.json()
            const transfers = transfersData.result || []

            // Calculate rewards
            let trdgIn = 0
            let trdgOut = 0
            const addr = walletAddress.toLowerCase()

            for (const transfer of transfers) {
                const value = parseInt(transfer.value) || 0
                if (transfer.to.toLowerCase() === addr) {
                    trdgIn += value
                } else {
                    trdgOut += value
                }
            }

            const tax = 5 // 5% tax
            const expectedBalance = (trdgIn - trdgOut / (1 - tax / 100)) / 10 ** 9
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
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
    return num.toFixed(2)
}
