'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BarChart3, Globe, Shield, Wallet, Newspaper, ShoppingCart, Music } from 'lucide-react'

const linkCategories = [
    {
        title: "Global Tracking",
        icon: BarChart3,
        links: [
            { name: "Forbes Digital Assets", url: "https://www.forbes.com/digital-assets/assets/trdgtoken-trdg/" },
            { name: "CoinDesk Research", url: "https://www.coindesk.com/price/trdg" },
            { name: "DexCheck Intelligence", url: "https://dexcheck.ai/app/bsc/chart/0x489e73fa82e30d27778c1b7b7e4e3503dcfd762a?t=1761635451773" },
            { name: "PooCoin Terminal", url: "https://poocoin.app/tokens/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" },
            { name: "GeckoTerminal", url: "https://www.geckoterminal.com/eth/pools/0xc2367025716cf1109321e4cb96f47c0e3f9beb05" },
            { name: "DexView Tracker", url: "https://www.dexview.com/bsc/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" },
            { name: "DropsTab Data", url: "https://dropstab.com/coins/tardigrades-finance" },
            { name: "LiveCoinWatch", url: "https://www.livecoinwatch.com/price/TardigradesFinance-TRDG" },
        ]
    },
    {
        title: "Acquire & Exchange",
        icon: ShoppingCart,
        links: [
            { name: "MEXC Global", url: "https://www.mexc.com/price/trdgtoken/info" },
            { name: "XT Exchange", url: "https://www.xt.com/en/price/trdg" },
            { name: "Bitrue Registry", url: "https://www.bitrue.com/how-to-buy/trdg" },
            { name: "Coinbase Price", url: "https://www.coinbase.com/price/tardigrades-finance-eth/" },
            { name: "Crypto.com App", url: "https://crypto.com/en/price/tardigrades-finance-eth" },
            { name: "Blockchain.com", url: "https://www.blockchain.com/crypto-wallet/how-to-buy-trdg" },
            { name: "Coinlore List", url: "https://www.coinlore.com/coin/tardigrades-finance/exchanges" },
            { name: "CoinCarp Portal", url: "https://www.coincarp.com/currencies/tardigrades-finance-eth/" },
        ]
    },
    {
        title: "Intelligence & Wallets",
        icon: Shield,
        links: [
            { name: "Phantom Wallet", url: "https://phantom.com/tokens/ethereum/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" },
            { name: "Token Metrics", url: "https://app.tokenmetrics.com/en/tardigrades-finance" },
            { name: "DappRadar Hub", url: "https://dappradar.com/dapp/trdg-track" },
            { name: "CryptoRank Data", url: "https://cryptorank.io/price/tardigrades-finance-eth" },
            { name: "Delta Portfolio", url: "https://delta.app/en/crypto/tardigrades.finance/" },
            { name: "BscScan Explorer", url: "https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" },
            { name: "Etherscan Data", url: "https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" },
            { name: "HedgeWorld", url: "https://hedgeworld.com/how-to-buy-tardigrades-finance-bsc-trdg/" },
        ]
    },
    {
        title: "Ecosystem & Media",
        icon: Globe,
        links: [
            { name: "Stocktwits Page", url: "https://stocktwits.com/symbol/TRDG.X" },
            { name: "CoinMooner", url: "https://coinmooner.com/coins/tardigradesfinance-trdg" },
            { name: "CoinPaprika", url: "https://coinpaprika.com/coin/trdg-tardigrades-finance/" },
            { name: "SoundCloud Sets", url: "https://m.soundcloud.com/trdgtoken/sets/trdg" },
            { name: "CoinMarketCap B", url: "https://coinmarketcap.com/currencies/tardigrades-finance-bsc/" },
            { name: "CoinMarketCap E", url: "https://coinmarketcap.com/currencies/tardigrades-finance-eth/" },
            { name: "WalletInvestor", url: "https://walletinvestor.com/forecast/tardigrades-finance-bsc-prediction" },
            { name: "BitDegree Academy", url: "https://www.bitdegree.org/cryptocurrency-prices/tardigrades-finance-eth-trdg-price" },
        ]
    }
]

export function LinkEcosystem() {
    return (
        <section id="ecosystem" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trdg-green/10 border border-trdg-green/20 mb-6"
                    >
                        <Globe size={16} className="text-trdg-green animate-pulse" />
                        <span className="text-xs font-mono text-trdg-green uppercase tracking-widest">Ecosystem Expansion Connected</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-6 uppercase tracking-tight">
                        THE <span className="text-trdg-cyan">REGISTRY</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-xl">
                        A global network of verified data partners, exchanges, and institutional research portals tracking $TRDG.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {linkCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="rounded-xl bg-black/60 border border-white/5 overflow-hidden flex flex-col"
                        >
                            <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <category.icon size={16} className="text-trdg-cyan" />
                                    <h3 className="font-orbitron font-bold text-white uppercase tracking-wider text-[10px]">
                                        {category.title}
                                    </h3>
                                </div>
                                <span className="text-[8px] font-mono text-gray-600 uppercase">SYS_NODE_{catIndex + 1}</span>
                            </div>
                            
                            <div className="flex-1">
                                {category.links.map((link, linkIndex) => (
                                    <a 
                                        key={linkIndex}
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.03] hover:bg-trdg-cyan/[0.03] group/link transition-all"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] font-mono text-gray-700 group-hover/link:text-trdg-cyan/50">
                                                0{catIndex+1}-0{linkIndex+1}
                                            </span>
                                            <span className="text-[11px] font-mono text-gray-400 group-hover/link:text-white transition-colors truncate max-w-[120px]">
                                                {link.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[7px] font-mono px-1 py-0.5 rounded bg-trdg-green/5 text-trdg-green/40 group-hover/link:text-trdg-green transition-colors border border-trdg-green/10">
                                                VERIFIED
                                            </span>
                                            <ExternalLink size={10} className="text-gray-800 group-hover/link:text-trdg-cyan transition-colors" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical HUD element */}
                <div className="mt-20 p-6 rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-trdg-cyan/5 to-transparent pointer-events-none" />
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-trdg-cyan/10 flex items-center justify-center border border-trdg-cyan/30">
                            <BarChart3 className="text-trdg-cyan" size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase">Registry Connectivity</div>
                            <div className="text-white font-bold font-orbitron">32+ VERIFIED DATA NODES</div>
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 max-w-md relative z-10 text-center md:text-right">
                        SYSTEM_LOG: ALL NODES SYNCRONIZED. DATA FEED INTEGRITY VALIDATED ACROSS INSTITUTIONAL PARTNERS.
                    </div>
                </div>
            </div>
        </section>
    )
}
