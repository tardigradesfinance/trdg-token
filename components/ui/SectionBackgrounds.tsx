'use client'

import { motion } from 'framer-motion'

export function GridBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-trdg-cyan/5 blur-[120px]"
            />
        </div>
    )
}

export function OrganicBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
            {/* Dark green/mossy base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#06201a_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#091d18_0%,transparent_50%)]" />

            {/* Glowing spores */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-trdg-green rounded-full blur-[2px]"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* Faint vine-like lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <motion.path
                    d="M 0 100 Q 250 50 500 100 T 1000 100"
                    stroke="#00FF94"
                    strokeWidth="0.5"
                    fill="none"
                    filter="url(#glow)"
                    animate={{
                        d: [
                            "M 0 100 Q 250 50 500 100 T 1000 100",
                            "M 0 100 Q 250 150 500 100 T 1000 100",
                            "M 0 100 Q 250 50 500 100 T 1000 100",
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </svg>
        </div>
    )
}
