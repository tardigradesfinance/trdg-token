'use client'

import { motion } from 'framer-motion'
import { PieChart, Zap, Flame } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

export function Tokenomics() {
    return (
        <section id="tokenomics" className="relative py-24 md:py-32 bg-black overflow-hidden">
            <GridBackground />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 uppercase tracking-tighter">
                        Tokenomics
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        The biological engine of the <span className="text-trdg-cyan">$TRDG</span> ecosystem.
                        Designed for longevity, scarcity, and instant rewards for the colony.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Distribution Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-zinc-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-trdg-cyan/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] md:text-[10px] text-trdg-cyan/20">DATA_PACKET_01</div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-trdg-cyan/10 rounded-lg flex items-center justify-center mb-6 text-trdg-cyan">
                            <PieChart size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 uppercase text-glow-trdg">Taxation Protocol</h3>
                        <div className="space-y-5">
                            <div className="relative">
                                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2 uppercase">
                                    <span>Reflections</span>
                                    <span className="text-trdg-cyan">2.5%</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="h-full bg-trdg-cyan" />
                                </div>
                                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter">Automatic $TRDG rewards to holders</p>
                            </div>
                            <div className="relative">
                                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2 uppercase">
                                    <span>Hyper-Burn</span>
                                    <span className="text-orange-500">2.5%</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="h-full bg-orange-500" />
                                </div>
                                <p className="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter">Sent to unrecoverable burn abyss</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Resilience Mechanism */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-zinc-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] md:text-[10px] text-orange-500/20">DATA_PACKET_02</div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500">
                            <Flame size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 uppercase text-glow-orange">The $TRDG Burn</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-6">
                            2.5% of every transaction enters a "Tun State" within the unrecoverable burn wallet. Scarcity is encoded in the biology.
                        </p>
                        <ul className="space-y-3 text-[9px] md:text-[10px] font-mono text-gray-400 uppercase">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Fixed Total Supply</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Impossible De-burn</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500" /> Scaling Floor</li>
                        </ul>
                    </motion.div>

                    {/* Infrastructure Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="bg-zinc-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] md:text-[10px] text-purple-500/20">DATA_PACKET_03</div>
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500">
                            <Zap size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 uppercase text-glow-purple">Galactic Bridge</h3>
                        <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-6">
                            $TRDG exists simultaneously on <span className="text-yellow-400 font-bold">BSC</span> and <span className="text-blue-400 font-bold">ETH</span>. Independent liquidity, synchronized mission.
                        </p>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="p-2 md:p-3 bg-black/40 rounded-lg border border-white/5">
                                <div className="text-[8px] md:text-[10px] text-gray-500 uppercase">BSC_LIQ</div>
                                <div className="text-[9px] md:text-xs font-bold text-yellow-400 uppercase">LIVE 2021</div>
                            </div>
                            <div className="p-2 md:p-3 bg-black/40 rounded-lg border border-white/5">
                                <div className="text-[8px] md:text-[10px] text-gray-500 uppercase">ETH_LIQ</div>
                                <div className="text-[9px] md:text-xs font-bold text-blue-400 uppercase">LIVE 2021</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
