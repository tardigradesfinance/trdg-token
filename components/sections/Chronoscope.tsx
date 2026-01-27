'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Calculator, TrendingUp, Shield, BarChart3, Binary, RefreshCw } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

interface TokenData {
    priceUsd: string
    priceChange: {
        h24: number
    }
    liquidity: {
        usd: number
    }
    fdv: number
}

export function Chronoscope() {
    const [tokenData, setTokenData] = useState<TokenData | null>(null)
    const [loading, setLoading] = useState(true)
    const [amount, setAmount] = useState<string>('1000000')
    const [targetMC, setTargetMC] = useState<number>(1000000) // 1M MC target

    const fetchPrice = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5')
            const data = await response.json()
            if (data.pairs && data.pairs.length > 0) {
                const pair = data.pairs[0]
                setTokenData({
                    priceUsd: pair.priceUsd,
                    priceChange: pair.priceChange,
                    liquidity: pair.liquidity,
                    fdv: pair.fdv
                })
            }
        } catch (error) {
            console.error('Error fetching $TRDG data:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPrice()
        const interval = setInterval(fetchPrice, 30000) // Update every 30s
        return () => clearInterval(interval)
    }, [])

    const currentMC = tokenData?.fdv || 100000
    const projection = (parseFloat(amount) * (targetMC / currentMC))

    return (
        <section id="chronoscope" className="relative py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
            <GridBackground />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                    >
                        <Activity className="text-trdg-cyan animate-pulse" size={16} />
                        <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest font-black">Live Biometric Feed</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        THE <span className="text-trdg-cyan text-glow-trdg">CHRONOSCOPE</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">Temporal Value & Resilience Simulator</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Live Stats HUD */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-700">FEED_01.EXE</div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-orbitron font-bold text-white uppercase text-sm flex items-center gap-2">
                                    <TrendingUp size={16} className="text-trdg-cyan" />
                                    Biometric Price
                                </h3>
                                <button onClick={fetchPrice} className="text-gray-500 hover:text-white transition-colors">
                                    <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs font-mono text-gray-500 uppercase mb-1">Current_Price (USD)</div>
                                    <div className="text-4xl font-bold text-white font-orbitron tracking-tight">
                                        ${tokenData ? parseFloat(tokenData.priceUsd).toFixed(12) : '0.0000000...'}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase mb-1">24H_Change</div>
                                        <div className={`text-sm font-bold ${tokenData?.priceChange.h24 && tokenData.priceChange.h24 >= 0 ? 'text-trdg-green' : 'text-red-500'}`}>
                                            {tokenData ? `${tokenData.priceChange.h24}%` : '---'}
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3 bg-black/40 rounded-lg border border-white/5">
                                        <div className="text-[10px] text-gray-500 uppercase mb-1">Liquidity</div>
                                        <div className="text-sm font-bold text-trdg-cyan">
                                            {tokenData ? `$${(tokenData.liquidity.usd / 1000).toFixed(1)}K` : '---'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scanning bar effect */}
                            <motion.div
                                animate={{ top: ['0%', '100%'], opacity: [0, 0.5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-trdg-cyan/20 -z-0 pointer-events-none"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10"
                        >
                            <h3 className="font-orbitron font-bold text-white uppercase text-sm mb-6 flex items-center gap-2">
                                <Shield size={16} className="text-trdg-green" />
                                Network Integrity
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                    <span>BNB_CHAIN</span>
                                    <span className="text-trdg-green">OPERATIONAL</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-trdg-green" />
                                </div>
                                <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-4">
                                    <span>ETH_CHAIN</span>
                                    <span className="text-trdg-green">OPERATIONAL</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-trdg-green" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Calculator Terminal */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="h-full p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/10 relative overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-xl bg-trdg-cyan/10 flex items-center justify-center text-trdg-cyan">
                                    <Calculator size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white uppercase">Extremophile Projection Terminal</h3>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase font-black uppercase tracking-widest">Simulating $TRDG Resilience in Hyper-Markets</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-[10px] font-mono text-trdg-cyan uppercase mb-3 tracking-widest">Amount of $TRDG Tokens</label>
                                        <input
                                            type="text"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 font-mono text-white focus:outline-none focus:border-trdg-cyan/50 transition-colors"
                                            placeholder="Enter token count..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-gray-500 uppercase mb-3 tracking-widest">Target Market Cap ($)</label>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {[1000000, 10000000, 100000000, 1000000000].map((cap) => (
                                                <button
                                                    key={cap}
                                                    onClick={() => setTargetMC(cap)}
                                                    className={`py-2 rounded-lg border text-[10px] font-mono transition-all ${targetMC === cap ? 'bg-trdg-cyan border-trdg-cyan text-black font-bold' : 'border-white/10 text-gray-400 hover:border-white/30'}`}
                                                >
                                                    ${(cap / 1000000).toFixed(0)}M
                                                </button>
                                            ))}
                                        </div>
                                        <input
                                            type="range"
                                            min="100000"
                                            max="1000000000"
                                            step="1000000"
                                            value={targetMC}
                                            onChange={(e) => setTargetMC(parseInt(e.target.value))}
                                            className="w-full accent-trdg-cyan"
                                        />
                                    </div>
                                </div>

                                <div className="p-8 rounded-2xl bg-black/60 border border-trdg-cyan/20 flex flex-col justify-center items-center text-center relative">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-trdg-cyan/40">PROJECTION_RESULT_v2.0</div>
                                    <div className="text-xs font-mono text-gray-500 uppercase mb-4">Projected_Holdings_Value</div>
                                    <motion.div
                                        key={projection}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-3xl sm:text-4xl md:text-6xl font-black font-orbitron text-trdg-green text-glow-green mb-2 break-all"
                                    >
                                        ${isNaN(projection) ? '0.00' : projection.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </motion.div>
                                    <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                                        <TrendingUp size={12} className="text-trdg-green" />
                                        {(targetMC / currentMC).toFixed(1)}x Potential
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/5 w-full">
                                        <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                                            <span>Current_MC</span>
                                            <span>${(currentMC / 1000000).toFixed(1)}M</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                                            <span>Target_MC</span>
                                            <span>${(targetMC / 1000000).toFixed(1)}M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
