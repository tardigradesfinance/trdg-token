'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ProtocolHub } from "@/components/sections/ProtocolHub"
import { StarField } from "@/components/ui/StarField"

export default function HubPage() {
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
                        PROTOCOL <span className="text-trdg-cyan">HUB</span>
                    </h1>
                    <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                        Advanced Resource Matrix & Verification Directory
                    </p>
                </div>
                <ProtocolHub />
            </div>
            <Footer />
        </main>
    )
}
