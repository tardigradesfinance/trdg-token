'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, ExternalLink } from 'lucide-react'

export function LiveCharts() {
    const [activeChain, setActiveChain] = useState<'BSC' | 'ETH'>('BSC')

    return (
        <section className="py-24 bg-black relative border-y border-white/5" id="charts">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-trdg-cyan/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                    >
                        <Activity size={16} className="text-trdg-cyan animate-pulse" />
                        <span className="text-sm font-mono text-trdg-cyan uppercase tracking-widest">Live Market Data</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        MARKET <span className="text-trdg-cyan">SURVEILLANCE</span>
                    </h2>

                    {/* Chain Toggles */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveChain('BSC')}
                            className={`px-8 py-3 rounded-xl font-bold font-orbitron transition-all border ${activeChain === 'BSC' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                        >
                            BSC
                        </button>
                        <button
                            onClick={() => setActiveChain('ETH')}
                            className={`px-8 py-3 rounded-xl font-bold font-orbitron transition-all border ${activeChain === 'ETH' ? 'bg-blue-500/20 border-blue-500 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                        >
                            ETH
                        </button>
                    </div>
                </div>

                {/* Chart Container */}
                <motion.div
                    key={activeChain}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto bg-space-light/30 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                >
                    {/* Chart Header Overlay */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-10" />

                    {/* Scanning Line Animation */}
                    <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-trdg-cyan/30 to-transparent z-20 pointer-events-none shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                    />

                    {/* HUD Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-trdg-cyan rounded-tl-lg z-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-trdg-cyan rounded-tr-lg z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-trdg-cyan rounded-bl-lg z-20 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-trdg-cyan rounded-br-lg z-20 pointer-events-none" />

                    {/* Embed */}
                    <div id="dexscreener-embed" className="relative w-full aspect-[4/5] md:aspect-[16/9]">
                        {activeChain === 'BSC' ? (
                            <iframe
                                className="absolute inset-0 w-full h-full border-0"
                                src="https://dexscreener.com/bsc/0xC5c0Be18218182bF33e2585a6D9A2e6d7324BC0E?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=8&chartType=marketCap&interval=1W"
                            />
                        ) : (
                            <iframe
                                className="absolute inset-0 w-full h-full border-0"
                                src="https://dexscreener.com/ethereum/0xc2367025716CF1109321E4Cb96f47c0E3f9Beb05?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=8&chartType=marketCap&interval=1W"
                            />
                        )}
                    </div>
                </motion.div>

                {/* External Links */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    {activeChain === 'BSC' ? (
                        <>
                            <a href="https://dexscreener.com/bsc/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors">
                                <ExternalLink size={16} /> View on DexScreener (BSC)
                            </a>
                            <a href="https://www.dextools.io/app/bnb/pair-explorer/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors">
                                <ExternalLink size={16} /> View on Dextools (BSC)
                            </a>
                        </>
                    ) : (
                        <>
                            <a href="https://dexscreener.com/ethereum/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                                <ExternalLink size={16} /> View on DexScreener (ETH)
                            </a>
                            <a href="https://www.dextools.io/app/ether/pair-explorer/0xc2367025716cf1109321e4cb96f47c0e3f9beb05" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                                <ExternalLink size={16} /> View on Dextools (ETH)
                            </a>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
