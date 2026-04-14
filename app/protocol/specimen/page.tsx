'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { SpeciesComparison } from "@/components/sections/SpeciesComparison"
import { Resilience } from "@/components/sections/Resilience"
import { StandardHero } from "@/components/layout/StandardHero"

export default function SpecimenPage() {
    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>SPECIMEN <span className="text-trdg-cyan">ANALYSIS</span></>}
                subtitle="Biological data and resilience metrics of the unkillable organism"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24 space-y-0">
                    <SpeciesComparison showTitle={false} />
                    <Resilience showTitle={false} />
                </div>
            </div>
            <Footer />
        </main>
    )
}
