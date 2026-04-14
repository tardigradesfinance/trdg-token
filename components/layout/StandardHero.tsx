'use client'

import { motion } from 'framer-motion'
import { StarField } from '@/components/ui/StarField'
import { ParticleField } from '@/components/ui/ParticleField'

interface StandardHeroProps {
    title: string | React.ReactNode
    subtitle?: string
}

export function StandardHero({ title, subtitle }: StandardHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Standard Global Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <StarField />
                <ParticleField />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-8xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-2xl mx-auto leading-relaxed mt-4">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
