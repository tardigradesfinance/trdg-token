'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Activity, Snowflake, Cpu } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

const stats = [
    { label: "Resilience index", value: "99.9%", icon: ShieldCheck, color: "text-trdg-cyan" },
    { label: "Cryostasis stat", value: "ACTIVE", icon: Snowflake, color: "text-blue-400" },
    { label: "SURVIVAL TIME", value: "5+ Years", icon: Activity, color: "text-trdg-green" },
    { label: "THREAT LEVEL", value: "MINIMAL RISK", icon: Zap, color: "text-yellow-400" },
]

export function GenesisNFTArchives() {
    const [uptime, setUptime] = useState(0)

    useEffect(() => {
        const launchDate = new Date('2021-03-08')
        const updateUptime = () => {
            const now = new Date()
            const days = Math.floor((now.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24))
            setUptime(days)
        }
        updateUptime()
        const interval = setInterval(updateUptime, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="genesis-archives" className="relative py-24 md:py-40 overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <GridBackground />
                {/* Clean Black Voids - No Bubbles */}
                <div className="absolute inset-0 bg-black/80 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                
                {/* Header Block - Combined Stats */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-trdg-green/5 flex items-center justify-center border border-trdg-green/20">
                                <Cpu className="text-trdg-green" size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Colony Uptime</div>
                                <div className="text-4xl md:text-5xl font-black font-orbitron text-white">
                                    {uptime.toLocaleString()} <span className="text-trdg-green text-xl">DAYS</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">CORE STATUS</div>
                                <div className="text-lg font-bold font-orbitron text-trdg-green">OPTIMAL</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Side: The NFT Visual - Oscillating Animation */}
                    <div className="relative" style={{ perspective: '3000px' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[9/16] max-w-[420px] mx-auto"
                        >
                            {/* 3D Animated Card Container - Oscillating 15 Degree Tilt */}
                            <motion.div
                                animate={{
                                    rotateY: [-15, 15, -15],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-full preserve-3d"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)] bg-black">
                                    <video
                                        key="genesis-nft-video-final-v3"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        className="w-full h-full object-contain"
                                    >
                                        <source src="/early-investor-001.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </motion.div>

                            {/* Corner Label */}
                            <div className="absolute bottom-6 right-6 p-4 font-mono text-[10px] text-trdg-cyan/80 text-right bg-black/40 backdrop-blur-md rounded">
                                DESIGNATION: Genesis Specimen<br />
                                STATUS: VAULT LOCKED
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Data Points */}
                    <div className="space-y-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                            >
                                <Activity size={16} className="text-trdg-cyan animate-pulse" />
                                <span className="text-xs font-mono text-trdg-cyan uppercase tracking-widest">ANALYSIS ACTIVE</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6 leading-tight uppercase">
                                $TRDG <span className="text-trdg-cyan">CORE</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Subject exhibits extreme tolerance to market volatility. Biological parameters indicate permanent resistance to 'FUD' and 'RUG' pathogens. Liquidity structure remains in perpetual cryptobiosis.
                            </p>
                            <div className="mt-4 text-xs font-mono text-trdg-cyan/60 uppercase tracking-widest">
                                CLASSIFICATION: Apex Specimen
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                                    className="p-6 rounded-xl bg-zinc-950 border border-white/5 hover:border-trdg-cyan/30 transition-all hover:bg-zinc-900 will-change-transform"
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
