'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { useTRDGStats, useWalletStats, formatNumber, formatCurrency, formatCompact } from '@/lib/useTRDGStats'
import { StandardHero } from '@/components/layout/StandardHero'
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
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>TRDG <span className="text-trdg-cyan">STATS</span></>}
                subtitle="Live biometric data feed from global market liquidity nodes"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <div className="container mx-auto px-4">
                    {/* Controls Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 -mt-12 bg-zinc-950/50 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-4">
                            <Activity className="text-trdg-cyan animate-pulse" size={20} />
                            <div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Network Status</div>
                                <div className="text-xs font-bold font-orbitron text-white">SYSTEMS_OPERATIONAL</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                             <button
                                onClick={refresh}
                                disabled={loading}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-trdg-cyan/50 transition-all disabled:opacity-50"
                            >
                                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                                <span className="text-xs font-mono uppercase">
                                    {loading ? 'Updating...' : 'Manual Refresh'}
                                </span>
                            </button>
                            {lastUpdated && (
                                <div className="text-[10px] font-mono text-gray-600 flex flex-col items-end">
                                    <span>LAST_SYNC</span>
                                    <span>{lastUpdated.toLocaleTimeString()}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono w-full justify-center">
                            <AlertCircle size={14} />
                            {error}
                        </div>
                    )}

                    {/* Contract Address */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <button
                            onClick={() => copyToClipboard(contractAddress)}
                            className="w-full p-4 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-trdg-cyan/30 transition-all flex items-center justify-between gap-4 group"
                        >
                            <div className="text-left">
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Central Registry Entry</div>
                                <div className="font-mono text-sm text-trdg-cyan break-all group-hover:text-white transition-colors">{contractAddress}</div>
                            </div>
                            {copiedAddress === contractAddress ? (
                                <Check size={18} className="text-trdg-green shrink-0" />
                            ) : (
                                <Copy size={18} className="text-gray-700 group-hover:text-trdg-cyan transition-colors shrink-0" />
                            )}
                        </button>
                    </motion.div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* BSC Card */}
                        <div className="p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-yellow-500/10 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                                    <img src="/images/bnb-logo.png" alt="BNB" className="w-6 h-6" onError={(e) => { e.currentTarget.src = '/images/trdg-logo.png' }} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-orbitron font-bold text-yellow-500">BSC Network</h2>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase">Registry: 0x92a...68b5</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Price (USD)</span>
                                        <span className="text-lg font-bold text-white font-mono">
                                            ${stats.bscPrice.toFixed(18).slice(0, 16)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600">Per Trillion:</span>
                                        <span className="text-yellow-500 font-bold font-mono">${stats.bscPricePerTrillion.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase text-xs">Market Cap</span>
                                        <span className="text-lg font-bold text-trdg-green font-mono">
                                            {formatCurrency(stats.bscMarketCap, 0)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Liquidity</span>
                                        <span className="text-lg font-bold text-trdg-cyan font-mono">
                                            {formatCurrency(stats.bscLiquidity, 0)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-orange-400 uppercase">Supply Burned</span>
                                        <span className="text-lg font-bold text-orange-400 font-mono">
                                            {formatCompact(stats.bscBurned)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Extremophiles</span>
                                        <span className="text-lg font-bold text-yellow-500 font-mono">
                                            {formatNumber(stats.bscHolders || 0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ETH Card */}
                        <div className="p-6 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-blue-500/10 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <img src="/images/eth-logo.png" alt="ETH" className="w-6 h-6" onError={(e) => { e.currentTarget.src = '/images/trdg-logo.png' }} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-orbitron font-bold text-blue-500">ETH Network</h2>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase">Registry: 0x92a...68b5</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Price (USD)</span>
                                        <span className="text-lg font-bold text-white font-mono">
                                            ${stats.ethPrice.toFixed(18).slice(0, 16)}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-600">Per Trillion:</span>
                                        <span className="text-blue-500 font-bold font-mono">${stats.ethPricePerTrillion.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase text-xs">Market Cap</span>
                                        <span className="text-lg font-bold text-trdg-green font-mono">
                                            {formatCurrency(stats.ethMarketCap, 0)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Liquidity</span>
                                        <span className="text-lg font-bold text-trdg-cyan font-mono">
                                            {formatCurrency(stats.ethLiquidity, 0)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-orange-400 uppercase">Supply Burned</span>
                                        <span className="text-lg font-bold text-orange-400 font-mono">
                                            {formatCompact(stats.ethBurned)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-gray-500 uppercase">Extremophiles</span>
                                        <span className="text-lg font-bold text-blue-500 font-mono">
                                            {formatNumber(stats.ethHolders || 0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Combined Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="p-8 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-trdg-cyan to-transparent opacity-30" />
                            <h3 className="text-center text-xl font-orbitron font-bold text-white mb-10 uppercase tracking-widest leading-none">Global Economic Aggregate</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Aggregated Burn</div>
                                    <div className="text-2xl font-bold text-orange-400 font-orbitron leading-none">{formatCompact(stats.totalBurned)}</div>
                                    <div className="text-[9px] text-gray-600 mt-2 font-mono">{stats.burnPercentage.toFixed(2)}% DISINTEGRATED</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Total Liquidity</div>
                                    <div className="text-2xl font-bold text-trdg-cyan font-orbitron leading-none">{formatCurrency(stats.bscLiquidity + stats.ethLiquidity, 0)}</div>
                                    <div className="text-[9px] text-gray-600 mt-2 font-mono">100% PERMANENT LOCK</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Global Cap</div>
                                    <div className="text-2xl font-bold text-trdg-green font-orbitron leading-none">{formatCurrency(stats.bscMarketCap + stats.ethMarketCap, 0)}</div>
                                    <div className="text-[9px] text-gray-600 mt-2 font-mono">DUAL CHAIN SUM</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Total Holders</div>
                                    <div className="text-2xl font-bold text-trdg-cyan font-orbitron leading-none">{formatNumber(stats.totalHolders || 0)}</div>
                                    <div className="text-[9px] text-gray-600 mt-2 font-mono">ACTIVE ENTITIES</div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] font-mono text-gray-600 text-center uppercase tracking-widest">
                                <div>Connectivity Status: Nodes Integrated</div>
                                <div>Oracle Sync: High Fidelity (API_PASS)</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

            <Footer />
        </main>
    )
}
