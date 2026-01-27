'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Activity, Flame, Droplets, Users, TrendingUp, RefreshCw,
    Calculator, Wallet, Shield, Binary, Search, BarChart3,
    ExternalLink, Copy
} from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

// Constants from original main.js
const TRDG_ADDRESS = "0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
const BURN_WALLET = "0x000000000000000000000000000000000000dead"
const PCSV1_POOL = "0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E"
const UNISWAP_POOL = "0xc2367025716cf1109321e4cb96f47c0e3f9beb05"
const WBNB_ADDRESS = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

const MAX_SUPPLY = 100000 * 10 ** 12 // 100 Quadrillion
const INITIAL_BURN_PERCENT = 50 // 50% burned at launch

interface ChainStats {
    price: number
    pricePerTrillion: number
    burned: number
    burnedPercent: number
    circulatingSupply: number
    marketCap: number
    liquidity: number
    holders?: number
    lastUpdate: number
}

interface WalletData {
    address: string
    balance: number
    rewards: number
    value: number
    rewardsValue: number
}

export function BioScanner() {
    const [activeChain, setActiveChain] = useState<'bsc' | 'eth'>('bsc')
    const [loading, setLoading] = useState(true)
    const [lastRefresh, setLastRefresh] = useState<Date | null>(null)

    const [bscStats, setBscStats] = useState<ChainStats | null>(null)
    const [ethStats, setEthStats] = useState<ChainStats | null>(null)

    const [walletAddress, setWalletAddress] = useState('')
    const [walletData, setWalletData] = useState<WalletData | null>(null)
    const [walletLoading, setWalletLoading] = useState(false)

    // Calculator state
    const [tokenAmount, setTokenAmount] = useState('1000000000000') // 1 Trillion default
    const [targetMC, setTargetMC] = useState(10000000) // $10M default

    const formatNumber = (num: number, decimals: number = 0) => {
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(num)
    }

    const formatCurrency = (num: number, decimals: number = 2) => {
        return '$' + formatNumber(num, decimals)
    }

    // Fetch BSC token balance from BscScan
    const fetchBscBalance = async (address: string, wallet: string): Promise<number> => {
        try {
            const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${address}&address=${wallet}&tag=latest&apikey=2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET`
            const res = await fetch(url)
            const data = await res.json()
            return parseInt(data.result) / 10 ** 9
        } catch { return 0 }
    }

    // Fetch ETH token balance from Etherscan
    const fetchEthBalance = async (address: string, wallet: string): Promise<number> => {
        try {
            const url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${address}&address=${wallet}&tag=latest&apikey=U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2`
            const res = await fetch(url)
            const data = await res.json()
            return parseInt(data.result) / 10 ** 9
        } catch { return 0 }
    }

    // Fetch native chain price (BNB or ETH)
    const fetchNativePrice = async (chain: 'bsc' | 'eth'): Promise<number> => {
        try {
            if (chain === 'bsc') {
                const url = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=2TSW88MVBF8FBT31JSDW7KD2IBE1BJ2CET`
                const res = await fetch(url)
                const data = await res.json()
                return parseFloat(data.result.ethusd)
            } else {
                const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=U4GW7GB7GYNZESDYSUH9GKPJ3VQZCGVSK2`
                const res = await fetch(url)
                const data = await res.json()
                return parseFloat(data.result.ethusd)
            }
        } catch { return 0 }
    }

    // Calculate TRDG price from LP pool
    const calculatePrice = async (chain: 'bsc' | 'eth'): Promise<{ price: number, liquidity: number }> => {
        try {
            const nativePrice = await fetchNativePrice(chain)

            let nativeInPool: number
            let trdgInPool: number

            if (chain === 'bsc') {
                nativeInPool = await fetchBscBalance(WBNB_ADDRESS, PCSV1_POOL) * 10 ** 9 / 10 ** 18
                await new Promise(r => setTimeout(r, 300)) // Rate limit
                trdgInPool = await fetchBscBalance(TRDG_ADDRESS, PCSV1_POOL)
            } else {
                nativeInPool = await fetchEthBalance(WETH_ADDRESS, UNISWAP_POOL) * 10 ** 9 / 10 ** 18
                await new Promise(r => setTimeout(r, 300))
                trdgInPool = await fetchEthBalance(TRDG_ADDRESS, UNISWAP_POOL)
            }

            const liquidity = nativeInPool * nativePrice
            const price = (nativeInPool * nativePrice) / trdgInPool

            return { price, liquidity }
        } catch { return { price: 0, liquidity: 0 } }
    }

    // Fetch all chain stats
    const fetchChainStats = useCallback(async (chain: 'bsc' | 'eth') => {
        try {
            // Get burn wallet balance
            const burned = chain === 'bsc'
                ? await fetchBscBalance(TRDG_ADDRESS, BURN_WALLET)
                : await fetchEthBalance(TRDG_ADDRESS, BURN_WALLET)

            await new Promise(r => setTimeout(r, 300)) // Rate limit

            // Get price and liquidity
            const { price, liquidity } = await calculatePrice(chain)

            const circulatingSupply = MAX_SUPPLY - burned
            const burnedPercent = (burned / MAX_SUPPLY) * 100
            const marketCap = circulatingSupply * price
            const pricePerTrillion = price * 10 ** 12

            const stats: ChainStats = {
                price,
                pricePerTrillion,
                burned,
                burnedPercent,
                circulatingSupply,
                marketCap,
                liquidity,
                lastUpdate: Date.now()
            }

            if (chain === 'bsc') {
                setBscStats(stats)
            } else {
                setEthStats(stats)
            }

            return stats
        } catch (error) {
            console.error(`Error fetching ${chain} stats:`, error)
            return null
        }
    }, [])

    // Fetch wallet-specific data
    const fetchWalletData = async () => {
        if (!walletAddress || walletAddress.length !== 42) return

        setWalletLoading(true)
        try {
            const balance = activeChain === 'bsc'
                ? await fetchBscBalance(TRDG_ADDRESS, walletAddress)
                : await fetchEthBalance(TRDG_ADDRESS, walletAddress)

            const stats = activeChain === 'bsc' ? bscStats : ethStats
            const price = stats?.price || 0

            // Note: Full rewards calculation requires transaction history
            // This is a simplified version
            const value = balance * price

            setWalletData({
                address: walletAddress,
                balance,
                rewards: 0, // Would need tx history for accurate calculation
                value,
                rewardsValue: 0
            })
        } catch (error) {
            console.error('Error fetching wallet data:', error)
        } finally {
            setWalletLoading(false)
        }
    }

    // Initial data fetch
    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true)
            await fetchChainStats('bsc')
            await new Promise(r => setTimeout(r, 500))
            await fetchChainStats('eth')
            setLastRefresh(new Date())
            setLoading(false)
        }

        fetchAllData()

        // Refresh every 60 seconds
        const interval = setInterval(fetchAllData, 60000)
        return () => clearInterval(interval)
    }, [fetchChainStats])

    const currentStats = activeChain === 'bsc' ? bscStats : ethStats
    const currentPrice = currentStats?.price || 0
    const circulatingSupply = currentStats?.circulatingSupply || (MAX_SUPPLY / 2)

    // Projection: (Token Amount * Target price) where target price = TargetMC / CircSupply
    const projection = parseFloat(tokenAmount) * (targetMC / circulatingSupply)
    const growthPotential = targetMC / (currentPrice * circulatingSupply)

    return (
        <section id="bioscanner" className="relative py-16 md:py-32 bg-black overflow-hidden">
            <GridBackground />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trdg-green/10 border border-trdg-green/20 mb-4 md:mb-6"
                    >
                        <Activity className="text-trdg-green animate-pulse" size={14} />
                        <span className="text-[9px] md:text-[10px] font-mono text-trdg-green uppercase tracking-widest font-black">
                            Real-Time Biometric Analysis
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-7xl font-orbitron font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">
                        BIO<span className="text-trdg-green text-glow-green">SCANNER</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                        Dual-Chain Organism Vitals & Wallet Diagnostics
                    </p>
                </div>

                {/* Chain Toggle */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
                    <button
                        onClick={() => setActiveChain('bsc')}
                        className={`flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 rounded-xl font-orbitron font-bold uppercase text-[10px] md:text-sm transition-all ${activeChain === 'bsc'
                            ? 'bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.3)]'
                            : 'bg-white/5 text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500/10'
                            }`}
                    >
                        BSC Chain
                    </button>
                    <button
                        onClick={() => setActiveChain('eth')}
                        className={`flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 rounded-xl font-orbitron font-bold uppercase text-[10px] md:text-sm transition-all ${activeChain === 'eth'
                            ? 'bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                            : 'bg-white/5 text-blue-400 border border-blue-500/30 hover:bg-blue-500/10'
                            }`}
                    >
                        ETH Chain
                    </button>
                    <button
                        onClick={() => { fetchChainStats(activeChain); setLastRefresh(new Date()) }}
                        className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                        title="Refresh Data"
                    >
                        <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                    </button>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">

                    {/* Price Card */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">PRICE_FEED.EXE</div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${activeChain === 'bsc' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-500/10 text-blue-400'}`}>
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">$TRDG Price</h3>
                                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase">{activeChain.toUpperCase()} Network</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Price_Per_Token</div>
                                <div className="text-xl md:text-2xl font-bold text-white font-mono break-all leading-tight">
                                    {loading ? '...' : `$${currentStats?.price.toFixed(12) || '0'}...`}
                                </div>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Price_Per_Trillion</div>
                                <div className={`text-2xl md:text-3xl font-black font-orbitron ${activeChain === 'bsc' ? 'text-yellow-400' : 'text-blue-400'}`}>
                                    {loading ? '...' : formatCurrency(currentStats?.pricePerTrillion || 0, 2)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Burn Stats Card */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">BURN_MONITOR.EXE</div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                                <Flame size={20} />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Tun State (Burned)</h3>
                                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase">Tokens in Cryptobiosis</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase mb-2">
                                    <span>Total_Burned</span>
                                    <span className="text-orange-500">{loading ? '...' : `${currentStats?.burnedPercent.toFixed(2)}%`}</span>
                                </div>
                                <div className="h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentStats?.burnedPercent || 50}%` }}
                                        className="h-full bg-gradient-to-r from-orange-600 to-orange-400"
                                    />
                                </div>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Burned_Tokens</div>
                                <div className="text-lg md:text-xl font-bold text-orange-400 font-mono break-all leading-tight">
                                    {loading ? '...' : formatNumber(currentStats?.burned || 0)}
                                </div>
                            </div>
                            <div className="text-[9px] md:text-[10px] text-gray-400 font-mono italic">
                                LP tokens are BURNED FOR ETERNITY.
                            </div>
                        </div>
                    </motion.div>

                    {/* Market Cap & Liquidity Card */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">MARKET_DATA.EXE</div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-trdg-cyan/10 flex items-center justify-center text-trdg-cyan">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Colony Metrics</h3>
                                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase">Cap & Liquidity</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Market_Cap</div>
                                <div className="text-xl md:text-2xl font-bold text-trdg-cyan font-orbitron">
                                    {loading ? '...' : formatCurrency(currentStats?.marketCap || 0, 0)}
                                </div>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Liquidity_Pool</div>
                                <div className="text-lg md:text-xl font-bold text-trdg-green font-mono">
                                    {loading ? '...' : formatCurrency(currentStats?.liquidity || 0, 0)}
                                </div>
                            </div>
                            <div className="text-[9px] md:text-[10px] text-gray-400 font-mono text-center">
                                Circulating: {loading ? '...' : formatNumber(currentStats?.circulatingSupply || 0)} TRDG
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Wallet Tracker & Projection Calculator */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                    {/* Wallet Tracker */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Wallet size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-orbitron font-bold text-white uppercase">Wallet Scanner</h3>
                                <p className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    Diagnostics ({activeChain.toUpperCase()})
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={walletAddress}
                                    onChange={(e) => setWalletAddress(e.target.value)}
                                    placeholder="Enter address..."
                                    className="flex-1 bg-black/50 border border-white/10 rounded-xl px-3 md:px-4 py-3 font-mono text-xs md:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50"
                                />
                                <button
                                    onClick={fetchWalletData}
                                    disabled={walletLoading || walletAddress.length !== 42}
                                    className="px-4 md:px-6 py-3 rounded-xl bg-purple-500 text-white font-bold font-orbitron uppercase text-[10px] md:text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-400 transition-colors"
                                >
                                    {walletLoading ? <RefreshCw size={16} className="animate-spin" /> : <Search size={16} />}
                                </button>
                            </div>

                            <AnimatePresence>
                                {walletData && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                                <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Balance</div>
                                                <div className="text-md md:text-lg font-bold text-white break-all">{formatNumber(walletData.balance)}</div>
                                                <div className="text-[10px] md:text-xs text-gray-400">{formatCurrency(walletData.value, 4)}</div>
                                            </div>
                                            <div className="p-4 bg-black/40 rounded-xl border border-purple-500/20">
                                                <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Est. Rewards</div>
                                                <div className="text-md md:text-lg font-bold text-purple-400 break-all">{formatNumber(walletData.rewards)}</div>
                                                <div className="text-[10px] md:text-xs text-gray-400">{formatCurrency(walletData.rewardsValue, 4)}</div>
                                            </div>
                                        </div>
                                        <p className="text-[9px] md:text-[10px] text-gray-500 font-mono text-center">
                                            Reflection data synced from blockchain
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Projection Calculator */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-trdg-cyan/10 flex items-center justify-center text-trdg-cyan">
                                <Calculator size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-orbitron font-bold text-white uppercase">Projection Terminal</h3>
                                <p className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    Simulate future valuations
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-mono text-trdg-cyan uppercase mb-2">Token Amount</label>
                                <input
                                    type="text"
                                    value={tokenAmount}
                                    onChange={(e) => setTokenAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs md:text-sm text-white focus:outline-none focus:border-trdg-cyan/50"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2">Target Market Cap</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1000000, 10000000, 100000000, 1000000000].map((cap) => (
                                        <button
                                            key={cap}
                                            onClick={() => setTargetMC(cap)}
                                            className={`py-2 rounded-lg border text-[9px] md:text-[10px] font-mono transition-all ${targetMC === cap ? 'bg-trdg-cyan border-trdg-cyan text-black font-bold' : 'border-white/10 text-gray-400 hover:border-white/30'}`}
                                        >
                                            ${(cap / 1000000).toFixed(0)}M
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 md:p-6 rounded-2xl bg-black/60 border border-trdg-cyan/20 text-center">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Projected Value</div>
                                <motion.div
                                    key={projection}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-2xl md:text-4xl font-black font-orbitron text-trdg-green text-glow-green break-all leading-tight"
                                >
                                    {isNaN(projection) ? '$0' : formatCurrency(projection, 2)}
                                </motion.div>
                                <div className="text-[10px] font-mono text-gray-400 mt-2">
                                    {(growthPotential).toFixed(1)}x growth possible
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Supply Info Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-8 md:mt-12 p-6 rounded-2xl bg-gradient-to-r from-trdg-cyan/5 via-black to-trdg-green/5 border border-white/5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                        <div>
                            <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Initial Supply</div>
                            <div className="text-xs md:text-sm font-bold text-white">100 Quadrillion</div>
                        </div>
                        <div>
                            <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Launch Status</div>
                            <div className="text-xs md:text-sm font-bold text-orange-400">50% BURNED AT GENESIS</div>
                        </div>
                        <div>
                            <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">LP Status</div>
                            <div className="text-xs md:text-sm font-bold text-trdg-green">BURNED FOR ETERNITY</div>
                        </div>
                        <div className="lg:text-right">
                            <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Contract Address</div>
                            <div className="text-[9px] font-mono text-trdg-cyan selection:bg-trdg-cyan/30">
                                {TRDG_ADDRESS.slice(0, 10)}...{TRDG_ADDRESS.slice(-8)}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {lastRefresh && (
                    <div className="mt-4 text-[10px] font-mono text-gray-600 text-center">
                        Last Scan: {lastRefresh.toLocaleTimeString()}
                    </div>
                )}
            </div>
        </section>
    )
}
