'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// Contract addresses for reference
const TRDG_BSC_ADDRESS = '0x92a42db88ed0f02c71d439e55962ca7cab0168b5'

// API Keys for wallet lookups
const BSC_API_KEY = 'HT5DPQEIA923Z57R3HQ8Z2HXPXF2JUX959'
const ETH_API_KEY = 'NYC5AEGYB163CF5M4WQCVCRGIWV98A6QXI'

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
    bscHolders: number
    ethHolders: number
    totalHolders: number
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
    bscHolders: 0,
    ethHolders: 0,
    totalHolders: 0,
}

export function useTRDGStats(refreshInterval: number = 60000) {
    const [stats, setStats] = useState<TRDGStats>(defaultStats)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

    // Use ref to track initialization to avoid stale closure issues in useCallback
    const isInitializedRef = useRef(false)

    // Use ref to track current stats to avoid stale closures in fetchStats without triggering re-renders
    const statsRef = useRef(defaultStats)

    // Sync ref with state
    useEffect(() => {
        statsRef.current = stats
    }, [stats])

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
                const currentPrice = statsRef.current.bscPrice

                if (isValidData || currentPrice === 0) {
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
                    currentPrice: currentPrice
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
                    const fusedStats = { ...defaultStats, ...parsed.data }
                    setStats(fusedStats)
                    statsRef.current = fusedStats // Sync ref immediately
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

            // Get current balance only (simplified to avoid rate limits)
            const balanceUrl = `${baseUrl}/api?module=account&action=tokenbalance&contractaddress=${trdgAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`
            const balanceResponse = await fetch(balanceUrl)
            const balanceData = await balanceResponse.json()

            if (balanceData.status !== '1') {
                throw new Error(balanceData.message || 'Failed to fetch balance')
            }

            const balanceRaw = parseInt(balanceData.result) || 0
            const balance = balanceRaw / (10 ** 9)

            setWalletStats({
                address: walletAddress,
                balance,
                rewards: 0, // Simplified: set to 0 to avoid rate limits on transaction history
                valueUsd: balance * currentPrice,
                rewardsValueUsd: 0,
            })
        } catch (err) {
            console.error('Error fetching wallet stats:', err)
            setError('Failed to fetch wallet balance. Please try again.')
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
