'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Activity, Flame, Droplets, TrendingUp, RefreshCw,
    Calculator, Wallet, Shield, Search, BarChart3,
    ExternalLink
} from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'
import { useTRDGStats, useWalletStats, formatNumber, formatCurrency, formatCompact, TRDG_CONTRACT, TRDG_MAX_SUPPLY } from '@/lib/useTRDGStats'

export function BioScanner() {
    const [activeChain, setActiveChain] = useState<'bsc' | 'eth'>('bsc')
    const { stats, loading, lastUpdated, refresh } = useTRDGStats(60000) // Refresh every 60s

    const [walletAddress, setWalletAddress] = useState('')
    const { walletStats: bscWalletStats, loading: bscWalletLoading, fetchWalletStats: fetchBscWallet } = useWalletStats('bsc', walletAddress)
    const { walletStats: ethWalletStats, loading: ethWalletLoading, fetchWalletStats: fetchEthWallet } = useWalletStats('eth', walletAddress)

    // Calculator state
    const [tokenAmount, setTokenAmount] = useState('1000000000000') // 1 Trillion default
    const [targetMC, setTargetMC] = useState(10000000) // $10M default

    // Get current chain stats
    const currentPrice = activeChain === 'bsc' ? stats.bscPrice : stats.ethPrice
    const currentPricePerTrillion = activeChain === 'bsc' ? stats.bscPricePerTrillion : stats.ethPricePerTrillion
    const currentBurned = activeChain === 'bsc' ? stats.bscBurned : stats.ethBurned
    const currentCirculating = activeChain === 'bsc' ? stats.bscCirculating : stats.ethCirculating
    const currentMarketCap = activeChain === 'bsc' ? stats.bscMarketCap : stats.ethMarketCap
    const currentLiquidity = activeChain === 'bsc' ? stats.bscLiquidity : stats.ethLiquidity
    const burnedPercent = (currentBurned / TRDG_MAX_SUPPLY) * 100

    // Wallet stats based on active chain
    const walletStats = activeChain === 'bsc' ? bscWalletStats : ethWalletStats
    const walletLoading = activeChain === 'bsc' ? bscWalletLoading : ethWalletLoading

    const handleWalletLookup = () => {
        if (walletAddress.length === 42) {
            if (activeChain === 'bsc') {
                fetchBscWallet(walletAddress, stats.bscPrice)
            } else {
                fetchEthWallet(walletAddress, stats.ethPrice)
            }
        }
    }

    // Projection calculator
    const projection = parseFloat(tokenAmount) * (targetMC / currentCirculating)
    const growthPotential = currentMarketCap > 0 ? targetMC / currentMarketCap : 0

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
                        onClick={refresh}
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
                        <div className={`text-2xl md:text-4xl font-black font-orbitron mb-3 ${activeChain === 'bsc' ? 'text-yellow-400' : 'text-blue-400'}`}>
                            ${currentPrice > 0 ? currentPrice.toFixed(18).slice(0, 14) : '0.00...'}
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm">
                            <span className="text-gray-500 font-mono">Per Trillion:</span>
                            <span className={`font-bold ${activeChain === 'bsc' ? 'text-yellow-400' : 'text-blue-400'}`}>
                                ${currentPricePerTrillion.toFixed(2)}
                            </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex justify-between text-[10px] font-mono text-gray-500">
                                <span>{activeChain === 'bsc' ? 'BNB' : 'ETH'}/USD:</span>
                                <span className="text-white">
                                    ${activeChain === 'bsc' ? stats.bnbPrice.toFixed(2) : stats.ethNativePrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Burn Stats Card */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">BURN_TRACKER.EXE</div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                                <Flame size={20} />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Burned Tokens</h3>
                                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase">{activeChain.toUpperCase()} Chain</p>
                            </div>
                        </div>
                        <div className="text-2xl md:text-4xl font-black text-orange-400 font-orbitron mb-3">
                            {formatCompact(currentBurned)}
                        </div>
                        <div className="flex items-center justify-between text-xs md:text-sm mb-4">
                            <span className="text-gray-500 font-mono">% of Supply:</span>
                            <span className="font-bold text-orange-400">{burnedPercent.toFixed(2)}%</span>
                        </div>
                        {/* Burn Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(burnedPercent, 100)}%` }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 text-[10px] font-mono text-gray-600 text-center">
                            50% BURNED AT GENESIS • CONTINUOUS DEFLATION
                        </div>
                    </motion.div>

                    {/* Market Stats Card */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 relative overflow-hidden will-change-transform"
                    >
                        <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">MARKET_DATA.EXE</div>
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-trdg-cyan/10 text-trdg-cyan flex items-center justify-center">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Market Data</h3>
                                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase">{activeChain.toUpperCase()} Network</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="text-[10px] font-mono text-gray-500 mb-1">MARKET CAP</div>
                                <div className="text-xl md:text-2xl font-bold text-trdg-green font-orbitron">
                                    {formatCurrency(currentMarketCap, 0)}
                                </div>
                            </div>
                            <div>
                                <div className="text-[10px] font-mono text-gray-500 mb-1">LIQUIDITY</div>
                                <div className="text-xl md:text-2xl font-bold text-trdg-cyan font-orbitron">
                                    {formatCurrency(currentLiquidity, 0)}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono text-trdg-green">
                            <Shield size={12} />
                            <span>LP BURNED FOR ETERNITY</span>
                        </div>
                    </motion.div>
                </div>

                {/* Wallet Lookup & Calculator */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">

                    {/* Wallet Lookup */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 will-change-transform"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Wallet className={activeChain === 'bsc' ? 'text-yellow-500' : 'text-blue-400'} size={24} />
                            <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Wallet Scanner</h3>
                        </div>

                        <div className="flex gap-2 mb-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                <input
                                    type="text"
                                    placeholder="Enter wallet address..."
                                    value={walletAddress}
                                    onChange={(e) => setWalletAddress(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-trdg-cyan/50"
                                />
                            </div>
                            <button
                                onClick={handleWalletLookup}
                                disabled={walletLoading || walletAddress.length !== 42}
                                className={`px-4 md:px-6 py-3 rounded-xl font-bold text-xs uppercase transition-all disabled:opacity-50 ${activeChain === 'bsc'
                                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30'
                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30'
                                    }`}
                            >
                                {walletLoading ? '...' : 'Scan'}
                            </button>
                        </div>

                        <AnimatePresence>
                            {walletStats && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 rounded-xl bg-black/40 border border-trdg-green/20"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-[9px] font-mono text-gray-500 mb-1">BALANCE</div>
                                            <div className="text-sm font-bold text-white">{formatCompact(walletStats.balance)} TRDG</div>
                                            <div className="text-[10px] text-trdg-green">{formatCurrency(walletStats.valueUsd)}</div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-mono text-gray-500 mb-1">EST. REWARDS</div>
                                            <div className="text-sm font-bold text-trdg-cyan">{formatCompact(walletStats.rewards)} TRDG</div>
                                            <div className="text-[10px] text-trdg-cyan">{formatCurrency(walletStats.rewardsValueUsd)}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Target MC Calculator */}
                    <motion.div
                        className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 md:backdrop-blur-md border border-white/10 will-change-transform"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Calculator className="text-purple-400" size={24} />
                            <h3 className="font-orbitron font-bold text-white uppercase text-sm md:text-lg">Projection Calculator</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-mono text-gray-500 uppercase mb-2 block">Your Token Amount</label>
                                <input
                                    type="text"
                                    value={tokenAmount}
                                    onChange={(e) => setTokenAmount(e.target.value.replace(/[^0-9]/g, ''))}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-purple-500/50"
                                />
                                <div className="text-[10px] text-gray-600 mt-1">
                                    = {formatCompact(parseFloat(tokenAmount) || 0)} TRDG
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-mono text-gray-500 uppercase mb-2 block">Target Market Cap</label>
                                <select
                                    value={targetMC}
                                    onChange={(e) => setTargetMC(parseInt(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-purple-500/50"
                                >
                                    <option value={1000000}>$1 Million</option>
                                    <option value={5000000}>$5 Million</option>
                                    <option value={10000000}>$10 Million</option>
                                    <option value={50000000}>$50 Million</option>
                                    <option value={100000000}>$100 Million</option>
                                    <option value={500000000}>$500 Million</option>
                                    <option value={1000000000}>$1 Billion</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Projected Value</div>
                            <div className="text-2xl font-bold text-purple-400 font-orbitron break-all">
                                {formatCurrency(projection, 2)}
                            </div>
                            <div className="text-[10px] font-mono text-gray-500 mt-2">
                                {growthPotential.toFixed(1)}x potential growth
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Info Bar */}
                <motion.div
                    className="p-4 md:p-6 rounded-2xl bg-zinc-900/30 border border-white/5 will-change-transform"
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
                                {TRDG_CONTRACT.slice(0, 10)}...{TRDG_CONTRACT.slice(-8)}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {lastUpdated && (
                    <div className="mt-4 text-[10px] font-mono text-gray-600 text-center">
                        Last Scan: {lastUpdated.toLocaleTimeString()}
                    </div>
                )}

                {/* Link to Full Stats Page */}
                <div className="mt-8 text-center">
                    <a
                        href="/stats"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-trdg-cyan/10 border border-trdg-cyan/30 text-trdg-cyan font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-trdg-cyan/20 hover:border-trdg-cyan/50 transition-all"
                    >
                        <BarChart3 size={16} />
                        View Full Stats Dashboard
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </section>
    )
}
