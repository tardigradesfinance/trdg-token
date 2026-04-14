'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { StandardHero } from "@/components/layout/StandardHero"

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen text-white selection:bg-trdg-cyan selection:text-black relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>PRIVACY <span className="text-trdg-cyan">POLICY</span></>}
                subtitle="Data sovereignty and privacy protocols for the decentralized ecosystem"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="prose prose-invert prose-blue max-w-none space-y-8 font-light text-gray-400 font-mono text-sm leading-relaxed">
                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">1. Data Collection</h2>
                        <p>
                            $TRDG (Tardigrades Finance) operates as a decentralized autonomous experiment. We do not collect, store, or process any personal identification information (PII) on our servers. Your wallet address is the only identifier used on the blockchain, which is public by nature.
                        </p>
                    </section>

                    <section className="p-8">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">2. Cookies & Tracking</h2>
                        <p>
                            This website may use essential technical cookies to ensure the stability of the interface and animations. We do not use third-party tracking pixels or marketing cookies.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">3. Blockchain Data</h2>
                        <p>
                            All transactions involving $TRDG tokens occur on the Binance Smart Chain (BSC) or Ethereum (ETH) networks. These transactions are public, permanent, and outside of our control. By using $TRDG, you acknowledge that your transaction history is visible to anyone with access to a blockchain explorer.
                        </p>
                    </section>

                    <section className="p-8">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">4. Third-Party Links</h2>
                        <p>
                            Our site contains links to external exchanges (PancakeSwap, Uniswap) and social media platforms. We are not responsible for the privacy practices or content of these external entities.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>

            <Footer />
        </main>
    )
}
