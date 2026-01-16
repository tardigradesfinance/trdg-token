"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function NemaHelps() {
  return (
    <section
      id="helps"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="z-10 container mx-auto px-4 text-center">
        <h2 className="mb-10 font-orbitron text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          How NEMA Feeds TRDG
        </h2>

        <div className="relative mb-16 h-64 w-64 md:h-80 md:w-80 mx-auto">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="h-full w-full rounded-full border-4 border-green-500/50 p-4">
              <div className="h-full w-full rounded-full border-4 border-purple-500/50 p-4">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-green-500/30 via-blue-500/20 to-purple-500/30 text-center relative overflow-hidden">
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/40 via-blue-400/40 to-green-400/40 blur-md"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="relative z-10"
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
                      width={240}
                      height={240}
                      className="mx-auto object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Arrows */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 p-3"
            animate={{
              rotate: [0, 360],
              x: ["-50%", "-45%", "-50%", "-55%", "-50%"],
              y: ["-50%", "-45%", "-50%", "-55%", "-50%"],
            }}
            transition={{
              rotate: {
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              x: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              y: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 p-3"
            animate={{
              rotate: [0, 360],
              x: ["50%", "55%", "50%", "45%", "50%"],
              y: ["-50%", "-45%", "-50%", "-55%", "-50%"],
            }}
            transition={{
              rotate: {
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              x: {
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              y: {
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 transform rounded-full bg-green-500 p-3"
            animate={{
              rotate: [0, 360],
              x: ["-50%", "-45%", "-50%", "-55%", "-50%"],
              y: ["50%", "55%", "50%", "45%", "50%"],
            }}
            transition={{
              rotate: {
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              x: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              y: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-transparent p-6 backdrop-blur-sm relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="mb-2 font-orbitron text-xl font-bold text-white">TRDG Feeding</h3>
            <p className="text-gray-300">
              Every NEMA trade allocates 1% to buy back TRDG tokens, feeding the tardigrade and making it stronger.
            </p>
          </div>

          <div className="rounded-xl bg-transparent p-6 backdrop-blur-sm relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 5v14M9 15h12M9 9h12M4 5v14" />
              </svg>
            </div>
            <h3 className="mb-2 font-orbitron text-xl font-bold text-white">TRDG Digestion</h3>
            <p className="text-gray-300">
              Purchased TRDG tokens are burned (digested), reducing supply and making TRDG more valuable.
            </p>
          </div>

          <div className="rounded-xl bg-transparent p-6 backdrop-blur-sm relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="mb-2 font-orbitron text-xl font-bold text-white">Nematode Rewards</h3>
            <p className="text-gray-300">
              NEMA holders receive 1% BNB rewards for participating in the ecosystem's food chain.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-transparent backdrop-blur-sm rounded-xl p-6 border border-green-500/30 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
          <p className="text-xl text-green-400 font-bold">
            NEMA is TRDG's favorite meal! Every NEMA trade feeds TRDG by buying back and burning tokens. As TRDG eats
            NEMA, both tokens thrive in this perfect ecosystem!
          </p>
        </div>
      </div>
    </section>
  )
}
