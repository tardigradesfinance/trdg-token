"use client"

import Link from "next/link"
import Image from "next/image"

export default function NemaJoin() {
  return (
    <section
      id="community"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="mb-6 font-orbitron text-3xl font-bold text-white md:text-4xl lg:text-5xl">Join the Ecosystem</h2>

        <div className="relative h-32 w-32 mx-auto mb-8">
          <Image src="/images/nema-logo.png" alt="NEMA Logo" fill className="object-contain" priority />
          <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl -z-10"></div>
          <div className="absolute -inset-4 rounded-full bg-green-500/10 blur-2xl -z-20 animate-pulse"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-transparent backdrop-blur-sm rounded-xl p-6 border border-green-500/30 relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-md -z-20 animate-pulse"></div>
          <p className="text-xl leading-relaxed text-gray-200">
            In nature, tardigrades eat nematodes to survive. In our ecosystem, TRDG feeds on NEMA transactions to grow
            stronger. Join this perfect symbiotic relationship where both species thrive!
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute -inset-4 rounded-full bg-green-500/20 blur-xl"></div>
          <div className="relative rounded-full bg-transparent backdrop-blur-sm p-8">
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-400">1%</div>
                <div className="text-gray-300">BNB Rewards</div>
              </div>

              <div className="h-px w-16 bg-green-500/50 md:h-16 md:w-px"></div>

              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-400">1%</div>
                <div className="text-gray-300">Buy Back & Burn $TRDG</div>
              </div>

              <div className="h-px w-16 bg-green-500/50 md:h-16 md:w-px"></div>

              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-400">3%</div>
                <div className="text-gray-300">Marketing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified social links - just X and TG logos */}
        <div className="flex justify-center gap-8 mb-16">
          <Link href="https://t.me/TardigradesOfficial" target="_blank" rel="noopener noreferrer" className="group">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
          </Link>

          <Link href="https://x.com/TRDGtoken" target="_blank" rel="noopener noreferrer" className="group">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="mt-8">
          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-purple-600 rounded-full opacity-75 blur-sm animate-pulse"></div>
            <Link
              href="/"
              className="relative inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to TRDG Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
