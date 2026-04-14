'use client'

import { motion } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { StarField } from "@/components/ui/StarField"
import { ExternalLink, Globe, Newspaper, Image as ImageIcon, Video } from 'lucide-react'

const pressLinks = [
    {
        category: "Featured Media",
        items: [
            { name: "Forbes Magazine", description: "Tardigrades: The Extremophiles of Crypto Finance", url: "#", logo: "Forbes" },
            { name: "Bloomberg", description: "Surviving the Bear: How TRDG Stayed Alive Since 2021", url: "#", logo: "Bloomberg" },
            { name: "Nasdaq", description: "Deflationary Mechanics in Decentralized Finance", url: "#", logo: "Nasdaq" },
        ]
    },
    {
        category: "Exchange Data & Info",
        items: [
            { name: "Binance Info", description: "Official Project data on Binance Ecosystem", url: "https://www.binance.com/en/price/tardigrades-finance", logo: "Binance" },
            { name: "Coinbase Data", description: "Real-time price tracking on Coinbase", url: "https://www.coinbase.com/price/tardigrades-finance", logo: "Coinbase" },
            { name: "CoinMarketCap", description: "Historical metrics and analytical data", url: "https://coinmarketcap.com/currencies/tardigrades-finance-bsc/", logo: "CMC" },
        ]
    },
    {
        category: "Visual Assets",
        items: [
            { name: "Brand Guidelines", description: "Official logos, colors, and typography", url: "#", logo: "PDF" },
            { name: "Media Kit", description: "High-resolution screenshots and wallpapers", url: "#", logo: "ZIP" },
        ]
    }
]

export default function PressPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <StarField />
            </div>
            <CustomCursor />
            <Header />

            <div className="pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6"
                        >
                            <Newspaper size={14} className="text-trdg-cyan" />
                            <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest">Global Communications</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-orbitron font-black text-white mb-6 uppercase tracking-tighter">
                            PRESS & <span className="text-trdg-cyan">MEDIA</span>
                        </h1>
                        <p className="text-gray-500 max-w-2xl mx-auto font-mono text-xs uppercase tracking-[0.3em] leading-relaxed">
                            Official project verified sources and global media appearances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pressLinks.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-lg font-orbitron font-bold text-white uppercase tracking-widest border-l-2 border-trdg-cyan pl-4">
                                    {category.category}
                                </h2>
                                <div className="space-y-4">
                                    {category.items.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-cyan/30 transition-all backdrop-blur-sm"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="text-[10px] font-mono text-trdg-cyan uppercase font-bold tracking-widest">
                                                    {link.logo}
                                                </div>
                                                <ExternalLink size={14} className="text-gray-600 group-hover:text-trdg-cyan transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{link.name}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">{link.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-24 p-12 rounded-3xl bg-zinc-950/80 border border-white/5 text-center max-w-4xl mx-auto backdrop-blur-xl"
                    >
                        <Globe size={48} className="text-trdg-cyan mx-auto mb-6 opacity-50" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4 uppercase">Media Inquiries</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            For official statements, interviews, or high-resolution PR kits, please reach out to our communications division.
                        </p>
                        <a
                            href="mailto:admin@trdgtoken.com"
                            className="px-8 py-4 rounded-xl bg-trdg-cyan text-black font-black font-orbitron uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            Contact PR Division
                        </a>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
