"use client"

import { Palette, GamepadIcon, BookOpen, Coins, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Utility() {
  return (
    <section id="utility" className="py-12 md:py-20 relative overflow-hidden">
      {/* Keep only the glow effect, remove gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl rounded-full bg-purple-600/5 blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/images/hexagon-pattern.svg')] bg-repeat opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-space mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
                Utility & Use Cases
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Beyond memecoins, TRDG and NEMA offer real-world applications that add value to our ecosystem and
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
            {/* Fugligrades NFT Collection */}
            <div>
              <Card className="bg-transparent backdrop-blur-sm border-purple-500/20 overflow-hidden">
                <CardContent className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Palette className="text-purple-400 h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold">Fugligrades NFT Collection</h3>
                  </div>

                  <div className="mb-3 md:mb-4 bg-black rounded-md overflow-hidden flex justify-center items-center h-[180px] md:h-[220px]">
                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                      <img
                        src="/images/trdg-logo.png"
                        alt="Fugligrades NFT"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                    Exclusive Fugligrades NFT collection featuring unique Tardigrade-inspired digital collectibles with
                    special perks for holders.
                  </p>

                  <ul className="text-xs md:text-sm text-gray-500 space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <li>• Limited edition artwork</li>
                    <li>• Early Investor NFT benefits</li>
                    <li>• Community-exclusive rewards</li>
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-9 md:h-10 border-purple-500/20 hover:bg-purple-900/20 flex items-center justify-center text-sm"
                      onClick={() => window.open("https://www.youtube.com/watch?v=Lmh6hKuy40s", "_blank")}
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Early Investor NFT */}
            <div>
              <Card className="bg-transparent backdrop-blur-sm border-blue-500/20 overflow-hidden relative hover:border-blue-500/50 transition-colors group h-full">
                <CardContent className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Coins className="text-blue-400 h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold">Early Investor NFT</h3>
                  </div>

                  <div className="mb-3 md:mb-4 bg-black rounded-md overflow-hidden flex justify-center items-center h-[180px] md:h-[220px]">
                    <div className="relative w-full h-full p-4 flex items-center justify-center">
                      <img
                        src="/images/trdg-logo.png"
                        alt="Early Investor NFT"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                    Exclusive NFTs for early TRDG supporters, providing enhanced rewards and special access to upcoming
                    features.
                  </p>

                  <ul className="text-xs md:text-sm text-gray-500 space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <li>• Increased staking rewards</li>
                    <li>• Governance voting rights</li>
                    <li>• Priority access to new releases</li>
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-9 md:h-10 border-blue-500/20 hover:bg-blue-900/20 flex items-center justify-center text-sm"
                    >
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Second row with Gaming and Educational cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            {/* Gaming Integration */}
            <div>
              <Card className="bg-transparent backdrop-blur-sm border-green-500/20 overflow-hidden relative hover:border-green-500/50 transition-colors group h-full">
                <CardContent className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <GamepadIcon className="text-green-400 h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold">Gaming Integration</h3>
                  </div>

                  <div className="mb-3 md:mb-4 bg-green-900/20 rounded-md overflow-hidden flex justify-center items-center h-[180px] md:h-[220px]">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                      <GamepadIcon className="text-green-400 h-8 w-8 md:h-12 md:w-12" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                    Play-to-earn games featuring Tardigrades and Nematodes, where in-game assets are linked to our
                    tokens.
                  </p>

                  <ul className="text-xs md:text-sm text-gray-500 space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <li>• Microscopic adventure game</li>
                    <li>• Token rewards for achievements</li>
                    <li>• Community tournaments</li>
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-9 md:h-10 border-green-500/20 hover:bg-green-900/20 flex items-center justify-center text-sm"
                    >
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Educational Hub */}
            <div>
              <Card className="bg-transparent backdrop-blur-sm border-orange-500/20 overflow-hidden relative hover:border-orange-500/50 transition-colors group h-full">
                <CardContent className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="text-orange-400 h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold">Educational Hub</h3>
                  </div>

                  <div className="mb-3 md:mb-4 bg-orange-900/20 rounded-md overflow-hidden flex justify-center items-center h-[180px] md:h-[220px]">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <BookOpen className="text-orange-400 h-8 w-8 md:h-12 md:w-12" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                    Learn about Tardigrades, Nematodes, and soil ecology while earning rewards for educational
                    achievements.
                  </p>

                  <ul className="text-xs md:text-sm text-gray-500 space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <li>• Interactive learning modules</li>
                    <li>• Scientific partnerships</li>
                    <li>• Research funding initiatives</li>
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-9 md:h-10 border-orange-500/20 hover:bg-orange-900/20 flex items-center justify-center text-sm"
                    >
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Theme Song Section - Replace YouTube iframe with a button */}
          <div className="mt-4 md:mt-6">
            <Card className="bg-transparent backdrop-blur-sm border-purple-500/20 overflow-hidden">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Music className="text-purple-400 h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold">TRDG Theme Song</h3>
                </div>

                <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Experience the official TRDG theme song, capturing the resilience and indestructible nature of
                  Tardigrades.
                </p>

                <div className="mb-3 md:mb-4 rounded-md overflow-hidden bg-black/60 p-4 flex items-center justify-center h-[180px]">
                  <div className="text-center">
                    <Music className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">TRDG Official Theme Song</p>
                  </div>
                </div>

                <Button
                  className="w-full h-9 md:h-10 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-sm"
                  onClick={() => window.open("https://www.youtube.com/watch?v=uy_EphWm1CE", "_blank")}
                >
                  Listen on YouTube
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
