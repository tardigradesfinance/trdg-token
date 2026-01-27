"use client"

import Image from "next/image"

export function Ecology() {
  return (
    <section id="ecology" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Ecological Interactions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the fascinating relationship between Tardigrades and Nematodes in nature, and how it inspires our
              token ecosystem.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Nature's Balance</h3>
                <p className="text-gray-300 mb-6">
                  In soil ecosystems, Tardigrades are natural predators of Nematodes, creating a balanced relationship
                  that regulates populations and maintains ecological health.
                </p>
                <p className="text-gray-300 mb-6">
                  This predatory relationship is essential for soil food webs, as Tardigrades help control Nematode
                  populations while gaining sustenance for their own survival.
                </p>
                <div className="p-4 bg-blue-900/10 backdrop-blur-sm border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-300 italic">
                    "Tardigrades are microscopic predators that feed on rotifers, nematodes, and other small
                    invertebrates, playing a crucial role in soil microecosystems."
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <video
                    src="/images/trdg-logo.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption box - positioned below the video */}
                <div className="absolute -bottom-16 right-1 max-w-[180px] bg-black/80 rounded-lg p-3 border border-purple-500/20 text-center">
                  <div className="text-sm">
                    <span className="text-purple-400 font-bold">Tardigrades</span> feed on{" "}
                    <span className="text-blue-400 font-bold">Nematodes</span>, creating a natural balance in soil
                    ecosystems.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Token Ecosystem Parallel</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full" />
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 bg-white/10 rounded-full p-2 shadow-lg">
                      <Image
                        src="/images/trdg-logo.png"
                        alt="TRDG Logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold">TRDG Token</h4>
                  </div>
                  <p className="text-gray-400">
                    Like Tardigrades in nature, TRDG forms the foundation of our ecosystem, benefiting from the support
                    and interaction with NEMA tokens.
                  </p>
                </div>

                <div className="bg-transparent backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-3 w-20 h-20 bg-white/5 rounded-bl-full" />
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 bg-white/10 rounded-full p-2 shadow-lg">
                      <Image
                        src="/images/nema-logo.png"
                        alt="NEMA Logo"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold">NEMA Token</h4>
                  </div>
                  <p className="text-gray-400">
                    NEMA tokens, like Nematodes in soil, provide essential support to the ecosystem, fueling TRDG's
                    growth through buy-back and burn mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
