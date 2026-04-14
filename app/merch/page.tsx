'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { MerchStore } from "@/components/sections/MerchStore"
import { StandardHero } from "@/components/layout/StandardHero"

export default function MerchPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>ORBITAL <span className="text-trdg-cyan">ARSENAL</span></>}
                subtitle="Official $TRDG tactical gear and physical assets"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <MerchStore />
                </div>
            </div>
            <Footer />
        </main>
    )
}
