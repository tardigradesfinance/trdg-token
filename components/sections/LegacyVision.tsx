'use client'

import { motion } from 'framer-motion'

export function LegacyVision() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/og-website.mp4" type="video/mp4" />
                </video>
                {/* Dark Fade Overlays */}
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white mb-8 tracking-tighter uppercase">
                        The <span className="text-trdg-cyan">Original</span> Vision
                    </h2>
                    <div className="space-y-6 text-gray-300 font-light text-lg md:text-xl leading-relaxed">
                        <p>
                            Before the multi-chain expansion, before the galactic bridge, there was a simple truth:
                            <span className="text-white font-bold italic"> Survival is the ultimate utility.</span>
                        </p>
                        <p className="text-sm md:text-md opacity-60 font-mono uppercase tracking-widest">
                            [ System_Initialization_v1.0 // Archive_Playback ]
                        </p>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-px bg-gradient-to-r from-transparent via-trdg-cyan to-transparent w-full mt-12"
                    />
                </motion.div>
            </div>
        </section>
    )
}
