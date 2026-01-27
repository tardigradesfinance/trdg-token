import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-trdg-cyan selection:text-black">
            <CustomCursor />
            <Header />

            <div className="container mx-auto px-4 py-32 md:py-48 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-12 text-center">
                    TERMS OF <span className="text-trdg-cyan">SERVICE</span>
                </h1>

                <div className="prose prose-invert prose-blue max-w-none space-y-8 font-light text-gray-300">
                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing the $TRDG website and interacting with the $TRDG smart contracts, you agree to these terms. $TRDG is an experimental community reward token. Participation is entirely voluntary and at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">2. Nature of $TRDG</h2>
                        <p>
                            $TRDG is not a security, investment product, or legal currency. It is a decentralized utility and reward token designed for community engagement and resilience experiments. There is no guarantee of value, liquidity, or future development.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">3. Risk Disclosure</h2>
                        <p>
                            The cryptocurrency market is extremely volatile. You may lose 100% of your value. The 5% transaction tax (reflections and burns) is a hardcoded mechanism of the smart contract and cannot be reversed. Always perform orbital reconnaissance (DYOR) before engaging.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-orbitron text-white mt-8 mb-4">4. Limitation of Liability</h2>
                        <p>
                            The $TRDG founders, community members, and volunteers are not liable for any financial losses, smart contract exploits, or third-party service failures. You are responsible for your own keys and security.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}
