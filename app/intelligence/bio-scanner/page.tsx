'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { BioScanner } from "@/components/sections/BioScanner"
import { StarField } from "@/components/ui/StarField"

export default function BioScannerPage() {
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
                        BIO-<span className="text-trdg-cyan">SCANNER</span>
                    </h1>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        Advanced Wallet Diagnostics & Projection Engine
                    </p>
                </div>
                <BioScanner />
            </div>
            <Footer />
        </main>
    )
}
