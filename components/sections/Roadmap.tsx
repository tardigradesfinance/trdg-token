'use client'

import { motion } from 'framer-motion'

export function Roadmap() {
    const steps = [
        {
            title: 'The Awakening (BSC)',
            date: 'March 8th, 2021',
            description: 'TRDG emerges from cryptobiosis on Binance Smart Chain via PancakeSwap V1. The first colony is established.',
            status: 'completed'
        },
        {
            title: 'Interstellar Expansion (ETH)',
            date: 'May 11th, 2021',
            description: 'The Extremophiles successfully bridge to Ethereum (Uniswap V2), proving the token can survive in multiple environments.',
            status: 'completed'
        },
        {
            title: 'Cryptobiosis',
            date: 'The Long Winter',
            description: 'Surviving the bear market through collective hibernation. Diamond hands forge the community\'s armor.',
            status: 'active'
        },
        {
            title: 'Galactic Domination',
            date: 'Upcoming',
            description: 'New listings, partnerships, and the spread of the Tardigrade meme to every corner of the metaverse.',
            status: 'upcoming'
        },
    ]

    return (
        <section id="roadmap" className="relative py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center text-white mb-16">
                    The Journey
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-trdg-cyan via-purple-500 to-transparent md:-translate-x-1/2 ml-4 md:ml-0" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-space-black border-4 border-trdg-cyan rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />

                                <div className="md:w-1/2 pl-12 md:pl-0" /> {/* Spacer */}

                                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <div className="bg-space-light/40 p-6 rounded-xl border border-white/5 hover:border-trdg-cyan/30 transition-colors">
                                        <div className="text-trdg-cyan font-mono text-sm mb-2">{step.date}</div>
                                        <h3 className={`text-2xl font-bold font-orbitron mb-2 ${step.status === 'active' ? 'text-trdg-cyan' : 'text-white'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400">{step.description}</p>
                                        {step.status === 'active' && (
                                            <span className="inline-block mt-3 px-3 py-1 bg-trdg-cyan/20 text-trdg-cyan text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
                                                Current Phase
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
