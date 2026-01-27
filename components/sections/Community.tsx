'use client'

import { motion } from 'framer-motion'
import { Twitter, Send, Globe } from 'lucide-react'
import { OrganicBackground } from '@/components/ui/SectionBackgrounds'

export function Community() {
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

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href="https://t.me/TardigradesOfficial" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-[#229ED9]/10 border border-[#229ED9]/30 text-[#229ED9] rounded-xl hover:bg-[#229ED9] hover:text-white transition-all duration-300 group shadow-lg shadow-[#229ED9]/5">
                            <Send className="group-hover:scale-110 transition-transform" size={20} />
                            <span className="font-bold font-orbitron text-sm uppercase tracking-wider">Telegram</span>
                        </a>
                        <a href="https://t.me/TRDGAnnouncement" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-[#229ED9]/5 border border-[#229ED9]/20 text-[#229ED9]/80 rounded-xl hover:bg-[#229ED9] hover:text-white transition-all duration-300 group">
                            <Send className="group-hover:scale-110 transition-transform" size={18} />
                            <span className="font-bold font-orbitron text-xs uppercase tracking-wider">Announcements</span>
                        </a>
                        <a href="https://x.com/TRDGtoken" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 group shadow-lg shadow-white/5">
                            <Twitter className="group-hover:scale-110 transition-transform" size={20} />
                            <span className="font-bold font-orbitron text-sm uppercase tracking-wider">X (Twitter)</span>
                        </a>
                        <a href="https://www.reddit.com/r/TRDGToken" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-[#FF4500]/10 border border-[#FF4500]/30 text-[#FF4500] rounded-xl hover:bg-[#FF4500] hover:text-white transition-all duration-300 group shadow-lg shadow-[#FF4500]/5">
                            <Globe className="group-hover:scale-110 transition-transform" size={20} />
                            <span className="font-bold font-orbitron text-sm uppercase tracking-wider">Reddit</span>
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-gray-500 font-mono uppercase tracking-[0.2em]">
                        <a href="https://tardigradesfinance.medium.com/" target="_blank" className="hover:text-trdg-green transition-colors flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-trdg-green/30 group-hover:bg-trdg-green transition-colors" />
                            Medium
                        </a>
                        <a href="https://www.instagram.com/trdgtoken/" target="_blank" className="hover:text-[#E4405F] transition-colors flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E4405F]/30 group-hover:bg-[#E4405F] transition-colors" />
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/TRDGtoken" target="_blank" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors" />
                            Facebook
                        </a>
                        <a href="https://www.youtube.com/@TRDGLive" target="_blank" className="hover:text-red-500 transition-colors flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors" />
                            YouTube
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
