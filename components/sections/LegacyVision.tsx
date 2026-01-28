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
                {/* Dark Fade Overlays - High visibility for the OG video */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white mb-8 tracking-tighter uppercase">
                        The <span className="text-trdg-cyan">Original</span> Vision
                    </h2>
                    <div className="space-y-6 text-gray-300 font-light text-sm md:text-lg leading-relaxed text-left md:text-center max-w-3xl mx-auto">
                        <p>
                            <span className="text-trdg-cyan font-bold">Subject:</span> The Tardigrade (Hypsibius dujardini).
                            <br />
                            <span className="text-trdg-green font-bold">Status:</span> Indestructible.
                        </p>
                        <p>
                            Born in the microscopic realms, evolved for the cosmic void. The Tardigrade is nature's ultimate survivor.
                            Capable of weathering the vacuum of space, extreme radiation, and temperatures near absolute zero, it represents the
                            biological pinnacle of <span className="text-white font-bold italic">Cryptobiosis</span> — the state of suspended animation that defies death itself.
                        </p>
                        <p>
                            In 2021, we forged this resilience into a digital asset. Unlike the fleeting trends of the crypto-verse, $TRDG was designed to endure.
                            With Liquidity Pool tokens burned for eternity and ownership renounced, the protocol is immutable, unstoppable, and entirely community-owned.
                        </p>
                        <p>
                            We are not just a token; we are a colony. A decentralized collective of <span className="text-trdg-cyan font-bold">Extremophiles</span> thriving where others perish.
                            The mission is simple: <strong>Survive. Adapt. Expand.</strong>
                        </p>
                        <p className="text-xs md:text-sm opacity-60 font-mono uppercase tracking-widest pt-4">
                            [ System_Initialization_v1.0 // Archive_Playback_Complete ]
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
