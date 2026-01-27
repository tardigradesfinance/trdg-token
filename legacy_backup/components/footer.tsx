"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Instagram, Facebook, Github, Youtube, FileText, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/TRDGtoken",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      href: "https://t.me/TardigradesOfficial",
    },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/trdgtoken/" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/TRDGtoken" },
    { name: "Github", icon: <Github className="h-5 w-5" />, href: "https://github.com/tardigradesfinance" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@TRDGLive" },
  ]

  return (
    <footer className="relative py-12 mt-12">
      {/* Subtle separator line instead of border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image src="/images/trdg-logo.png" alt="TRDG Logo" fill className="object-contain" />
            </div>
            <span className="font-space font-bold text-xl sm:text-2xl text-white">TRDG</span>
          </Link>

          <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6 px-4">
            Discover the universe's most formidable creature and join the Extremophiles community.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-800/50 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10">
            <div className="relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <Button
                className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 flex items-center gap-2 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf",
                    "_blank",
                  )
                }
              >
                <FileText className="h-4 w-4" />
                Whitepaper
              </Button>
            </div>

            <div className="relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <Button
                className="relative bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 flex items-center gap-2 w-full sm:w-auto"
                onClick={() => window.open("https://t.me/TardigradesAnnouncements", "_blank")}
              >
                <Bell className="h-4 w-4" />
                Announcements Channel
              </Button>
            </div>
          </div>

          <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-3 sm:p-4 max-w-2xl mx-auto mb-6 sm:mb-8">
            <p className="text-amber-400 text-xs sm:text-sm italic">
              🔬 <strong>EXTREMOPHILE DISCLAIMER:</strong> TRDG and NEMA are experimental memecoins that, like real
              tardigrades, might survive in extreme conditions or get absolutely rekt. This is not financial advice.
              DYOR before aping in. Remember, even tardigrades can't survive everything. But they'll probably outlive
              your portfolio. 🧸
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} TRDG Finance. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="ml-4 sm:ml-6 w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Scroll to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
