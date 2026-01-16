"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ zIndex: 0 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{ zIndex: 0 }}
      />

      {/* Subtle hexagon pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/hexagon-pattern.svg')] bg-repeat opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative h-16 w-16 md:h-24 md:w-24 z-10">
              <Image
                src="/images/trdg-logo.png"
                alt="TRDG Logo"
                width={96}
                height={96}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="font-orbitron font-bold text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              TRDG
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 max-w-4xl">
            Discover the Universe's Most{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
              Formidable Creature
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
            Inspired by the resilience of Tardigrades, TRDG is a deflationary token designed to survive extreme market
            conditions.
          </p>

          {/* TRDG and NEMA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <div className="relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <Button
                className="relative bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-base py-4 px-6 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5&use=V2",
                    "_blank",
                  )
                }
              >
                $TRDG (ETH)
              </Button>
            </div>
            <div className="relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <Button
                className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-base py-4 px-6 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
                    "_blank",
                  )
                }
              >
                $TRDG (BSC)
              </Button>
            </div>
          </div>

          {/* NEMA Button - Changed to "Explore $NEMA" */}
          <div className="mt-4 relative inline-block w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
            <Link href="/nematodes">
              <Button className="relative bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-base py-4 px-6 w-full sm:w-auto">
                Explore $NEMA
              </Button>
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-3xl font-bold text-purple-400">5%</span>
              <span className="text-xs sm:text-base text-gray-400">Tax</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-3xl font-bold text-blue-400">2.5%</span>
              <span className="text-xs sm:text-base text-gray-400">Rewards</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-3xl font-bold text-green-400">2.5%</span>
              <span className="text-xs sm:text-base text-gray-400">Burned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
