'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Shield, Heart, Zap } from 'lucide-react'

const testimonials = [
    {
        quote: "I bought TRDG in 2021 and completely forgot about it. Just checked - it's STILL HERE. That's insane for crypto.",
        author: "Anonymous Holder",
        role: "OG Extremophile",
        avatar: "🐻",
        rating: 5
    },
    {
        quote: "Every other meme coin from that era is dead. TRDG survived the bear market, the crashes, everything. True cryptobiosis!",
        author: "Diamond Hands Dev",
        role: "Community Member",
        avatar: "💎",
        rating: 5
    },
    {
        quote: "The tokenomics are actually genius. Automatic burns and rewards mean it gets stronger over time, not weaker.",
        author: "TokenomicsChad",
        role: "DeFi Analyst",
        avatar: "📊",
        rating: 5
    },
    {
        quote: "LP burned forever, no team tokens, no way to rug. This is what crypto was supposed to be.",
        author: "SafetyFirst",
        role: "Security Researcher",
        avatar: "🔒",
        rating: 5
    },
    {
        quote: "Watched 99% of my 2021 portfolio go to zero. TRDG is the only survivor. There's something different about this one.",
        author: "Portfolio Survivor",
        role: "Long-term Holder",
        avatar: "🦠",
        rating: 5
    },
    {
        quote: "The community is small but dedicated. We call ourselves Extremophiles because we thrive in conditions that kill others.",
        author: "MossPiglet42",
        role: "Community OG",
        avatar: "🧬",
        rating: 5
    }
]

export function HolderTestimonials() {
    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(0,255,148,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6"
                    >
                        <Heart className="text-pink-400" size={16} />
                        <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest font-black">Community Voices</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        <span className="text-pink-400">EXTREMOPHILE</span> STORIES
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        Real Survivors. Real Holders. Real Resilience.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group hover:border-pink-500/30 transition-all will-change-transform"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-4 right-4 text-white/5 group-hover:text-pink-500/10 transition-colors" size={40} />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                                "{item.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
                                    {item.avatar}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{item.author}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm mb-6">
                        Are you an Extremophile? Join thousands of survivors who refuse to die.
                    </p>
                    <motion.a
                        href="https://t.me/TardigradesOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-orbitron font-bold uppercase text-sm shadow-lg shadow-pink-500/20"
                    >
                        <Zap size={18} />
                        Join The Colony
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
