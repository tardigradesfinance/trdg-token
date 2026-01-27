"use client"

import { Flame, Gift, ArrowDownUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Tokenomics
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              TRDG's deflationary mechanism ensures long-term value and rewards loyal holders through a balanced tax
              system.
            </p>
          </div>

          <div className="mb-16">
            <div className="relative h-6 bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
              <div className="absolute top-0 left-1/2 h-full w-1/2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>2.5% to Holders</span>
              <span>2.5% Burned</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Card className="bg-transparent backdrop-blur-sm border-purple-500/20 overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full" />
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <ArrowDownUp className="text-purple-400 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron mb-2">5% Transaction Tax</h3>
                  <p className="text-gray-400">
                    Every transaction (buy, sell, transfer, or contract interaction) incurs a 5% tax, creating a
                    sustainable tokenomic model.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-transparent backdrop-blur-sm border-purple-500/20 overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full" />
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Gift className="text-blue-400 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron mb-2">2.5% to Holders</h3>
                  <p className="text-gray-400">
                    Half of the tax is automatically distributed to all TRDG holders, rewarding long-term investors and
                    fostering community unity.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-transparent backdrop-blur-sm border-purple-500/20 overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full" />
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Flame className="text-green-400 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron mb-2">2.5% Burned</h3>
                  <p className="text-gray-400">
                    The remaining tax is permanently removed from circulation, decreasing supply over time and
                    potentially increasing scarcity and value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
