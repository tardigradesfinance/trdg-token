'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck, Zap, Globe, Cpu, Database, Link as LinkIcon, BarChart3, MessageSquare, BookOpen, Lock } from 'lucide-react'

const linkCategories = [
    {
        title: "Trading Hubs",
        icon: Zap,
        color: "text-yellow-500",
        links: [
            { name: "PancakeSwap (BSC)", url: "https://pancakeswap.finance/swap?outputCurrency=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5", id: "TR-01" },
            { name: "Uniswap (ETH)", url: "https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5", id: "TR-02" },
            { name: "DEXTools (BSC)", url: "https://www.dextools.io/app/bnb/pair-explorer/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e", id: "TR-03" },
            { name: "DEXTools (ETH)", url: "https://www.dextools.io/app/ether/pair-explorer/0xc2367025716cf1109321e4cb96f47c0E3f9beb05", id: "TR-04" },
            { name: "DexScreener (BSC)", url: "https://dexscreener.com/bsc/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e", id: "TR-05" },
            { name: "DexScreener (ETH)", url: "https://dexscreener.com/ethereum/0x92a42db88ed0f02c71d439e55962ca7cab0168b5", id: "TR-06" },
        ]
    },
    {
        title: "Intelligence & Tracking",
        icon: BarChart3,
        color: "text-trdg-cyan",
        links: [
            { name: "CoinMarketCap (BSC)", url: "https://coinmarketcap.com/currencies/tardigrades-finance-bsc/", id: "IT-01" },
            { name: "CoinMarketCap (ETH)", url: "https://coinmarketcap.com/currencies/tardigrades-finance-eth/", id: "IT-02" },
            { name: "CoinGecko", url: "https://www.coingecko.com/en/coins/trdgtoken", id: "IT-03" },
            { name: "BscScan Explorer", url: "https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5", id: "IT-04" },
            { name: "Etherscan Explorer", url: "https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5", id: "IT-05" },
            { name: "Bubble Maps", url: "https://bubblemaps.io/eth/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5", id: "IT-06" },
        ]
    },
    {
        title: "Social Nexus",
        icon: MessageSquare,
        color: "text-purple-500",
        links: [
            { name: "Official Telegram", url: "https://t.me/TardigradesOfficial", id: "SN-01" },
            { name: "X / Twitter", url: "https://x.com/TRDGtoken", id: "SN-02" },
            { name: "Reddit Community", url: "https://www.reddit.com/r/TRDGToken", id: "SN-03" },
            { name: "Medium Updates", url: "https://tardigradesfinance.medium.com/", id: "SN-04" },
            { name: "Instagram Portal", url: "https://www.instagram.com/trdgtoken/", id: "SN-05" },
            { name: "YouTube Channel", url: "https://www.youtube.com/@TRDGLive", id: "SN-06" },
        ]
    },
    {
        title: "Documentation & Dev",
        icon: BookOpen,
        color: "text-trdg-green",
        links: [
            { name: "Full Whitepaper", url: "https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf", id: "DD-01" },
            { name: "GitHub Source", url: "https://github.com/tardigradesfinance", id: "DD-02" },
            { name: "Privacy Protocol", url: "/privacy-policy", id: "DD-03" },
            { name: "Terms of Service", url: "/terms-of-service", id: "DD-04" },
            { name: "Sticker Pack", url: "https://t.me/addstickers/TRDGtoken", id: "DD-05" },
            { name: "Archive Logs", url: "/#archives", id: "DD-06" },
        ]
    }
]

export function ProtocolHub({ showTitle = true }: { showTitle?: boolean }) {
    return (
        <section id="protocol-hub" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {showTitle && (
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <LinkIcon size={14} className="text-trdg-cyan" />
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Extended Resource Directory</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-6">
                            PROTOCOL <span className="text-trdg-cyan">HUB</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-mono text-xs uppercase tracking-[0.2em] leading-relaxed">
                            Centralized access point for all $TRDG project resources and verification channels.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {linkCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg bg-white/5 ${category.color}`}>
                                    <category.icon size={20} />
                                </div>
                                <h3 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider">{category.title}</h3>
                            </div>

                            <div className="space-y-3">
                                {category.links.map((link, lIdx) => (
                                    <a
                                        key={lIdx}
                                        href={link.url}
                                        target={link.url.startsWith('http') ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-trdg-cyan/30 hover:bg-trdg-cyan/5 transition-all text-xs group/link"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-mono text-gray-600 group-hover/link:text-trdg-cyan/50 mb-0.5">{link.id}</span>
                                            <span className="text-gray-400 group-hover/link:text-white transition-colors">{link.name}</span>
                                        </div>
                                        <ExternalLink size={12} className="text-gray-600 group-hover/link:text-trdg-cyan" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Site Health Diagnostics Component will be placed above or below this */}
            </div>
        </section>
    )
}
