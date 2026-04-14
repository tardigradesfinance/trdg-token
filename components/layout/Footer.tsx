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
                            <a href="mailto:admin@trdgtoken.com" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all" title="Email Us">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
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
                            <li><Link href="/merch" className="hover:text-trdg-cyan transition-colors font-bold text-trdg-cyan">Official Merch</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Market Intelligence */}
                    <div>
                        <h4 className="text-white font-bold font-orbitron mb-6 text-lg">Intelligence</h4>
                        <ul className="space-y-3 text-xs text-gray-500 font-mono">
                            <li><a href="https://www.forbes.com/digital-assets/assets/trdgtoken-trdg/" target="_blank" className="hover:text-trdg-cyan transition-colors">Forbes Digital Assets</a></li>
                            <li><a href="https://app.tokenmetrics.com/en/tardigrades-finance" target="_blank" className="hover:text-trdg-cyan transition-colors">Token Metrics</a></li>
                            <li><a href="https://dappradar.com/dapp/trdg-track" target="_blank" className="hover:text-trdg-cyan transition-colors">DappRadar Hub</a></li>
                            <li><a href="https://stocktwits.com/symbol/TRDG.X" target="_blank" className="hover:text-trdg-cyan transition-colors">Stocktwits</a></li>
                            <li><a href="https://dexcheck.ai/app/bsc/chart/0x489e73fa82e30d27778c1b7b7e4e3503dcfd762a?t=1761635451773" target="_blank" className="hover:text-trdg-cyan transition-colors">DexCheck AI</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Global Connectivity */}
                    <div>
                        <h4 className="text-white font-bold font-orbitron mb-6 text-lg">Connectivity</h4>
                        <ul className="space-y-3 text-xs text-gray-500 font-mono">
                            <li><a href="https://www.mexc.com/price/trdgtoken/info" target="_blank" className="hover:text-yellow-500 transition-colors">MEXC price</a></li>
                            <li><a href="https://www.xt.com/en/price/trdg" target="_blank" className="hover:text-trdg-cyan transition-colors">XT Global</a></li>
                            <li><a href="https://coinranking.com/coin/j2X6TFQ-8+trdgtokeneth-trdg" target="_blank" className="hover:text-trdg-cyan transition-colors">Coinranking</a></li>
                            <li><a href="https://dropstab.com/coins/tardigrades-finance" target="_blank" className="hover:text-trdg-cyan transition-colors">DropsTab</a></li>
                            <li><a href="https://www.coinlore.com/coin/tardigrades-finance/exchanges" target="_blank" className="hover:text-trdg-cyan transition-colors">Coinlore List</a></li>
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
