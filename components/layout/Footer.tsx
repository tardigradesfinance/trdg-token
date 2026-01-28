import { Send, Twitter, Github, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="relative z-20 bg-space-light border-t border-white/5 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 rounded-full bg-trdg-cyan/10 flex items-center justify-center border border-trdg-cyan/20">
                                <Image
                                    src="/images/trdg-logo.png"
                                    alt="TRDG"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="font-orbitron font-bold text-xl tracking-widest text-white">$TRDG</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light uppercase tracking-tight">
                            The most resilient decentralized experiment in the known universe.
                            Surviving market conditions that crush all others since 2021.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://x.com/TRDGtoken" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all" title="X (Twitter)">
                                <Twitter size={18} />
                            </a>
                            <a href="https://t.me/TardigradesOfficial" target="_blank" className="p-2 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/20 text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-all" title="Telegram">
                                <Send size={18} />
                            </a>
                            <a href="https://github.com/tardigradesfinance" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all" title="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://tardigradesfinance.medium.com/" target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all" title="Medium">
                                <BookOpen size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Specimen Data */}
                    <div>
                        <h4 className="text-white font-bold font-orbitron mb-6 text-lg">Specimen Data</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><span className="text-trdg-cyan">Class:</span> Extremophile</li>
                            <li><span className="text-trdg-cyan">Origin:</span> BSC / ETH</li>
                            <li><span className="text-trdg-cyan">Status:</span> Indestructible</li>
                            <li><span className="text-trdg-cyan">Age:</span> Pre-Cycle (2021)</li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold font-orbitron mb-6 text-lg">Protocol</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf" target="_blank" className="hover:text-trdg-cyan transition-colors">Whitepaper</a></li>
                            <li><a href="https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-trdg-cyan transition-colors">BscScan (BSC)</a></li>
                            <li><a href="https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-trdg-cyan transition-colors">Etherscan (ETH)</a></li>
                            <li><a href="https://github.com/tardigradesfinance" target="_blank" className="hover:text-trdg-cyan transition-colors">GitHub Source</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="text-white font-bold font-orbitron mb-6 text-lg">Acquire & Track</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="https://pancakeswap.finance/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-yellow-400 transition-colors">Buy on BSC (Pancake)</a></li>
                            <li><a href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5" target="_blank" className="hover:text-pink-400 transition-colors">Buy on ETH (Uniswap)</a></li>
                            <li><a href="https://www.coingecko.com/en/coins/trdgtoken" target="_blank" className="hover:text-green-400 transition-colors">CoinGecko</a></li>
                            <li><a href="https://coinmarketcap.com/currencies/tardigrades-finance-bsc/" target="_blank" className="hover:text-blue-400 transition-colors">CoinMarketCap (BSC)</a></li>
                            <li><a href="https://coinmarketcap.com/currencies/tardigrades-finance-eth/" target="_blank" className="hover:text-blue-400 transition-colors">CoinMarketCap (ETH)</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Tardigrades Finance. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500 font-mono">
                        <Link href="/privacy-policy" className="hover:text-trdg-cyan transition-colors">PRIVACY_POLICY</Link>
                        <Link href="/terms-of-service" className="hover:text-trdg-cyan transition-colors">TERMS_OF_SERVICE</Link>
                    </div>
                </div>
                <div className="mt-12 text-center text-[10px] text-gray-500 font-mono max-w-4xl mx-auto border-t border-white/5 pt-8 uppercase tracking-widest leading-relaxed">
                    <p className="mb-4 text-trdg-cyan/60">System Security & Risk Protocol Disclosure</p>
                    $TRDG is a community-driven experiment. Cryptocurrency investments involve extreme volatility and high risk.
                    The $TRDG token mechanics (reflections and burns) are experimental and subject to blockspace conditions.
                    Past performance of $TRDG is not indicative of future galactic travel.
                    Always verify smart contract addresses (0x92a42...68b5) before execution.
                    Perform thorough orbital reconnaissance (DYOR) before committing fuel.
                </div>
            </div>
        </footer>
    )
}
