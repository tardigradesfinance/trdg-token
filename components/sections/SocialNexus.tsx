'use client'

import { motion } from 'framer-motion'
import { Send, Twitter, Github, Youtube, Instagram, MessageSquare, BookOpen, Globe } from 'lucide-react'

const socialLinks = [
    {
        name: 'Telegram',
        url: 'https://t.me/TardigradesOfficial',
        icon: Send,
        color: 'hover:text-[#229ED9] hover:border-[#229ED9]/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(34,158,217,0.3)]',
        id: 'TG-01'
    },
    {
        name: 'Twitter (X)',
        url: 'https://x.com/TRDGtoken',
        icon: Twitter,
        color: 'hover:text-blue-400 hover:border-blue-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        id: 'X-01'
    },
    {
        name: 'Reddit',
        url: 'https://www.reddit.com/r/TRDGToken',
        icon: MessageSquare,
        color: 'hover:text-[#FF4500] hover:border-[#FF4500]/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]',
        id: 'RD-01'
    },
    {
        name: 'Medium',
        url: 'https://tardigradesfinance.medium.com/',
        icon: BookOpen,
        color: 'hover:text-trdg-green hover:border-trdg-green/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]',
        id: 'MD-01'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/trdgtoken/',
        icon: Instagram,
        color: 'hover:text-[#E4405F] hover:border-[#E4405F]/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(228,64,95,0.3)]',
        id: 'IG-01'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@TRDGLive',
        icon: Youtube,
        color: 'hover:text-[#FF0000] hover:border-[#FF0000]/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]',
        id: 'YT-01'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/tardigradesfinance',
        icon: Github,
        color: 'hover:text-purple-400 hover:border-purple-400/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
        id: 'GH-01'
    },
    {
        name: 'Whitepaper',
        url: 'https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf',
        icon: Globe,
        color: 'hover:text-trdg-cyan hover:border-trdg-cyan/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
        id: 'WP-01'
    }
]

export function SocialNexus() {
    return (
        <section id="nexus" className="py-24 bg-black relative overflow-hidden">
            {/* Background HUD elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-trdg-cyan fill-none">
                        <circle cx="50" cy="50" r="48" strokeDasharray="1 10" />
                    </svg>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-orbitron font-black text-white mb-6"
                    >
                        THE <span className="text-trdg-cyan">NEXUS</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
                        Interstellar Communication & Documentation Channels
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            layout
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 ${social.color} transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-4 ${social.glow} will-change-transform`}
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* HUD corner lines */}
                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-inherit" />
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-inherit" />

                            <div className="relative z-10 p-4 rounded-xl bg-black/40 border border-white/5 group-hover:border-inherit transition-colors">
                                <social.icon size={32} />
                            </div>

                            <div className="relative z-10 text-center">
                                <span className="block text-xs font-mono text-gray-500 mb-1">{social.id}</span>
                                <span className="block font-orbitron font-bold text-sm uppercase tracking-wider text-inherit">{social.name}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Additional Links Row */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <a href="https://coinmarketcap.com/currencies/tardigrades-finance-bsc/" target="_blank" className="hover:text-trdg-cyan transition-colors">CMC (BSC)</a>
                    <a href="https://coinmarketcap.com/currencies/tardigrades-finance-eth/" target="_blank" className="hover:text-trdg-cyan transition-colors">CMC (ETH)</a>
                    <a href="https://www.coingecko.com/en/coins/trdgtoken" target="_blank" className="hover:text-trdg-cyan transition-colors">CoinGecko</a>
                    <a href="https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-trdg-cyan transition-colors">Etherscan</a>
                    <a href="https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-trdg-cyan transition-colors">BscScan</a>
                </div>
            </div>
        </section>
    )
}
