'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown, Copy, ExternalLink, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { StarField } from '@/components/ui/StarField'

export function Hero() {
    const [copied, setCopied] = useState(false)
    const contractAddress = "0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5"

    // Parallax / Tilt Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 })
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 })

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { clientX, clientY } = event
        const { innerWidth, innerHeight } = window
        x.set((clientX / innerWidth - 0.5) * 50) // -25 to 25
        y.set((clientY / innerHeight - 0.5) * 50) // -25 to 25
    }

    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])
    const opacity = useTransform(scrollY, [0, 500], [1, 0])
    const scale = useTransform(scrollY, [0, 500], [1, 0.9])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section
            className="sticky top-0 z-0 relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-4 md:pt-24 md:pb-6"
            onMouseMove={handleMouseMove}
        >
            <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
                <StarField />
            </motion.div>

            {/* Background Gradient Mesh (Alive) */}
            <motion.div
                style={{ x: mouseX, y: mouseY, opacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-trdg-cyan/5 rounded-full blur-[150px] mix-blend-screen -z-10"
            />

            <motion.div
                style={{ opacity, scale }}
                className="container relative z-10 px-4 flex flex-col items-center text-center"
            >

                {/* Logo with 3D Float */}
                <motion.div
                    style={{ y: y2, rotateX: mouseY, rotateY: mouseX }}
                    className="relative w-32 h-32 md:w-80 md:h-80 mb-6 md:mb-12 perspective-1000 cursor-pointer"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 2 }}
                >
                    <div className="absolute inset-0 bg-trdg-cyan/20 blur-3xl rounded-full animate-pulse-glow" />
                    <Image
                        src="/images/trdg-logo.png"
                        alt="TRDG Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.4)]"
                        priority
                    />
                </motion.div>

                {/* Main Title Animation */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="mb-4 md:mb-8 relative"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-trdg-green animate-pulse" />
                        <span className="text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest">Est. 2021</span>
                    </div>

                    <h1 className="text-5xl md:text-[10rem] leading-none font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-white via-trdg-cyan to-trdg-cyan/20 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] select-none">
                        $TRDG
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="h-0.5 md:h-1 bg-gradient-to-r from-transparent via-trdg-cyan to-transparent w-full mt-2"
                    />
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ delay: 1, duration: 2 }}
                        className="text-sm md:text-3xl font-orbitron text-white font-bold uppercase mt-4 md:mt-6 drop-shadow-md"
                    >
                        The Unkillable Token
                    </motion.p>
                </motion.div>

                {/* Introduction Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="max-w-2xl text-blue-200 text-sm md:text-xl leading-relaxed mb-6 md:mb-12 font-light backdrop-blur-sm bg-black/30 p-3 md:p-4 rounded-xl border border-white/5"
                >
                    Surviving market turmoil through <span className="text-trdg-green font-bold glow-text">Cryptobiosis</span>.
                    Join the <span className="text-trdg-cyan font-bold">Extremophiles</span> in the conquest of the cryptoverse.
                </motion.p>

                {/* Buttons / Contract */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: "rgba(0, 240, 255, 0.8)", boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={copyToClipboard}
                        className="group relative px-6 py-3 md:px-8 md:py-4 bg-space-light/50 backdrop-blur-md border border-trdg-cyan/30 rounded-xl flex items-center justify-center gap-4 transition-all overflow-hidden w-full md:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-trdg-cyan/0 via-trdg-cyan/10 to-trdg-cyan/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                        <div className="text-left">
                            <div className="text-[10px] md:text-xs text-trdg-cyan/70 uppercase tracking-widest font-bold">Contract Address (BSC & ETH)</div>
                            <div className="font-mono text-white text-sm md:text-lg group-hover:text-trdg-cyan transition-colors tracking-wide break-all">
                                {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
                            </div>
                        </div>
                        {copied ? <span className="text-green-400 text-sm font-bold">COPIED!</span> : <Copy size={20} className="text-trdg-cyan" />}
                    </motion.button>

                    <motion.a
                        href="#mission"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 148, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-trdg-cyan to-trdg-green text-black font-black font-orbitron rounded-xl text-md md:text-lg uppercase tracking-widest flex items-center justify-center gap-3 relative overflow-hidden group w-full md:w-auto"
                    >
                        <span className="relative z-10">Enlist Now</span>
                        <Rocket className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    )
}
