"use client"
import Image from "next/image"
import Link from "next/link"

export default function NemaWhy() {
  return (
    <section
      id="why"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Content */}
      <div className="z-10 container mx-auto px-4 text-center">
        <h2 className="mb-10 font-orbitron text-3xl font-bold text-white md:text-4xl lg:text-5xl">Why Be TRDG Food?</h2>

        <div className="relative h-32 w-32 mx-auto mb-10">
          <Image src="/images/nema-logo.png" alt="NEMA Logo" fill className="object-contain" priority />
          <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl -z-10"></div>
          <div className="absolute -inset-4 rounded-full bg-green-500/10 blur-2xl -z-20 animate-pulse"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-transparent backdrop-blur-sm rounded-xl p-8 border border-green-500/30 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl blur-sm -z-10"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-md -z-20 animate-pulse"></div>

          <div className="mb-6 space-y-6">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-gray-200">
                <span className="font-bold text-green-400">Feed the Tardigrade:</span> Your NEMA trades help TRDG grow
                stronger by providing nutritious buybacks and burns.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-gray-200">
                <span className="font-bold text-green-400">Earn BNB Rewards:</span> Even as NEMA gets consumed, holders
                receive BNB rewards automatically.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-gray-200">
                <span className="font-bold text-green-400">Join the Food Chain:</span> Become part of our microscopic
                ecosystem where both predator and prey thrive together.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed text-gray-200">
                <span className="font-bold text-green-400">Cosmic Nutrition:</span> As TRDG grows from consuming NEMA,
                the entire ecosystem becomes more valuable.
              </p>
            </div>
          </div>

          <div className="relative inline-block">
            <div className="absolute -inset-0.5 bg-green-500 rounded-full opacity-75 blur-sm animate-pulse"></div>
            <Link
              href="https://pancakeswap.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative transform rounded-full bg-green-500 px-8 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.7)]"
            >
              Power the TRDG Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
