'use client'

import { motion } from 'framer-motion'
import { Skull, Heart, Flame, Award, TrendingUp, ShieldCheck, Zap, Bug } from 'lucide-react'

const comparisons = [
    {
        trait: 'Survival Rate',
        trdg: { value: '100%', rating: 5 },
        others: { value: '~2%', rating: 1 },
        icon: Heart
    },
    {
        trait: 'Rug Pull Risk',
        trdg: { value: 'ZERO', rating: 5 },
        others: { value: 'HIGH', rating: 1 },
        icon: ShieldCheck
    },
    {
        trait: 'LP Status',
        trdg: { value: 'BURNED', rating: 5 },
        others: { value: 'UNLOCKED', rating: 2 },
        icon: Flame
    },
    {
        trait: 'Team Tokens',
        trdg: { value: 'NONE', rating: 5 },
        others: { value: '10-30%', rating: 2 },
        icon: Bug
    },
    {
        trait: 'Holder Rewards',
        trdg: { value: '2.5%', rating: 4 },
        others: { value: '0%', rating: 1 },
        icon: Award
    },
    {
        trait: 'Deflationary',
        trdg: { value: 'YES', rating: 5 },
        others: { value: 'RARELY', rating: 2 },
        icon: TrendingUp
    }
]

export function SpeciesComparison() {
    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
                    >
                        <Skull className="text-red-400" size={16} />
                        <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-black">Species Analysis</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        $TRDG VS <span className="text-red-500">THE OTHERS</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        Why Tardigrades Outlast 98% of Tokens
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="grid grid-cols-3 gap-4 mb-6 px-4">
                        <div className="text-left text-[10px] font-mono text-gray-500 uppercase tracking-widest">Trait</div>
                        <div className="text-center">
                            <span className="px-4 py-2 rounded-lg bg-trdg-green/10 text-trdg-green font-orbitron font-bold text-sm">$TRDG</span>
                        </div>
                        <div className="text-center">
                            <span className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 font-orbitron font-bold text-sm">Others</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col md:grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-2 hover:bg-white/10 transition-all group"
                        >
                            {/* Trait */}
                            <div className="flex items-center gap-3 md:col-span-1">
                                <item.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-sm text-white font-medium uppercase font-mono tracking-wider">{item.trait}</span>
                            </div>

                            <div className="grid grid-cols-2 md:contents gap-4">
                                {/* TRDG Value */}
                                <div className="text-center md:col-span-1 p-3 bg-trdg-green/5 rounded-lg border border-trdg-green/10 md:bg-transparent md:border-0">
                                    <div className="md:hidden text-[8px] font-mono text-gray-500 uppercase mb-1">$TRDG Status</div>
                                    <span className="text-lg font-bold text-trdg-green font-orbitron">{item.trdg.value}</span>
                                    <div className="flex justify-center gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${i < item.trdg.rating ? 'bg-trdg-green shadow-[0_0_5px_rgba(0,255,148,0.5)]' : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Others Value */}
                                <div className="text-center md:col-span-1 p-3 bg-red-500/5 rounded-lg border border-red-500/10 md:bg-transparent md:border-0">
                                    <div className="md:hidden text-[8px] font-mono text-gray-500 uppercase mb-1">Competitors</div>
                                    <span className="text-lg font-bold text-red-400 font-orbitron">{item.others.value}</span>
                                    <div className="flex justify-center gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full ${i < item.others.rating ? 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]' : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-r from-trdg-green/5 via-black to-red-500/5 border border-white/5">
                        <div className="text-center">
                            <div className="text-5xl font-black font-orbitron text-trdg-green mb-2">98%</div>
                            <div className="text-xs font-mono text-gray-500 uppercase">of 2021 tokens are DEAD</div>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-white/10" />
                        <div className="text-center">
                            <div className="text-5xl font-black font-orbitron text-white mb-2">$TRDG</div>
                            <div className="text-xs font-mono text-trdg-green uppercase">STILL ALIVE & THRIVING</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
