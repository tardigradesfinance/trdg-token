"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Roadmap() {
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

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: [
        "TRDG Token Launch on BSC and ETH",
        "Community Building",
        "Initial Marketing Campaign",
        "Listing on CoinGecko and CoinMarketCap",
      ],
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      status: "in-progress",
      items: ["NEMA Token Launch", "Website Redesign", "Expanded Social Media Presence", "Strategic Partnerships"],
    },
    {
      phase: "Phase 3",
      title: "Utility Development",
      status: "upcoming",
      items: [
        "NFT Marketplace Beta",
        "Staking Platform Launch",
        "Educational Hub Development",
        "Gaming Concept Development",
      ],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Growth",
      status: "upcoming",
      items: [
        "Cross-Chain Integration Expansion",
        "Full Gaming Platform Launch",
        "Major Exchange Listings",
        "Expanded Utility Offerings",
      ],
    },
  ]

  return (
    <section id="roadmap" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* No gradient background */}
      <div className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Roadmap
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our journey to build a resilient ecosystem inspired by nature's toughest creatures.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block"></div>

            <div className="space-y-8 sm:space-y-12 relative">
              {roadmapItems.map((item, index) => (
                <div key={item.phase} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full hidden md:block">
                      <div
                        className={`w-full h-full rounded-full ${
                          item.status === "completed"
                            ? "bg-green-500"
                            : item.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-purple-500"
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-0 rounded-full ${
                          item.status === "completed"
                            ? "bg-green-500"
                            : item.status === "in-progress"
                              ? "bg-blue-500"
                              : "bg-purple-500"
                        } animate-ping opacity-75`}
                        style={{ animationDuration: "3s" }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : item.status === "in-progress"
                                  ? "bg-blue-500"
                                  : "bg-purple-500"
                            }`}
                          ></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-400">{item.phase}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ml-auto ${
                              item.status === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : item.status === "in-progress"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-purple-500/20 text-purple-400"
                            }`}
                          >
                            {item.status === "completed"
                              ? "Completed"
                              : item.status === "in-progress"
                                ? "In Progress"
                                : "Upcoming"}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                        <ul className="space-y-1 sm:space-y-2">
                          {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                              <span className="text-purple-400">•</span>
                              <span className="text-gray-300">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
