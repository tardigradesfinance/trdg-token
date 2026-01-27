"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function NemaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/trdg-logo.png" alt="TRDG Logo" width={40} height={40} className="mr-2" />
          <span className="text-white font-bold text-xl">TRDG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to TRDG
          </Link>
          <Link href="/nematodes" className="text-green-400 font-bold">
            Nematodes
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to TRDG
            </Link>
            <Link
              href="/nematodes"
              className="text-green-400 font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nematodes
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
