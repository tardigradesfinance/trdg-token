'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Star, Microscope, Shield, Search, BookOpen } from 'lucide-react'
import { OrganicBackground } from '@/components/ui/SectionBackgrounds'

export function Mission() {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section id="mission" className="relative py-32 overflow-hidden bg-black">
            <OrganicBackground />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6 uppercase tracking-tighter">
                        THE MISSION
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-1 bg-trdg-cyan mx-auto rounded-full"
                    />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-16">
                    
                    {/* Intro Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-2xl text-gray-300 leading-relaxed font-light text-center"
                    >
                        The search for the ultimate survivor began in <strong className="text-white">March 2021</strong>.
                        While thousands of projects have crumbled to dust, <span className="text-trdg-cyan font-bold">$TRDG</span> has stood the test of time.
                        <br /><br />
                        Launched on <span className="text-white font-mono">March 8th, 2021 (BSC)</span> and <span className="text-white font-mono">May 11th, 2021 (ETH)</span>,
                        we are one of the original meme tokens, older than the current market cycle, and built to survive the next one.
                    </motion.p>

                    {/* Story Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group p-10 rounded-2xl bg-zinc-950 border border-white/5 hover:border-trdg-cyan/50 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="p-6 bg-trdg-cyan/10 rounded-2xl text-trdg-cyan shrink-0">
                                <Search size={48} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-orbitron text-white mb-4">The Quest</h3>
                                <p className="text-gray-400 text-xl leading-relaxed">
                                    In the vast expanse of the chaos that is the cryptoverse, we sought a symbol of permanence. Projects rose and fell with the tides of volatility. We needed a mascot that wasn't just strong, but <strong className="text-white">impossible to kill</strong>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group p-10 rounded-2xl bg-zinc-950 border border-white/5 hover:border-trdg-green/50 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="p-6 bg-trdg-green/10 rounded-2xl text-trdg-green shrink-0">
                                <Microscope size={48} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-orbitron text-white mb-4">Ideally Adapted</h3>
                                <p className="text-gray-400 text-xl leading-relaxed">
                                    We found the <strong className="text-trdg-green">Tardigrade</strong> (Water Bear). A microscopic marvel that laughs at the laws of biology. It survives space, radiation, and time itself. This is the spirit of our token and our community.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Resilience Protocol Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-6 rounded-2xl bg-gradient-to-r from-trdg-cyan/5 via-white/5 to-trdg-green/5 border border-white/10 flex flex-wrap gap-8 justify-around items-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-trdg-cyan/10 flex items-center justify-center text-trdg-cyan">
                            <Shield size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol 01</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Cryptobiosis (LP Burned)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-trdg-green/10 flex items-center justify-center text-trdg-green">
                            <Star size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol 02</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Dual-Chain Evolution</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <BookOpen size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol 03</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Community Consensus</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
