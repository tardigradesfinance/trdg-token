import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-trdg-cyan selection:text-black">
            <CustomCursor />
            <Header />

            <div className="container mx-auto px-4 py-32 md:py-48 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-12 text-center">
                    PRIVACY <span className="text-trdg-cyan">POLICY</span>
                </h1>

                <div className="prose prose-invert prose-blue max-w-none space-y-8 font-light text-gray-300">
                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">1. Data Collection</h2>
                        <p>
                            $TRDG (Tardigrades Finance) operates as a decentralized autonomous experiment. We do not collect, store, or process any personal identification information (PII) on our servers. Your wallet address is the only identifier used on the blockchain, which is public by nature.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">2. Cookies & Tracking</h2>
                        <p>
                            This website may use essential technical cookies to ensure the stability of the interface and animations. We do not use third-party tracking pixels or marketing cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">3. Blockchain Data</h2>
                        <p>
                            All transactions involving $TRDG tokens occur on the Binance Smart Chain (BSC) or Ethereum (ETH) networks. These transactions are public, permanent, and outside of our control. By using $TRDG, you acknowledge that your transaction history is visible to anyone with access to a blockchain explorer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">4. Third-Party Links</h2>
                        <p>
                            Our site contains links to external exchanges (PancakeSwap, Uniswap) and social media platforms. We are not responsible for the privacy practices or content of these external entities.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}
