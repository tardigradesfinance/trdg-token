'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-4 z-50 p-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-trdg-cyan shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:bg-zinc-800 hover:border-trdg-cyan/50 hover:text-white transition-all group flex items-center gap-2 overflow-hidden"
                    title="Back to Top"
                >
                    <div className="relative flex items-center justify-center">
                        <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </div>

                    {/* Visual integration with scroll bar-like line */}
                    <div className="h-4 w-[1px] bg-white/20 hidden group-hover:block transition-all" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest max-w-0 group-hover:max-w-[100px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Top
                    </span>

                    {/* Scanning glow line */}
                    <motion.div
                        animate={{ y: [-10, 30] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[1px] bg-trdg-cyan/30 blur-[1px] pointer-events-none"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
