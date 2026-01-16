"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function NemaHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="z-10 flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        {/* NEMA Logo with worm animation */}
        <div className="relative mb-6">
          <motion.div
            className="relative h-96 w-96"
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
            <Image src="/images/nema-logo.png" alt="NEMA Logo" fill className="object-contain" priority />
          </motion.div>

          {/* Enhanced glowing effects */}
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
        </div>

        <h1 className="mb-6 font-orbitron text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] md:text-6xl lg:text-7xl">
          Nematodes: TRDG&apos;s Favorite Snack!
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white md:text-xl lg:text-2xl">
          Meet NEMA, the token that feeds and powers TRDG's growth.
        </p>

        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-green-500 rounded-full opacity-75 blur-sm animate-pulse"></div>
            <Link
              href="#story"
              className="relative transform rounded-full bg-green-500 px-8 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] flex items-center justify-center"
            >
              Explore NEMA Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
