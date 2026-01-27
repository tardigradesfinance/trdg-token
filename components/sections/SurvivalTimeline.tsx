'use client'

import { motion } from 'framer-motion'
import { Calendar, Flag, Rocket, Shield, Zap, Award, Globe, Users } from 'lucide-react'

const milestones = [
    {
        date: 'April 2021',
        title: 'Genesis',
        description: 'TRDG deployed on BSC & ETH simultaneously. 50% supply burned at launch.',
        icon: Rocket,
        color: 'bg-trdg-cyan',
        status: 'complete'
    },
    {
        date: 'April 2021',
        title: 'LP Lock',
        description: 'Liquidity pool tokens burned forever. No rug pull possible.',
        icon: Shield,
        color: 'bg-trdg-green',
        status: 'complete'
    },
    {
        date: 'May 2021',
        title: 'CoinGecko Listing',
        description: 'Official listing on CoinGecko for price tracking.',
        icon: Award,
        color: 'bg-orange-500',
        status: 'complete'
    },
    {
        date: 'May 2021',
        title: 'CMC Listing',
        description: 'Listed on CoinMarketCap (BSC & ETH versions).',
        icon: Globe,
        color: 'bg-blue-500',
        status: 'complete'
    },
    {
        date: '2021-2024',
        title: 'Cryptobiosis Phase',
        description: 'Surviving extreme market conditions. Community enters tun state.',
        icon: Zap,
        color: 'bg-purple-500',
        status: 'complete'
    },
    {
        date: '2025',
        title: 'Reawakening',
        description: 'New website launch. Community revival. The Extremophiles return.',
        icon: Users,
        color: 'bg-pink-500',
        status: 'active'
    },
    {
        date: 'FUTURE',
        title: 'Expansion Protocol',
        description: 'New partnerships, utilities, and interstellar reach.',
        icon: Flag,
        color: 'bg-yellow-500',
        status: 'upcoming'
    }
]

export function SurvivalTimeline() {
    return (
        <section id="timeline" className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(0,255,148,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,148,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                    >
                        <Calendar className="text-purple-400" size={16} />
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-black">Historical Archive</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        SURVIVAL <span className="text-purple-400">TIMELINE</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        A Chronicle of Resilience Since 2021
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-trdg-cyan via-purple-500 to-transparent" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Content */}
                            <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                                <div className={`p-6 rounded-2xl bg-white/5 border transition-all hover:bg-white/10 ${milestone.status === 'active'
                                    ? 'border-trdg-green/50 shadow-[0_0_30px_rgba(0,255,148,0.1)]'
                                    : milestone.status === 'upcoming'
                                        ? 'border-yellow-500/30 border-dashed'
                                        : 'border-white/10'
                                    }`}>
                                    <div className="text-xs font-mono text-gray-500 uppercase mb-2">{milestone.date}</div>
                                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">{milestone.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                                    {milestone.status === 'active' && (
                                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trdg-green/10 text-trdg-green text-[10px] font-mono uppercase">
                                            <span className="w-2 h-2 rounded-full bg-trdg-green animate-pulse" />
                                            Currently Active
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Icon Node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 top-6">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className={`w-10 h-10 rounded-full ${milestone.color} flex items-center justify-center shadow-lg border-4 border-black`}
                                >
                                    <milestone.icon size={18} className="text-white" />
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
