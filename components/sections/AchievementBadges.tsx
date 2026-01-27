'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, Rocket, Crown, Star, Gem } from 'lucide-react'

const achievements = [
    {
        title: 'Genesis Survivor',
        description: 'Hold TRDG since April 2021',
        icon: Trophy,
        rarity: 'LEGENDARY',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30'
    },
    {
        title: 'Bear Market Veteran',
        description: 'Survived the 2022 crypto winter',
        icon: Target,
        rarity: 'EPIC',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/30'
    },
    {
        title: 'Diamond Hands',
        description: 'Never sold a single token',
        icon: Gem,
        rarity: 'RARE',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/30'
    },
    {
        title: 'Reward Farmer',
        description: 'Collected 1M+ in reflection rewards',
        icon: Crown,
        rarity: 'EPIC',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/30'
    },
    {
        title: 'Community Builder',
        description: 'Active in Telegram & socials',
        icon: Star,
        rarity: 'UNCOMMON',
        color: 'text-trdg-green',
        bg: 'bg-trdg-green/10',
        border: 'border-trdg-green/30'
    },
    {
        title: 'Early Adopter',
        description: 'One of the first 1000 holders',
        icon: Rocket,
        rarity: 'LEGENDARY',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30'
    }
]

export function AchievementBadges() {
    const getRarityStyle = (rarity: string) => {
        switch (rarity) {
            case 'LEGENDARY': return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/40'
            case 'EPIC': return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/40'
            case 'RARE': return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/40'
            case 'UNCOMMON': return 'bg-gradient-to-r from-green-500/20 to-teal-500/20 border-green-500/40'
            default: return 'bg-white/5 border-white/10'
        }
    }

    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
                    >
                        <Trophy className="text-yellow-400" size={16} />
                        <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-black">Holder Achievements</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        SURVIVAL <span className="text-yellow-400">BADGES</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        Proof of Extremophile Status
                    </p>
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {achievements.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`p-6 rounded-2xl border text-center group cursor-pointer ${getRarityStyle(badge.rarity)} will-change-transform`}
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                className={`w-16 h-16 mx-auto mb-4 rounded-xl ${badge.bg} flex items-center justify-center ${badge.color}`}
                            >
                                <badge.icon size={32} />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-sm font-orbitron font-bold text-white mb-1">{badge.title}</h3>

                            {/* Rarity Tag */}
                            <div className={`inline-block px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase ${badge.color} ${badge.bg}`}>
                                {badge.rarity}
                            </div>

                            {/* Description (on hover) */}
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                whileHover={{ opacity: 1, height: 'auto' }}
                                className="text-[10px] text-gray-400 mt-2 overflow-hidden"
                            >
                                {badge.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                {/* Coming Soon Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                        Badge Claim System Coming Soon • Connect Wallet to Verify Status
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
