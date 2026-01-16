"use client"

import { useEffect, useState } from "react"

interface ScrollingGradientProps {
  colorScheme?: "trdg" | "nema"
}

export function ScrollingGradient({ colorScheme = "trdg" }: ScrollingGradientProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = Math.min(position / maxScroll, 1)
      setScrollPosition(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // TRDG color scheme: enhanced with more black and richer gradient transitions
  const trdgGradientStyle = {
    background: `linear-gradient(135deg, 
   rgba(0, 0, 0, ${0.95 - scrollPosition * 0.05}) 0%, 
   rgba(26, 6, 61, ${0.98 - scrollPosition * 0.05}) 20%, 
   rgba(5, 13, 40, ${0.95 - scrollPosition * 0.05}) ${30 + scrollPosition * 40}%, 
   rgba(31, 7, 65, ${0.98 - scrollPosition * 0.05}) 80%,
   rgba(0, 0, 0, ${0.95 - scrollPosition * 0.05}) 100%)`,
  }

  // NEMA color scheme: dark green -> emerald -> deep green with much darker base
  const nemaGradientStyle = {
    background: `linear-gradient(135deg, 
   rgba(1, 25, 14, ${0.98 - scrollPosition * 0.05}) 0%, 
   rgba(1, 44, 33, ${0.95 - scrollPosition * 0.05}) ${30 + scrollPosition * 40}%, 
   rgba(1, 36, 28, ${0.98 - scrollPosition * 0.05}) 100%)`,
  }

  return (
    <div
      className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out"
      style={colorScheme === "trdg" ? trdgGradientStyle : nemaGradientStyle}
    >
      {/* No black overlay - let the gradient colors be the dark background */}
    </div>
  )
}
