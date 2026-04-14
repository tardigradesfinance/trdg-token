'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { StandardHero } from "@/components/layout/StandardHero"

export default function TermsOfService() {
    return (
        <main className="min-h-screen text-white selection:bg-trdg-cyan selection:text-black relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>TERMS OF <span className="text-trdg-cyan">SERVICE</span></>}
                subtitle="Legal framework and operational boundaries for the $TRDG ecosystem"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="prose prose-invert prose-blue max-w-none space-y-8 font-light text-gray-400 font-mono text-sm leading-relaxed">
                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">1. Acceptance of Terms</h2>
                        <p>
                            By accessing the $TRDG website and interacting with the $TRDG smart contracts, you agree to these terms. $TRDG is an experimental community reward token. Participation is entirely voluntary and at your own risk.
                        </p>
                    </section>

                    <section className="p-8">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">2. Nature of $TRDG</h2>
                        <p>
                            $TRDG is not a security, investment product, or legal currency. It is a decentralized utility and reward token designed for community engagement and resilience experiments. There is no guarantee of value, liquidity, or future development.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">3. Risk Disclosure</h2>
                        <p>
                            The cryptocurrency market is extremely volatile. You may lose 100% of your value. The 5% transaction tax (reflections and burns) is a hardcoded mechanism of the smart contract and cannot be reversed. Always perform orbital reconnaissance (DYOR) before engaging.
                        </p>
                    </section>

                    <section className="p-8">
                        <h2 className="text-xl font-orbitron text-white mt-0 mb-6 uppercase tracking-wider">4. Limitation of Liability</h2>
                        <p>
                            The $TRDG founders, community members, and volunteers are not liable for any financial losses, smart contract exploits, or third-party service failures. You are responsible for your own keys and security.
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
