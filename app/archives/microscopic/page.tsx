'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { GenesisNFTArchives } from "@/components/sections/GenesisNFTArchives"
import { StarField } from "@/components/ui/StarField"

export default function MicroscopicPage() {
    return (
        <main className="min-h-screen bg-black text-white relative">
            <div className="fixed inset-0 z-0">
                <StarField />
            </div>
            <CustomCursor />
            <Header />
            <div className="pt-28 pb-16 relative z-10">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h1 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                        GENESIS <span className="text-trdg-cyan">ARCHIVES</span>
                    </h1>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        The Birth of the Unkillable Specimen
                    </p>
                </div>
                <GenesisNFTArchives />
            </div>
            <Footer />
        </main>
    )
}
