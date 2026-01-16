"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Github, Youtube, Bell } from "lucide-react"

export function Community() {
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

  const socialLinks = [
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "bg-black",
      href: "https://x.com/TRDGtoken",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "bg-blue-400",
      href: "https://t.me/TardigradesOfficial",
    },
    {
      name: "Announcements",
      icon: <Bell className="h-6 w-6" />,
      color: "bg-blue-600",
      href: "https://t.me/TardigradesAnnouncements",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-pink-500",
      href: "https://www.instagram.com/trdgtoken/",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      color: "bg-blue-600",
      href: "https://www.facebook.com/TRDGtoken",
    },
    {
      name: "Github",
      icon: <Github className="h-6 w-6" />,
      color: "bg-gray-700",
      href: "https://github.com/tardigradesfinance",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      color: "bg-red-600",
      href: "https://www.youtube.com/@TRDGLive",
    },
  ]

  return (
    <section id="community" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* No background overlay */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Join the Extremophiles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our community of resilient explorers is united by a passion for innovation and the ability to thrive in
              extreme conditions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
            <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Community Governance</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                As an Extremophile, you'll have a voice in the future of TRDG and NEMA through our community governance
                system.
              </p>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 w-full sm:w-auto"
                disabled
              >
                Coming Soon
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Connect With Us</h3>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/40 border border-purple-500/20 rounded-full flex items-center justify-center hover:border-purple-500/50 transition-colors">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${social.color} rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110`}
                    >
                      {social.icon}
                    </div>
                  </div>
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
