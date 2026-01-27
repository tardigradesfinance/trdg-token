'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth physics for the cursor
    const springConfig = { stiffness: 300, damping: 30 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16)
            mouseY.set(e.clientY - 16)
        }

        window.addEventListener('mousemove', moveMouse)
        return () => window.removeEventListener('mousemove', moveMouse)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            {/* Outer Lens */}
            <div className="absolute inset-0 border border-trdg-cyan/50 rounded-full bg-trdg-cyan/5 backdrop-blur-[1px]" />

            {/* Crosshair Dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-trdg-cyan" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-trdg-cyan" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1 bg-trdg-cyan" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1 bg-trdg-cyan" />

            {/* Pulsing Spore at center */}
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-trdg-green rounded-full shadow-[0_0_10px_rgba(0,255,148,0.8)]"
            />
        </motion.div>
    )
}
