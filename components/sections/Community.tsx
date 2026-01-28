'use client'

import { motion } from 'framer-motion'
import { Twitter, Send, Globe, Github, Youtube, Instagram, Facebook, BookOpen, MessageSquare } from 'lucide-react'
import { OrganicBackground } from '@/components/ui/SectionBackgrounds'

export function Community() {
    const socials = [
        {
            name: 'Telegram Main',
            url: 'https://t.me/TardigradesOfficial',
            icon: Send,
            color: 'text-[#229ED9]',
            bg: 'bg-[#229ED9]/10',
            border: 'border-[#229ED9]/20',
            hover: 'hover:bg-[#229ED9] hover:text-white',
        },
        {
            name: 'Announcements',
            url: 'https://t.me/TRDGAnnouncement',
            icon: Send,
            color: 'text-[#229ED9]/80',
            bg: 'bg-[#229ED9]/5',
            border: 'border-[#229ED9]/10',
            hover: 'hover:bg-[#229ED9] hover:text-white',
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/TRDGtoken',
            icon: Twitter,
            color: 'text-white',
            bg: 'bg-white/5',
            border: 'border-white/10',
            hover: 'hover:bg-white/10 hover:border-white/30',
        },
        {
            name: 'Reddit',
            url: 'https://www.reddit.com/r/TRDGToken',
            icon: MessageSquare,
            color: 'text-[#FF4500]',
            bg: 'bg-[#FF4500]/10',
            border: 'border-[#FF4500]/20',
            hover: 'hover:bg-[#FF4500] hover:text-white',
        },
        {
            name: 'Medium',
            url: 'https://tardigradesfinance.medium.com/',
            icon: BookOpen,
            color: 'text-trdg-green',
            bg: 'bg-trdg-green/10',
            border: 'border-trdg-green/20',
            hover: 'hover:bg-trdg-green hover:text-black',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/trdgtoken/',
            icon: Instagram,
            color: 'text-[#E4405F]',
            bg: 'bg-[#E4405F]/10',
            border: 'border-[#E4405F]/20',
            hover: 'hover:bg-[#E4405F] hover:text-white',
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/TRDGtoken',
            icon: Facebook,
            color: 'text-[#1877F2]',
            bg: 'bg-[#1877F2]/10',
            border: 'border-[#1877F2]/20',
            hover: 'hover:bg-[#1877F2] hover:text-white',
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@TRDGLive',
            icon: Youtube,
            color: 'text-[#FF0000]',
            bg: 'bg-[#FF0000]/10',
            border: 'border-[#FF0000]/20',
            hover: 'hover:bg-[#FF0000] hover:text-white',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/tardigradesfinance',
            icon: Github,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            hover: 'hover:bg-purple-500 hover:text-white',
        }
    ]

    return (
        <section id="community" className="relative py-24 md:py-32 overflow-hidden bg-black">
            <OrganicBackground />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="will-change-transform"
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-trdg-cyan to-trdg-green">Colony</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-12 font-light">
                        We are the microscopic titans of the blockchain. Indestructible. Inevitable.
                        <br />
                        <span className="text-white font-bold mt-2 block">Join the Extremophiles and survive anything.</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto perspective-1000">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    rotateX: 10,
                                    boxShadow: '0 20px 40px -10px rgba(0,240,255,0.2)'
                                }}
                                className={`
                                    relative w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center gap-4 
                                    backdrop-blur-md rounded-xl border transition-all duration-300 group
                                    ${social.bg} ${social.border} ${social.color}
                                    hover:bg-opacity-20 hover:border-opacity-50
                                    transform-gpu preserve-3d
                                `}
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Trapezoid/Sci-Fi Shape masking or clip path could be used, but CSS 3D rotateX gives a nice tilt */}
                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <social.icon className="relative z-10 w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                                <span className="relative z-10 font-bold font-orbitron text-[10px] md:text-xs uppercase tracking-wider text-center px-2">{social.name}</span>

                                {/* Bottom decoration line */}
                                <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-current opacity-30 group-hover:w-16 transition-all duration-300`} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
