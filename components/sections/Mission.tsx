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
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, amount: 0.1 }}
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
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-cyan/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden will-change-transform"
                        >
                            <div className="absolute inset-0 bg-trdg-cyan/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-trdg-cyan/20 rounded-lg text-trdg-cyan">
                                        <Search size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-orbitron text-white">The Quest</h3>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    In the vast expanse of the chaos that is the cryptoverse, we sought a symbol of permanence. Projects rose and fell with the tides of volatility. We needed a mascot that wasn't just strong, but <strong className="text-white">impossible to kill</strong>.
                                </p>
                                <div className="p-3 rounded-lg bg-black/40 border border-trdg-cyan/20 font-mono text-[10px] text-trdg-cyan/70">
                                    <span className="text-trdg-cyan font-bold block mb-1">LOG_FILE: SEEK_PERMANENCE.TXT</span>
                                    Observation: Market volatility at 400%. 98.2% of peers liquidated.
                                    Target: Biological entity capable of cryptobiosis.
                                </div>
                            </div>
                        </motion.div>

                        {/* Story Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-green/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden will-change-transform"
                        >
                            <div className="absolute inset-0 bg-trdg-green/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-trdg-green/20 rounded-lg text-trdg-green">
                                        <Microscope size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-orbitron text-white">Ideally Adapted</h3>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                    We found the <strong className="text-trdg-green">Tardigrade</strong> (Water Bear). A microscopic marvel that laughs at the laws of biology. It survives space, radiation, and time itself. This is the spirit of our token and our community.
                                </p>
                                <div className="p-3 rounded-lg bg-black/40 border border-trdg-green/20 font-mono text-[10px] text-trdg-green/70">
                                    <span className="text-trdg-green font-bold block mb-1">SPECIMEN_PROFILE: TARDIGRADA_01</span>
                                    Resistance: Vacuum (100%), Radiation (5,000Gy), Desiccation (99%).
                                    Protocol: Adopt resilience as core consensus mechanism.
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Visual (High-Tech Analysis Interface) */}
                    <motion.div
                        style={{ y }}
                        className="relative h-[650px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-zinc-950/40 backdrop-blur-sm"
                    >
                        {/* Background Technical Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                        {/* Scanning Lines Effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <motion.div
                                animate={{ y: ['0%', '100%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-full h-[2px] bg-trdg-cyan/20 blur-[1px] shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            />
                        </div>

                        {/* Top HUD Info */}
                        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">
                            <div className="font-mono text-[10px] space-y-1">
                                <div className="text-trdg-cyan flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-trdg-cyan animate-pulse" />
                                    ANALYSIS_ACTIVE
                                </div>
                                <div className="text-gray-500">REF: SURVIVOR_X_882</div>
                            </div>
                            <div className="text-right font-mono text-[10px] text-gray-400">
                                <div>LOC: DEEP_SPACE_NULL</div>
                                <div>TEMP: 1.14K</div>
                            </div>
                        </div>

                        {/* Main Analysis Visual */}
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="relative w-full aspect-square max-w-[400px]">
                                {/* Outer Technical Rings */}
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                                        style={{ inset: `${i * 12}%` }}
                                        className={`absolute border-t border-r border-b border-l-transparent rounded-full ${i === 0 ? 'border-trdg-cyan/40' :
                                            i === 1 ? 'border-trdg-green/30' :
                                                i === 2 ? 'border-white/10' : 'border-trdg-cyan/20'
                                            }`}
                                    />
                                ))}

                                {/* Crosshair Elements */}
                                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5" />
                                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5" />

                                {/* Center Core: The 'Tardigrade' Representation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                                    {/* The Glow */}
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-trdg-cyan rounded-full blur-[60px]"
                                    />

                                    {/* The Specimen Symbol */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <motion.div
                                                animate={{ rotateY: 360 }}
                                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                className="w-24 h-24 border-2 border-trdg-cyan rounded-2xl flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-trdg-cyan/5"
                                            >
                                                <div className="text-center">
                                                    <span className="font-orbitron font-black text-2xl text-white block tracking-tighter">$TRDG</span>
                                                    <div className="h-[1px] w-8 bg-white/30 mx-auto my-1" />
                                                    <span className="text-[8px] font-mono text-trdg-cyan font-bold">CORE</span>
                                                </div>
                                            </motion.div>

                                            {/* Floating Data Points around Core */}
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        x: Math.cos(i * 60 * Math.PI / 180) * 80,
                                                        y: Math.sin(i * 60 * Math.PI / 180) * 80,
                                                        opacity: [0.2, 0.6, 0.2]
                                                    }}
                                                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                                                    className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Metrics Interface */}
                        <div className="absolute left-6 top-1/3 space-y-4 font-mono z-20 hidden md:block">
                            <div className="space-y-1">
                                <div className="text-[8px] text-gray-500 uppercase">Resilience_index</div>
                                <div className="text-xs text-trdg-green font-bold">99.9%</div>
                                <div className="w-16 h-1 bg-white/10 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '99%' }}
                                        className="h-full bg-trdg-green"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[8px] text-gray-500 uppercase">Cryostasis_stat</div>
                                <div className="text-xs text-trdg-cyan font-bold">ACTIVE</div>
                            </div>
                        </div>

                        {/* Bottom Advanced Stats Display */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 z-20">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-mono text-gray-500">DESIGNATION</span>
                                    <span className="block text-xs font-bold text-white uppercase tracking-wider">Ultimate Survivor</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-mono text-gray-500">CLASSIFICATION</span>
                                    <span className="block text-xs font-bold text-trdg-green uppercase tracking-wider">Apex Specimen</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-mono text-gray-500">SURVIVAL_TIME</span>
                                    <span className="block text-xs font-bold text-trdg-cyan uppercase tracking-wider">1,400+ Days</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-[10px] font-mono text-gray-500">THREAT_LEVEL</span>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-wider">MINIMAL_RISK</span>
                                </div>
                            </div>

                            {/* Technical Details (Expandable on hover) */}
                            <div className="mt-4 pt-4 border-t border-white/5 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                                <p className="text-[10px] font-mono text-gray-400 line-clamp-2 leading-relaxed">
                                    Subject exhibits extreme tolerance to market volatility. Biological parameters indicate permanent resistance to 'FUD' and 'RUG' pathogens. Liquidity structure remains in perpetual cryptobiosis.
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
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol_01</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Cryptobiosis (LP Burned)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-trdg-green/10 flex items-center justify-center text-trdg-green">
                            <Star size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol_02</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Dual-Chain Evolution</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <BookOpen size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Protocol_03</div>
                            <div className="text-sm font-bold text-white uppercase tracking-wider">Community Consensus</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
