'use client'

import dynamic from 'next/dynamic'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ParticleField } from "@/components/ui/ParticleField"
import { FloatingOrbs } from "@/components/ui/FloatingOrbs"
import { SEOBlock } from "@/components/ui/SEOBlock"

// Loading placeholder
const SectionLoader = () => <div className="min-h-[300px] w-full bg-black/50 animate-pulse flex items-center justify-center text-gray-800 font-mono text-[10px]">INITIALIZING_PROTOCOL...</div>

// Dynamic imports for performance (Crucial only sections)
const SystemDiagnostics = dynamic(() => import("@/components/sections/SystemDiagnostics").then(mod => mod.SystemDiagnostics), { ssr: false, loading: SectionLoader })
const ProtocolHub = dynamic(() => import("@/components/sections/ProtocolHub").then(mod => mod.ProtocolHub), { ssr: false, loading: SectionLoader })
const SocialNexus = dynamic(() => import("@/components/sections/SocialNexus").then(mod => mod.SocialNexus), { ssr: false, loading: SectionLoader })
const Mission = dynamic(() => import("@/components/sections/Mission").then(mod => mod.Mission), { ssr: false, loading: SectionLoader })
const GenesisNFTArchives = dynamic(() => import("@/components/sections/GenesisNFTArchives").then(mod => mod.GenesisNFTArchives), { ssr: false, loading: SectionLoader })
const Tokenomics = dynamic(() => import("@/components/sections/Tokenomics").then(mod => mod.Tokenomics), { ssr: false, loading: SectionLoader })
const HowToBuy = dynamic(() => import("@/components/sections/HowToBuy").then(mod => mod.HowToBuy), { ssr: false, loading: SectionLoader })
const Roadmap = dynamic(() => import("@/components/sections/Roadmap").then(mod => mod.Roadmap), { ssr: false, loading: SectionLoader })
const HolderTestimonials = dynamic(() => import("@/components/sections/HolderTestimonials").then(mod => mod.HolderTestimonials), { ssr: false, loading: SectionLoader })
const StickerMarquee = dynamic(() => import("@/components/sections/StickerMarquee").then(mod => mod.StickerMarquee), { ssr: false, loading: SectionLoader })
const Community = dynamic(() => import("@/components/sections/Community").then(mod => mod.Community), { ssr: false, loading: SectionLoader })
const LinkEcosystem = dynamic(() => import("@/components/sections/LinkEcosystem").then(mod => mod.LinkEcosystem), { ssr: false, loading: SectionLoader })

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-trdg-cyan selection:text-black relative">
            <ParticleField />
            <CustomCursor />
            <Header />
            <Hero />

            <div className="relative z-10 bg-black">
                {/* Vital Information Strip */}
                <SystemDiagnostics />

                {/* Core Narrative */}
                <Mission />
                <GenesisNFTArchives />
                <SocialNexus />
                <LinkEcosystem />

                {/* Economics & Guidance */}
                <Tokenomics />
                <HowToBuy />

                {/* Trust & Proof */}
                <HolderTestimonials />
                <StickerMarquee />

                {/* Future & Connectivity */}
                <Roadmap />
                <ProtocolHub />
                <Community />
            </div>

            <Footer />
            <SEOBlock />
        </main>
    )
}
