"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Repeat, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function NemaToken() {
  return (
    <section id="nema" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute -top-40 -right-40 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl"></div>

      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              Introducing{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                NEMA Token
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-6">
              NEMA (Nematodes) is a complementary token designed to enhance the TRDG ecosystem through a symbiotic
              relationship.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex flex-col items-center gap-3 px-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Repeat className="text-blue-400 h-5 w-5" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1">Buy-Back & Burn Mechanism</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    NEMA's smart contract automatically buys back and burns TRDG tokens, reducing supply and potentially
                    increasing value.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 px-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-green-400 h-5 w-5" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1">BNB Rewards for Holders</h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    NEMA holders receive BNB rewards, creating additional incentives for participation in the ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative inline-block w-full sm:w-auto">
              {/* Animated glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <Link href="/nematodes">
                <Button className="relative bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 group w-full sm:w-auto">
                  Learn More About $NEMA
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Main logo - using fixed dimensions and proper Image component with worm animation */}
              <motion.div
                className="relative h-64 w-64 md:h-80 md:w-80"
                animate={{
                  skew: [0, 2, -2, 0],
                  scaleX: [1, 1.03, 0.97, 1],
                  scaleY: [1, 0.97, 1.03, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/nema-logo.png"
                  alt="NEMA Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Animated glow effect - updated with green colors and proper z-indexing */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500/30 blur-xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full bg-teal-500/20 blur-2xl -z-20"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />

              {/* Orbiting TRDG logo - simplified */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  transformOrigin: "center 200px",
                }}
              >
                <Image src="/images/trdg-logo.png" alt="TRDG Logo" width={64} height={64} className="object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
