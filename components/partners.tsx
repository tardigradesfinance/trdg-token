"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export function Partners() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const partners = [
    {
      name: "PancakeSwap",
      logo: "/images/trdg-logo.png",
      href: "https://pancakeswap.finance/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
      size: "normal",
    },
    {
      name: "Uniswap",
      logo: "/images/trdg-logo.png",
      href: "https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
      size: "normal",
    },
    {
      name: "CoinGecko",
      logo: "/images/trdg-logo.png",
      href: "https://www.coingecko.com/en/coins/trdgtoken",
      size: "normal",
    },
    {
      name: "CoinMarketCap",
      logo: "/images/trdg-logo.png",
      href: "https://coinmarketcap.com/currencies/tardigrades-finance-bsc/",
      size: "large",
    },
    {
      name: "DexTools",
      logo: "/images/trdg-logo.png",
      href: "https://www.dextools.io/app/en/bnb/pair-explorer/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e",
      size: "normal",
    },
    {
      name: "DexScreener",
      logo: "/images/trdg-logo.png",
      href: "https://dexscreener.com/bsc/0xc5c0be18218182bf33e2585a6d9a2e6d7324bc0e",
      size: "normal",
    },
    {
      name: "Ethereum",
      logo: "/images/trdg-logo.png",
      href: "https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
      size: "normal",
    },
    {
      name: "BSCScan",
      logo: "/images/trdg-logo.png",
      href: "https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5",
      size: "normal",
    },
  ]

  return (
    <section id="partners" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* No gradient background */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Partners & Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Working with leading platforms to enhance the TRDG and NEMA ecosystem.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
          >
            {partners.map((partner) => (
              <motion.div key={partner.name} variants={itemVariants}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-3 sm:p-6 h-24 sm:h-32 flex items-center justify-center hover:border-purple-500/50 transition-colors"
                >
                  <div className="relative h-12 sm:h-16 w-full flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={partner.size === "large" ? 240 : 120}
                      height={partner.size === "large" ? 120 : 60}
                      className={`object-contain ${partner.size === "large" ? "max-h-20 scale-150" : "max-h-12 sm:max-h-16"} filter hover:brightness-110 transition-all`}
                    />
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
