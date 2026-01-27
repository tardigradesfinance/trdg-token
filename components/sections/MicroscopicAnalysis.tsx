'use client'

import { motion } from 'framer-motion'
import { Microscope, Zap, Thermometer, ShieldCheck, Activity } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

const stats = [
    { label: "Vacuum Survival", value: "TRUE", icon: Microscope, color: "text-trdg-cyan" },
    { label: "Radiation Tolerance", value: "5000 Gy", icon: Zap, color: "text-yellow-400" },
    { label: "Temperature Range", value: "-272°C to +150°C", icon: Thermometer, color: "text-red-500" },
    { label: "Time in Cryptobiosis", icon: ShieldCheck, value: "30+ Years", color: "text-trdg-green" },
]

export function MicroscopicAnalysis() {
    return (
        <section id="analysis" className="relative py-24 md:py-32 overflow-hidden bg-black border-y border-white/5">
            <GridBackground />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: The "Scan" Visual */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-square max-w-lg mx-auto"
                        >
                            {/* Rotating HUD Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-trdg-cyan/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 border-[1px] border-dashed border-trdg-cyan/40 rounded-full"
                            />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 right-0 h-[2px] bg-trdg-cyan/50 blur-[2px] z-20"
                            />

                            {/* The "Specimen" */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-48 h-48 bg-trdg-cyan/10 rounded-full blur-[40px]"
                                />
                                <Microscope size={120} className="text-trdg-cyan opacity-40 animate-pulse" />
                            </div>

                            {/* Corner Labels (HUD Style) */}
                            <div className="absolute top-0 left-0 p-4 font-mono text-[10px] text-trdg-cyan/60">
                                DB_REF: EXTREMOPHILE_001<br />
                                STATUS: ANALYZING...
                            </div>
                            <div className="absolute bottom-0 right-0 p-4 font-mono text-[10px] text-trdg-cyan/60 text-right">
                                SECTOR: MICRO_BIOLOGY<br />
                                SCAN_COMPLETE: 98.4%
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Data Points */}
                    <div className="flex-1 space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                            >
                                <Activity size={16} className="text-trdg-cyan animate-pulse" />
                                <span className="text-xs font-mono text-trdg-cyan uppercase tracking-widest">Biological Super-Analysis</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6 leading-tight">
                                SPECIMEN <span className="text-trdg-cyan">RESILIENCE</span> DATA
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our mascot, the Tardigrade, isn't just a logo. It represents a paradigm shift in survival.
                                We've modeled our community and smart contract after its biological adaptability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-trdg-cyan/30 transition-all hover:bg-white/10"
                                >
                                    <div className={`mb-4 ${stat.color}`}>
                                        <stat.icon size={28} />
                                    </div>
                                    <div className="text-xs font-mono text-gray-500 uppercase mb-1">{stat.label}</div>
                                    <div className="text-xl font-bold font-orbitron text-white">{stat.value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
