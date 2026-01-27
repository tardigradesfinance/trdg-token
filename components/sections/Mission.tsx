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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">

                        {/* Intro Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-300 leading-relaxed font-light"
                        >
                            The search for the ultimate survivor began in <strong className="text-white">March 2021</strong>.
                            While thousands of projects have crumbled to dust, <span className="text-trdg-cyan font-bold">$TRDG</span> has stood the test of time.
                            <br /><br />
                            Launched on <span className="text-white font-mono">March 8th, 2021 (BSC)</span> and <span className="text-white font-mono">May 11th, 2021 (ETH)</span>,
                            we are one of the original meme tokens—older than the current market cycle, and built to survive the next one.
                        </motion.p>

                        {/* Story Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-cyan/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-trdg-cyan/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-trdg-cyan/20 rounded-lg text-trdg-cyan">
                                        <Search size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-orbitron text-white">The Quest</h3>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    In the vast expanse of the chaos that is the cryptoverse, we sought a symbol of permanence. Projects rose and fell with the tides of volatility. We needed a mascot that wasn't just strong, but <strong className="text-white">impossible to kill</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Story Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-green/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-trdg-green/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-trdg-green/20 rounded-lg text-trdg-green">
                                        <Microscope size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-orbitron text-white">Ideally Adapted</h3>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    We found the <strong className="text-trdg-green">Tardigrade</strong> (Water Bear). A microscopic marvel that laughs at the laws of biology. It survives space, radiation, and time itself. This is the spirit of our token and our community.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Visual (Abstract System) */}
                    <motion.div
                        style={{ y }}
                        className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-black/40"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black hover:scale-105 transition-transform duration-[2s]" />

                        {/* Abstract Representation of Space/Tardigrade */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-80 h-80">
                                {/* Orbitals */}
                                <div className="absolute inset-0 border border-trdg-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-4 border border-trdg-green/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute inset-8 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />

                                {/* Center Core */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-trdg-cyan rounded-full blur-[50px] animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                                    <span className="font-orbitron font-bold text-4xl text-white tracking-widest block">TRDG</span>
                                    <span className="text-xs text-trdg-cyan uppercase tracking-[0.5em]">System</span>
                                </div>
                            </div>
                        </div>

                        {/* Data Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/80 backdrop-blur-md border-t border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-between items-center text-sm font-mono text-gray-400">
                                <span>SPECIES:</span>
                                <span className="text-white">Hypsibius dujardini</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-mono text-gray-400 mt-2">
                                <span>SIZE:</span>
                                <span className="text-white">0.5 mm</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-mono text-gray-400 mt-2">
                                <span>HABITAT:</span>
                                <span className="text-trdg-cyan">EVERYWHERE</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
