'use client'

import dynamic from 'next/dynamic'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ParticleField } from "@/components/ui/ParticleField"
import { FloatingOrbs } from "@/components/ui/FloatingOrbs"

// Loading placeholder
const SectionLoader = () => <div className="min-h-[300px] w-full bg-black/50 animate-pulse flex items-center justify-center text-gray-800 font-mono text-[10px]">INITIALIZING_PROTOCOL...</div>

// Dynamic imports for performance
const VitalSigns = dynamic(() => import("@/components/sections/VitalSigns").then(mod => mod.VitalSigns), { ssr: false, loading: SectionLoader })
const SocialNexus = dynamic(() => import("@/components/sections/SocialNexus").then(mod => mod.SocialNexus), { ssr: false, loading: SectionLoader })
const BioScanner = dynamic(() => import("@/components/sections/BioScanner").then(mod => mod.BioScanner), { ssr: false, loading: SectionLoader })
const Mission = dynamic(() => import("@/components/sections/Mission").then(mod => mod.Mission), { ssr: false, loading: SectionLoader })
const SpeciesComparison = dynamic(() => import("@/components/sections/SpeciesComparison").then(mod => mod.SpeciesComparison), { ssr: false, loading: SectionLoader })
const Resilience = dynamic(() => import("@/components/sections/Resilience").then(mod => mod.Resilience), { ssr: false, loading: SectionLoader })
const ArchiveLogs = dynamic(() => import("@/components/sections/ArchiveLogs").then(mod => mod.ArchiveLogs), { ssr: false, loading: SectionLoader })
const LegacyVision = dynamic(() => import("@/components/sections/LegacyVision").then(mod => mod.LegacyVision), { ssr: false, loading: SectionLoader })
const SurvivalTimeline = dynamic(() => import("@/components/sections/SurvivalTimeline").then(mod => mod.SurvivalTimeline), { ssr: false, loading: SectionLoader })
const EmergencyProtocols = dynamic(() => import("@/components/sections/EmergencyProtocols").then(mod => mod.EmergencyProtocols), { ssr: false, loading: SectionLoader })
const MicroscopicAnalysis = dynamic(() => import("@/components/sections/MicroscopicAnalysis").then(mod => mod.MicroscopicAnalysis), { ssr: false, loading: SectionLoader })
const Tokenomics = dynamic(() => import("@/components/sections/Tokenomics").then(mod => mod.Tokenomics), { ssr: false, loading: SectionLoader })
const HowToBuy = dynamic(() => import("@/components/sections/HowToBuy").then(mod => mod.HowToBuy), { ssr: false, loading: SectionLoader })
const LiveCharts = dynamic(() => import("@/components/sections/LiveCharts").then(mod => mod.LiveCharts), { ssr: false, loading: SectionLoader })
const Roadmap = dynamic(() => import("@/components/sections/Roadmap").then(mod => mod.Roadmap), { ssr: false, loading: SectionLoader })
const AchievementBadges = dynamic(() => import("@/components/sections/AchievementBadges").then(mod => mod.AchievementBadges), { ssr: false, loading: SectionLoader })
const HolderTestimonials = dynamic(() => import("@/components/sections/HolderTestimonials").then(mod => mod.HolderTestimonials), { ssr: false, loading: SectionLoader })
const StickerMarquee = dynamic(() => import("@/components/sections/StickerMarquee").then(mod => mod.StickerMarquee), { ssr: false, loading: SectionLoader })
const Community = dynamic(() => import("@/components/sections/Community").then(mod => mod.Community), { ssr: false, loading: SectionLoader })

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-trdg-cyan selection:text-black relative">
            <ParticleField />
            <FloatingOrbs />
            <CustomCursor />
            <Header />
            <Hero />

            <div className="relative z-10 bg-black">
                <VitalSigns />
                <SocialNexus />
                <BioScanner />
                <Mission />
                <SpeciesComparison />
                <Resilience />
                <ArchiveLogs />
                <LegacyVision />
                <SurvivalTimeline />
                <EmergencyProtocols />
                <MicroscopicAnalysis />
                <Tokenomics />
                <HowToBuy />
                <LiveCharts />
                <Roadmap />
                <AchievementBadges />
                <HolderTestimonials />
                <StickerMarquee />
                <Community />
            </div>

            <Footer />
        </main>
    )
}

