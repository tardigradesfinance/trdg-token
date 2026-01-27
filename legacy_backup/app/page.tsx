import { Hero } from "@/components/hero"
import { Tokenomics } from "@/components/tokenomics"
import { NemaToken } from "@/components/nema-token"
import { Ecology } from "@/components/ecology"
import { Utility } from "@/components/utility"
import { Community } from "@/components/community"
import { Roadmap } from "@/components/roadmap"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { TrdgStats } from "@/components/trdg-stats"
import { Audit } from "@/components/audit"
import { ScrollingGradient } from "@/components/scrolling-gradient"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Single scrolling gradient background */}
      <ScrollingGradient colorScheme="trdg" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Tokenomics />
        <NemaToken />
        <Ecology />
        <TrdgStats />
        <Audit />
        <Utility />
        <Community />
        <Roadmap />
        <Partners />
        <Footer />
      </div>
    </main>
  )
}
