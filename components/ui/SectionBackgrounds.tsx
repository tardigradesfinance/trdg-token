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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#06201a_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#091d18_0%,transparent_50%)] opactiy-50" />

            {/* Glowing spores - Optimized count */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-trdg-green rounded-full blur-[2px]"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        willChange: 'transform, opacity',
                    }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1.2, 0.5],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Simplified vine animation */}
            <svg className="absolute inset-0 w-full h-full opacity-5">
                <motion.path
                    d="M 0 200 Q 500 100 1000 200"
                    stroke="#00FF94"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        d: [
                            "M 0 200 Q 500 100 1000 200",
                            "M 0 200 Q 500 300 1000 200",
                            "M 0 200 Q 500 100 1000 200",
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    )
}
