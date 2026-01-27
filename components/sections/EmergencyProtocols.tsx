'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ShieldAlert, Thermometer, Radio, Lock, Eye } from 'lucide-react'

const protocols = [
    {
        code: 'ALPHA-01',
        name: 'Extreme Heat',
        description: 'Market overheating detected. Organism enters cryptobiosis to preserve resources.',
        status: 'STANDBY',
        icon: Thermometer,
        color: 'orange'
    },
    {
        code: 'ALPHA-02',
        name: 'Flash Crash',
        description: 'Rapid price decline mode. Tun state activated. Waiting for revival conditions.',
        status: 'STANDBY',
        icon: AlertTriangle,
        color: 'red'
    },
    {
        code: 'BETA-01',
        name: 'LP Lock Verification',
        description: 'Continuous monitoring of liquidity pool lock status. PERMANENTLY BURNED.',
        status: 'ACTIVE',
        icon: Lock,
        color: 'green'
    },
    {
        code: 'BETA-02',
        name: 'Burn Wallet Monitor',
        description: 'Real-time tracking of tokens entering the dead wallet abyss.',
        status: 'ACTIVE',
        icon: Eye,
        color: 'cyan'
    },
    {
        code: 'GAMMA-01',
        name: 'Community Signal',
        description: 'Monitoring social channels for revival signals from Extremophiles.',
        status: 'ACTIVE',
        icon: Radio,
        color: 'purple'
    },
    {
        code: 'OMEGA-01',
        name: 'Total Collapse',
        description: 'Emergency hibernation protocol. Never activated. Probably never will be.',
        status: 'OFFLINE',
        icon: ShieldAlert,
        color: 'gray'
    }
]

export function EmergencyProtocols() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ACTIVE': return 'text-trdg-green bg-trdg-green/10 border-trdg-green/30'
            case 'STANDBY': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
            case 'OFFLINE': return 'text-gray-500 bg-gray-500/10 border-gray-500/30'
            default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
        }
    }

    const getIconColor = (color: string) => {
        switch (color) {
            case 'green': return 'text-trdg-green'
            case 'cyan': return 'text-trdg-cyan'
            case 'orange': return 'text-orange-500'
            case 'red': return 'text-red-500'
            case 'purple': return 'text-purple-400'
            case 'gray': return 'text-gray-500'
            default: return 'text-white'
        }
    }

    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden border-y border-red-500/10">
            {/* Warning Stripes Background */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,0,0,0.1) 10px, rgba(255,0,0,0.1) 20px)',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4 md:mb-6"
                    >
                        <AlertTriangle className="text-red-400 animate-pulse" size={14} />
                        <span className="text-[9px] md:text-[10px] font-mono text-red-400 uppercase tracking-widest font-black">System Protocols</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-3xl md:text-7xl font-orbitron font-black text-white mb-2 md:mb-4 uppercase tracking-tighter"
                    >
                        EMERGENCY <span className="text-red-500">PROTOCOLS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]"
                    >
                        Cryptobiosis Defense Mechanisms
                    </motion.p>
                </div>

                {/* Protocol Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {protocols.map((protocol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group will-change-transform"
                        >
                            {/* Scan line effect */}
                            <motion.div
                                animate={{ top: ['0%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                            />

                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${getIconColor(protocol.color)}`}>
                                    <protocol.icon size={24} />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${getStatusColor(protocol.status)}`}>
                                    {protocol.status}
                                </span>
                            </div>

                            <div className="text-[10px] font-mono text-gray-600 mb-1">{protocol.code}</div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{protocol.name}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{protocol.description}</p>

                            {protocol.status === 'ACTIVE' && (
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-trdg-green"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* System Status Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-6 rounded-2xl bg-trdg-green/5 border border-trdg-green/20 max-w-2xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-3 h-3 rounded-full bg-trdg-green"
                        />
                        <span className="text-trdg-green font-orbitron font-bold uppercase">All Systems Nominal</span>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">
                        No emergency protocols currently engaged. Organism operating at optimal efficiency.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
