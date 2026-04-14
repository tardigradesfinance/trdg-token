'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { EmergencyProtocols } from "@/components/sections/EmergencyProtocols"
import { StandardHero } from "@/components/layout/StandardHero"

export default function SecurityPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>SECURITY <span className="text-trdg-cyan">PROTOCOLS</span></>}
                subtitle="Fail-safe architecture, smart contract audits, and defense mechanisms"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <EmergencyProtocols showTitle={false} />
                </div>
            </div>
            <Footer />
        </main>
    )
}
