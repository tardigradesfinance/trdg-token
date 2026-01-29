'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// Contract addresses for reference
const TRDG_BSC_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'

// API Keys for wallet lookups
const BSC_API_KEY = '2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET'
const ETH_API_KEY = 'U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2'

const MAX_SUPPLY = 100000 * 10 ** 12

export interface TRDGStats {
    bscPrice: number
    ethPrice: number
    bscPricePerTrillion: number
    ethPricePerTrillion: number
    bnbPrice: number
    ethNativePrice: number
    bscBurned: number
    ethBurned: number
    totalBurned: number
    burnPercentage: number
    bscMarketCap: number
    ethMarketCap: number
    bscLiquidity: number
    ethLiquidity: number
    bscPoolTrdg: number
    bscPoolWbnb: number
    ethPoolTrdg: number
    ethPoolWeth: number
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

export function useTRDGStats(refreshInterval: number = 60000) {
    const [stats, setStats] = useState<TRDGStats>(defaultStats)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    // Use ref to track initialization to avoid stale closure issues in useCallback
    const isInitializedRef = useRef(false)

    const fetchStats = useCallback(async () => {
        try {
            // Only show loading state if we haven't initialized yet
            if (!isInitializedRef.current) {
                setLoading(true)
            }
            setError(null)

            // Use server-side API route to avoid CORS issues
            const response = await fetch('/api/stats')
            const result = await response.json()

            if (result.success && result.data) {
                // Validate data quality before updating
                // Only update if we have valid price data OR if we currently have nothing
                const isValidData = result.data.bscPrice > 0

                if (isValidData || stats.bscPrice === 0) {
                    setStats(prev => ({ ...defaultStats, ...result.data }))
                    setLastUpdated(new Date())
                    isInitializedRef.current = true

                    // Only cache high quality data
                    if (isValidData && typeof window !== 'undefined') {
                        localStorage.setItem('trdg_stats', JSON.stringify({
                            data: result.data,
                            timestamp: new Date().toISOString()
                        }))
                    }
                }

                console.log('TRDG Stats Updated:', {
                    bscPrice: result.data.bscPrice,
                    ethPrice: result.data.ethPrice,
                    bnbPrice: result.data.bnbPrice,
                    status: isValidData ? 'Valid' : 'Ignored (Invalid)',
                    currentPrice: stats.bscPrice
                })
            } else {
                setError('Failed to fetch stats')
                console.error('API error:', result.error)
            }
        } catch (err) {
            console.error('Error fetching TRDG stats:', err)
            setError('Failed to fetch stats')
        } finally {
            setLoading(false)
        }
    }, [])

    // Load from cache on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cached = localStorage.getItem('trdg_stats')
            if (cached) {
                try {
                    const parsed = JSON.parse(cached)
                    setStats({ ...defaultStats, ...parsed.data })
                    setLastUpdated(new Date(parsed.timestamp))
                    setLoading(false)
                    isInitializedRef.current = true
                } catch (e) {
                    console.error('Failed to parse cached stats', e)
                }
            }
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
            const trdgAddress = TRDG_BSC_ADDRESS // Same on both chains

            // Get current balance
            const balanceUrl = `${baseUrl}/api?module=account&action=tokenbalance&contractaddress=${trdgAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`
            const balanceResponse = await fetch(balanceUrl)
            const balanceData = await balanceResponse.json()
            const balanceRaw = balanceData.status === '1' ? parseInt(balanceData.result) || 0 : 0
            const balance = balanceRaw / (10 ** 9)

            await new Promise(r => setTimeout(r, 300))

            // Get transfer history for rewards calculation
            const transfersUrl = `${baseUrl}/api?module=account&action=tokentx&contractaddress=${trdgAddress}&address=${walletAddress}&page=1&offset=10000&startblock=0&endblock=999999999&sort=asc&apikey=${apiKey}`
            const transfersResponse = await fetch(transfersUrl)
            const transfersData = await transfersResponse.json()
            const transfers = transfersData.result || []

            // Calculate rewards
            let trdgIn = 0
            let trdgOut = 0
            const addr = walletAddress.toLowerCase()
            const tax = 5

            for (const transfer of transfers) {
                const value = parseInt(transfer.value) || 0
                if (transfer.to.toLowerCase() === addr) {
                    trdgIn += value
                } else {
                    trdgOut += value
                }
            }

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

export const TRDG_CONTRACT = TRDG_BSC_ADDRESS
export const TRDG_MAX_SUPPLY = MAX_SUPPLY
