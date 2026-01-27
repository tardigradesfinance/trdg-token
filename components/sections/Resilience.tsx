'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Snowflake, Flame, Skull, Zap, Radiation, Droplets, ThermometerSnowflake } from 'lucide-react'
import { GridBackground } from '@/components/ui/SectionBackgrounds'

const features = [
    {
        icon: ThermometerSnowflake,
        title: "Absolute Zero",
        desc: "Survives temperatures close to absolute zero (-273°C), where most life ceases.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        icon: Flame,
        title: "Extreme Heat",
        desc: "Withstands scorching temperatures up to 150°C (300°F).",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        icon: Skull,
        title: "Vacuum of Space",
        desc: "Can survive the crushing pressure of outer space for days without protection.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: Radiation,
        title: "Radiation Proof",
        desc: "Resistant to 1,000x more radiation than any human could survive.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
]

const funFacts = [
    "Tardigrades have been on Earth for over 500 million years, surviving all 5 mass extinctions.",
    "They can go without food or water for more than 30 years, only to rehydrate and forage.",
    "In their 'Tun' state, their metabolism slows to 0.01% of normal levels—virtually dead, yet alive.",
    "Tardigrades are the first known animal to survive after exposure to outer space."
]

export function Resilience() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1])

    return (
        <section id="resilience" className="relative py-32 bg-black border-y border-white/5 overflow-hidden">

            {/* Background Grid */}
            <GridBackground />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <ShieldCheck size={16} className="text-trdg-green" />
                            <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Survival Protocol Active</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8">
                            CRYPTOBIOSIS
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            When the market bleeds, we do not die. Like the Tardigrade expelling water to enter the "Tun" state,
                            <span className="text-white font-bold block mt-2">we simply wait.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-space-light/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-trdg-cyan/30 transition-all group cursor-default shadow-lg hover:shadow-trdg-cyan/10"
                        >
                            <div className={`w-16 h-16 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={feature.color} size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-orbitron text-white mb-3">{feature.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Fun Facts & Community Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Fun Facts */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-space-light/30 border border-white/5 rounded-3xl p-10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Zap size={100} className="text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-8 flex items-center gap-3">
                            <Zap className="text-yellow-400" /> Did You Know?
                        </h3>
                        <ul className="space-y-6">
                            {funFacts.map((fact, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-trdg-cyan font-bold text-lg">0{i + 1}.</span>
                                    <p className="text-gray-300">{fact}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Community Callout */}
                    <motion.div
                        style={{ scale }}
                        className="rounded-3xl bg-gradient-to-br from-trdg-green/20 to-black border border-trdg-green/20 p-10 flex flex-col justify-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-trdg-cyan/5 opacity-10 mix-blend-overlay" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                                WE ARE <span className="text-trdg-green">EXTREMOPHILES</span>
                            </h3>
                            <p className="text-lg text-gray-300 mb-8">
                                Just like the Tardigrade, the <span className="font-bold text-white">$TRDG</span> community does not faint in the face of volatility. We hibernate, we build, and we survive.
                            </p>
                            <div>
                                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-trdg-green/20 text-trdg-green font-mono text-sm border border-trdg-green/50 animate-pulse">
                                    <span className="w-2 h-2 rounded-full bg-trdg-green" />
                                    Status: INDESTRUCTIBLE
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
