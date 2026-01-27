"use client"
import Image from "next/image"

export default function NemaStory() {
  return (
    <section
      id="story"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="z-10 container mx-auto px-4 text-center">
        <h2 className="mb-10 font-orbitron text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          The Food Chain Story
        </h2>

        <div className="relative h-48 w-48 mx-auto mb-10">
          <Image src="/images/nema-logo.png" alt="Nematode illustration" fill className="object-contain" priority />
          <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl -z-10"></div>
          <div className="absolute -inset-4 rounded-full bg-green-500/10 blur-2xl -z-20 animate-pulse"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-transparent backdrop-blur-sm rounded-xl p-8 border border-green-500/30 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-md -z-20 animate-pulse"></div>

          <p className="mb-6 text-lg leading-relaxed text-gray-200">
            In nature, tardigrades are microscopic predators that feast on nematodes. This natural food chain inspired
            our token ecosystem.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-200">
            Just like real nematodes feed tardigrades, the NEMA token was designed to "feed" and strengthen TRDG through
            buybacks and burns.
          </p>
          <p className="text-lg leading-relaxed text-green-400 font-bold">
            When NEMA gets eaten, TRDG grows stronger! It's the perfect predator-prey relationship in token form.
          </p>
        </div>
      </div>
    </section>
  )
}
