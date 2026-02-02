'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { useTRDGStats, useWalletStats, formatNumber, formatCurrency, formatCompact } from '@/lib/useTRDGStats'
import { StarField } from '@/components/ui/StarField'
import {
    Activity, RefreshCw, Flame, TrendingUp, BarChart3, Wallet,
    DollarSign, Droplets, Shield, Clock, AlertCircle, Copy, Check,
    ChevronDown, ChevronUp, Users
} from 'lucide-react'

export default function StatsPage() {
    const { stats, loading, error, lastUpdated, refresh } = useTRDGStats(30000)
    const [bscWalletAddress, setBscWalletAddress] = useState('')
    const [ethWalletAddress, setEthWalletAddress] = useState('')
    const [showBscWallet, setShowBscWallet] = useState(false)
    const [showEthWallet, setShowEthWallet] = useState(false)
    const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

    const { walletStats: bscWalletStats, loading: bscWalletLoading, fetchWalletStats: fetchBscWallet } = useWalletStats('bsc', bscWalletAddress)
    const { walletStats: ethWalletStats, loading: ethWalletLoading, fetchWalletStats: fetchEthWallet } = useWalletStats('eth', ethWalletAddress)

    const handleBscWalletSubmit = () => {
        if (bscWalletAddress.length === 42) {
            fetchBscWallet(bscWalletAddress, stats.bscPrice)
        }
    }

    const handleEthWalletSubmit = () => {
        if (ethWalletAddress.length === 42) {
            fetchEthWallet(ethWalletAddress, stats.ethPrice)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedAddress(text)
        setTimeout(() => setCopiedAddress(null), 2000)
    }

    const contractAddress = '0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5'

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <StarField />
            </div>
            <CustomCursor />
            <Header />

            <div className="pt-28 pb-16 min-h-screen relative z-10">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                        >
                            <Activity className="text-trdg-cyan animate-pulse" size={16} />
                            <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest font-black">Live Stats Dashboard</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                            TRDG <span className="text-trdg-cyan text-glow-trdg">STATS</span>
                        </h1>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-6">
                            Real-Time Biometric Data Feed
                        </p>

                        {/* Refresh Button */}
                        <button
                            onClick={refresh}
                            disabled={loading}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-trdg-cyan/50 transition-all disabled:opacity-50"
                        >
                            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                            <span className="text-xs font-mono uppercase">
                                {loading ? 'Updating...' : 'Refresh Data'}
                            </span>
                        </button>

                        {lastUpdated && (
                            <div className="mt-3 text-[10px] font-mono text-gray-600 flex items-center justify-center gap-2">
                                <Clock size={10} />
                                Last updated: {lastUpdated.toLocaleTimeString()}
                            </div>
                        )}

                        {error && (
                            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                                <AlertCircle size={14} />
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Contract Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <button
                            onClick={() => copyToClipboard(contractAddress)}
                            className="w-full p-4 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-trdg-cyan/30 transition-all flex items-center justify-between gap-4"
                        >
                            <div className="text-left">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Contract Address (BSC & ETH)</div>
                                <div className="font-mono text-sm text-trdg-cyan break-all">{contractAddress}</div>
                            </div>
                            {copiedAddress === contractAddress ? (
                                <Check size={18} className="text-trdg-green shrink-0" />
                            ) : (
                                <Copy size={18} className="text-gray-500 shrink-0" />
                            )}
                        </button>
                    </motion.div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* BSC Card */}
                        <div
                            className="p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-yellow-500/20 shadow-lg shadow-yellow-500/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                    <img src="/images/bnb-logo.png" alt="BNB" className="w-6 h-6" onError={(e) => { e.currentTarget.src = '/images/trdg-logo.png' }} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-orbitron font-bold text-yellow-400">BSC Network</h2>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase">PancakeSwap V1</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Price */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <DollarSign size={10} /> Price
                                        </span>
                                        <span className="text-lg font-bold text-white font-mono">
                                            ${stats.bscPrice.toFixed(18).slice(0, 16)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600">Per Trillion:</span>
                                        <span className="text-yellow-400 font-bold">${stats.bscPricePerTrillion.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Market Cap */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <BarChart3 size={10} /> Market Cap
                                        </span>
                                        <span className="text-lg font-bold text-trdg-green font-mono">
                                            {formatCurrency(stats.bscMarketCap, 0)}
                                        </span>
                                    </div>
                                </div>

                                {/* Liquidity */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <Droplets size={10} /> Liquidity
                                        </span>
                                        <span className="text-lg font-bold text-trdg-cyan font-mono">
                                            {formatCurrency(stats.bscLiquidity, 0)}
                                        </span>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/5 text-[10px] font-mono text-gray-600">
                                        Pool: {formatCompact(stats.bscPoolTrdg)} TRDG / {stats.bscPoolWbnb.toFixed(2)} WBNB
                                    </div>
                                </div>

                                {/* Burned */}
                                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 bg-black/60">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-orange-400 uppercase flex items-center gap-1">
                                            <Flame size={10} /> Total Burned
                                        </span>
                                        <span className="text-lg font-bold text-orange-400 font-mono">
                                            {formatCompact(stats.bscBurned)}
                                        </span>
                                    </div>
                                </div>

                                {/* Holder Count */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <Users size={10} /> Holders
                                        </span>
                                        <span className="text-lg font-bold text-yellow-400 font-mono">
                                            {formatNumber(stats.bscHolders || 0)}
                                        </span>
                                    </div>
                                </div>

                                {/* BNB Price */}
                                <div className="text-center text-[10px] font-mono text-gray-600">
                                    BNB/USD: ${stats.bnbPrice.toFixed(2)}
                                </div>

                                {/* Wallet Tracker */}
                                <div className="pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => setShowBscWallet(!showBscWallet)}
                                        className="w-full flex items-center justify-between text-sm font-mono text-gray-400 hover:text-white transition-colors"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Wallet size={14} /> Wallet Tracker
                                        </span>
                                        {showBscWallet ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    </button>

                                    {showBscWallet && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-4 space-y-3"
                                        >
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter BSC wallet address..."
                                                    value={bscWalletAddress}
                                                    onChange={(e) => setBscWalletAddress(e.target.value)}
                                                    className="flex-1 px-3 py-2 rounded-lg bg-black/90 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-yellow-500/50"
                                                />
                                                <button
                                                    onClick={handleBscWalletSubmit}
                                                    disabled={bscWalletLoading}
                                                    className="px-4 py-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold hover:bg-yellow-500/30 transition-all disabled:opacity-50"
                                                >
                                                    {bscWalletLoading ? '...' : 'Track'}
                                                </button>
                                            </div>

                                            {bscWalletStats && (
                                                <div className="p-3 rounded-lg bg-black/80 border border-yellow-500/20 space-y-2">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Balance:</span>
                                                        <span className="text-white font-mono">{formatCompact(bscWalletStats.balance)} TRDG</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Value:</span>
                                                        <span className="text-trdg-green font-mono">{formatCurrency(bscWalletStats.valueUsd)}</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Est. Rewards:</span>
                                                        <span className="text-yellow-400 font-mono">{formatCompact(bscWalletStats.rewards)} TRDG</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Rewards Value:</span>
                                                        <span className="text-yellow-400 font-mono">{formatCurrency(bscWalletStats.rewardsValueUsd)}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ETH Card */}
                        <div
                            className="p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 shadow-lg shadow-blue-500/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <img src="/images/eth-logo.png" alt="ETH" className="w-6 h-6" onError={(e) => { e.currentTarget.src = '/images/trdg-logo.png' }} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-orbitron font-bold text-blue-400">ETH Network</h2>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase">Uniswap V2</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Price */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <DollarSign size={10} /> Price
                                        </span>
                                        <span className="text-lg font-bold text-white font-mono">
                                            ${stats.ethPrice.toFixed(18).slice(0, 16)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600">Per Trillion:</span>
                                        <span className="text-blue-400 font-bold">${stats.ethPricePerTrillion.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Market Cap */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <BarChart3 size={10} /> Market Cap
                                        </span>
                                        <span className="text-lg font-bold text-trdg-green font-mono">
                                            {formatCurrency(stats.ethMarketCap, 0)}
                                        </span>
                                    </div>
                                </div>

                                {/* Liquidity */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <Droplets size={10} /> Liquidity
                                        </span>
                                        <span className="text-lg font-bold text-trdg-cyan font-mono">
                                            {formatCurrency(stats.ethLiquidity, 0)}
                                        </span>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/5 text-[10px] font-mono text-gray-600">
                                        Pool: {formatCompact(stats.ethPoolTrdg)} TRDG / {stats.ethPoolWeth.toFixed(4)} WETH
                                    </div>
                                </div>

                                {/* Burned */}
                                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 bg-black/60">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-orange-400 uppercase flex items-center gap-1">
                                            <Flame size={10} /> Total Burned
                                        </span>
                                        <span className="text-lg font-bold text-orange-400 font-mono">
                                            {formatCompact(stats.ethBurned)}
                                        </span>
                                    </div>
                                </div>

                                {/* Holder Count */}
                                <div className="p-4 rounded-xl bg-black/80 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                                            <Users size={10} /> Holders
                                        </span>
                                        <span className="text-lg font-bold text-blue-400 font-mono">
                                            {formatNumber(stats.ethHolders || 0)}
                                        </span>
                                    </div>
                                </div>

                                {/* ETH Price */}
                                <div className="text-center text-[10px] font-mono text-gray-600">
                                    ETH/USD: ${stats.ethNativePrice.toFixed(2)}
                                </div>

                                {/* Wallet Tracker */}
                                <div className="pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => setShowEthWallet(!showEthWallet)}
                                        className="w-full flex items-center justify-between text-sm font-mono text-gray-400 hover:text-white transition-colors"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Wallet size={14} /> Wallet Tracker
                                        </span>
                                        {showEthWallet ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    </button>

                                    {showEthWallet && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="mt-4 space-y-3"
                                        >
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter ETH wallet address..."
                                                    value={ethWalletAddress}
                                                    onChange={(e) => setEthWalletAddress(e.target.value)}
                                                    className="flex-1 px-3 py-2 rounded-lg bg-black/90 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-blue-500/50"
                                                />
                                                <button
                                                    onClick={handleEthWalletSubmit}
                                                    disabled={ethWalletLoading}
                                                    className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold hover:bg-blue-500/30 transition-all disabled:opacity-50"
                                                >
                                                    {ethWalletLoading ? '...' : 'Track'}
                                                </button>
                                            </div>

                                            {ethWalletStats && (
                                                <div className="p-3 rounded-lg bg-black/80 border border-blue-500/20 space-y-2">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Balance:</span>
                                                        <span className="text-white font-mono">{formatCompact(ethWalletStats.balance)} TRDG</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Value:</span>
                                                        <span className="text-trdg-green font-mono">{formatCurrency(ethWalletStats.valueUsd)}</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Est. Rewards:</span>
                                                        <span className="text-blue-400 font-mono">{formatCompact(ethWalletStats.rewards)} TRDG</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-gray-500">Rewards Value:</span>
                                                        <span className="text-blue-400 font-mono">{formatCurrency(ethWalletStats.rewardsValueUsd)}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Combined Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="p-8 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-white/10 shadow-2xl">
                            <h3 className="text-center text-xl font-orbitron font-bold text-white mb-8 uppercase">Combined Statistics</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Total Burned</div>
                                    <div className="text-2xl font-bold text-orange-400 font-orbitron">{formatCompact(stats.totalBurned)}</div>
                                    <div className="text-xs text-gray-600 mt-1">{stats.burnPercentage.toFixed(2)}% of supply</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Combined Liquidity</div>
                                    <div className="text-2xl font-bold text-trdg-cyan font-orbitron">{formatCurrency(stats.bscLiquidity + stats.ethLiquidity, 0)}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">Combined Market Cap</div>
                                    <div className="text-2xl font-bold text-trdg-green font-orbitron">{formatCurrency(stats.bscMarketCap + stats.ethMarketCap, 0)}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2 flex items-center justify-center gap-1">
                                        <Users size={10} className="text-trdg-cyan" /> Total Holders
                                    </div>
                                    <div className="text-2xl font-bold text-trdg-cyan font-orbitron">{formatNumber(stats.totalHolders || 0)}</div>
                                    <div className="text-xs text-gray-600 mt-1">BSC + ETH Combined</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-2 flex items-center justify-center gap-1">
                                        <Shield size={10} className="text-trdg-green" /> Security
                                    </div>
                                    <div className="text-2xl font-bold text-trdg-green font-orbitron">100%</div>
                                    <div className="text-xs text-gray-600 mt-1">LP Burned Forever</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center text-xs font-mono text-gray-600"
                    >
                        <p>Data sourced from BSCScan & Etherscan APIs • Auto-refreshes every 30 seconds</p>
                        <p className="mt-2">⚠️ Prices are calculated from liquidity pool ratios and may differ from aggregator prices</p>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
