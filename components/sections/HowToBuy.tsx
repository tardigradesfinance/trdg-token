'use client'

import { motion } from 'framer-motion'
import { Wallet, ArrowRightLeft, Database, Download } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

const steps = [
    {
        id: '01',
        title: 'Initialize Wallet',
        desc: 'Download and install MetaMask or Trust Wallet. This will serve as your containment unit.',
        icon: Download
    },
    {
        id: '02',
        title: 'Acquire Fuel',
        desc: 'Purchase BNB (for BSC) or ETH (for Ethereum). This fuel is required to initiate the transfer.',
        icon: Database
    },
    {
        id: '03',
        title: 'Connect to Bridge',
        desc: 'Navigate to PancakeSwap (BSC) or Uniswap (ETH) and connect your wallet.',
        icon: Wallet
    },
    {
        id: '04',
        title: 'Assimilation',
        desc: 'Swap your BNB/ETH for $TRDG. Confirm the transaction and welcome to the colony.',
        icon: ArrowRightLeft
    }
]

export function HowToBuy() {
    return (
        <section id="acquire" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
            <GridBackground />
            <div className="container mx-auto px-4">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6 uppercase"
                    >
                        Acquisition <span className="text-trdg-cyan">Protocol</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Follow these steps to secure your position in the colony.
                        The process is identical for both chains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="relative group will-change-transform"
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-trdg-cyan/50 to-transparent z-0" />
                            )}

                            <div className="relative z-10 bg-space-black p-8 rounded-2xl border border-white/10 hover:border-trdg-cyan/50 transition-all h-full">
                                <div className="text-5xl font-black font-orbitron text-white/5 absolute top-4 right-4 group-hover:text-trdg-cyan/10 transition-colors">
                                    {step.id}
                                </div>

                                <div className="w-16 h-16 bg-trdg-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-trdg-cyan/20 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                                    <step.icon size={32} className="text-trdg-cyan" />
                                </div>

                                <h3 className="text-xl font-bold font-orbitron text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-trdg-cyan/20 to-trdg-green/20 max-w-full">
                        <div className="bg-black/80 backdrop-blur-md rounded-lg px-4 md:px-8 py-4 border border-white/10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 overflow-hidden">
                            <span className="text-gray-400 font-mono text-[10px] md:text-sm whitespace-nowrap">OFFICIAL CONTRACT:</span>
                            <span className="text-white font-mono font-bold select-all text-xs md:text-base break-all">
                                {`0x92a42Db88Ed...68b5`}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            className="px-8 py-3 bg-yellow-400/10 border border-yellow-400 text-yellow-400 font-bold font-orbitron rounded-full hover:bg-yellow-400 hover:text-black transition-all"
                        >
                            Launch PancakeSwap (BSC)
                        </a>
                        <a
                            href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            className="px-8 py-3 bg-pink-500/10 border border-pink-500 text-pink-500 font-bold font-orbitron rounded-full hover:bg-pink-500 hover:text-white transition-all"
                        >
                            Launch Uniswap (ETH)
                        </a>
                    </div>

                    <p className="mt-6 text-xs text-trdg-cyan/70 font-mono animate-pulse">
                        *VERIFY CONTRACT ADDRESS BEFORE INTERACTING*
                    </p>
                </div>

            </div>
        </section>
    )
}
