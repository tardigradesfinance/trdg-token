import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Mission } from "@/components/sections/Mission"
import { Resilience } from "@/components/sections/Resilience"
import { Tokenomics } from "@/components/sections/Tokenomics"
import { LiveCharts } from "@/components/sections/LiveCharts"
import { HowToBuy } from "@/components/sections/HowToBuy"
import { Roadmap } from "@/components/sections/Roadmap"
import { Community } from "@/components/sections/Community"
import { MicroscopicAnalysis } from "@/components/sections/MicroscopicAnalysis"
import { SocialNexus } from "@/components/sections/SocialNexus"
import { ArchiveLogs } from "@/components/sections/ArchiveLogs"
import { BioScanner } from "@/components/sections/BioScanner"
import { LegacyVision } from "@/components/sections/LegacyVision"
import { StickerMarquee } from "@/components/sections/StickerMarquee"
import { VitalSigns } from "@/components/sections/VitalSigns"
import { SurvivalTimeline } from "@/components/sections/SurvivalTimeline"
import { SpeciesComparison } from "@/components/sections/SpeciesComparison"
import { EmergencyProtocols } from "@/components/sections/EmergencyProtocols"
import { HolderTestimonials } from "@/components/sections/HolderTestimonials"
import { AchievementBadges } from "@/components/sections/AchievementBadges"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ParticleField } from "@/components/ui/ParticleField"
import { FloatingOrbs } from "@/components/ui/FloatingOrbs"

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

