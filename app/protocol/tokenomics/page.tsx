'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { Tokenomics } from "@/components/sections/Tokenomics"
import { StandardHero } from "@/components/layout/StandardHero"

export default function TokenomicsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>ECONOMIC <span className="text-trdg-cyan">STRUCTURE</span></>}
                subtitle="Deflationary mechanics and multi-chain liquidity architecture"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <Tokenomics showTitle={false} />
                </div>
            </div>
            <Footer />
        </main>
    )
}
