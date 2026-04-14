'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { LiveCharts } from "@/components/sections/LiveCharts"
import { StandardHero } from "@/components/layout/StandardHero"

export default function ChartsPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>MARKET <span className="text-trdg-cyan">SURVEILLANCE</span></>}
                subtitle="Real-time orbital trajectory & liquidity flow data streams"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <LiveCharts showTitle={false} />
                </div>
            </div>
            <Footer />
        </main>
    )
}
