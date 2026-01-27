'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Activity, Timer, Zap, Shield, Atom, Radio, Cpu, Heart } from 'lucide-react'

export function VitalSigns() {
    const [pulseRate, setPulseRate] = useState(72)
    const [systemStatus, setSystemStatus] = useState('OPTIMAL')
    const [uptime, setUptime] = useState(0)

    // Calculate uptime since launch (April 2021)
    useEffect(() => {
        const launchDate = new Date('2021-04-15')
        const updateUptime = () => {
            const now = new Date()
            const days = Math.floor((now.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24))
            setUptime(days)
        }
        updateUptime()
        const interval = setInterval(updateUptime, 60000)
        return () => clearInterval(interval)
    }, [])

    // Simulate heartbeat variation
    useEffect(() => {
        const interval = setInterval(() => {
            setPulseRate(70 + Math.floor(Math.random() * 10))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const vitals = [
        { label: 'Organism Status', value: systemStatus, color: 'text-trdg-green', icon: Shield },
        { label: 'Core Temp', value: '-272°C', color: 'text-blue-400', icon: Atom },
        { label: 'Pulse Rate', value: `${pulseRate} BPM`, color: 'text-red-400', icon: Activity },
        { label: 'Signal Strength', value: '99.9%', color: 'text-yellow-400', icon: Radio },
    ]

    return (
        <section className="relative py-16 bg-black overflow-hidden border-y border-trdg-green/10">
            {/* Animated ECG Line Background */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <motion.path
                        d="M0,50 L50,50 L60,20 L70,80 L80,50 L100,50 L150,50 L160,30 L170,70 L180,50 L250,50"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-trdg-green"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left: Uptime Counter */}
                    <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-6 will-change-transform"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 rounded-full bg-trdg-green/20 flex items-center justify-center"
                            >
                                <Cpu className="text-trdg-green" size={32} />
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-full border-2 border-trdg-green"
                            />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Uptime</div>
                            <div className="text-4xl font-black font-orbitron text-white">
                                {uptime.toLocaleString()} <span className="text-trdg-green text-xl">DAYS</span>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">Since Genesis Block (April 2021)</div>
                        </div>
                    </motion.div>

                    {/* Right: Vital Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {vitals.map((vital, index) => (
                            <motion.div
                                layout
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center group hover:border-trdg-green/30 transition-all will-change-transform"
                            >
                                <vital.icon className={`mx-auto mb-2 ${vital.color} group-hover:scale-110 transition-transform`} size={20} />
                                <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">{vital.label}</div>
                                <div className={`text-lg font-bold font-orbitron ${vital.color}`}>{vital.value}</div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
