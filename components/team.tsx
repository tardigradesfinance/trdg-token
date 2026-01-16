"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Twitter, Globe, Github } from "lucide-react"

export function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const teamMembers = [
    {
      name: "Alex Tardigrade",
      role: "Founder & Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Blockchain enthusiast with a passion for resilient systems and microscopic creatures.",
      socials: [
        { icon: <Twitter className="h-4 w-4" />, href: "#" },
        { icon: <Github className="h-4 w-4" />, href: "#" },
        { icon: <Globe className="h-4 w-4" />, href: "#" },
      ],
    },
    {
      name: "Sam Nematode",
      role: "Marketing Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Digital marketing expert specializing in crypto projects and community building.",
      socials: [
        { icon: <Twitter className="h-4 w-4" />, href: "#" },
        { icon: <Github className="h-4 w-4" />, href: "#" },
        { icon: <Globe className="h-4 w-4" />, href: "#" },
      ],
    },
    {
      name: "Jamie Extremophile",
      role: "Community Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Community builder focused on creating engaging experiences for token holders.",
      socials: [
        { icon: <Twitter className="h-4 w-4" />, href: "#" },
        { icon: <Github className="h-4 w-4" />, href: "#" },
        { icon: <Globe className="h-4 w-4" />, href: "#" },
      ],
    },
    {
      name: "Taylor Cryptobiosis",
      role: "Smart Contract Developer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Solidity expert with experience in DeFi protocols and token economics.",
      socials: [
        { icon: <Twitter className="h-4 w-4" />, href: "#" },
        { icon: <Github className="h-4 w-4" />, href: "#" },
        { icon: <Globe className="h-4 w-4" />, href: "#" },
      ],
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* No gradient background */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Meet the Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The dedicated individuals behind TRDG and NEMA working to build a resilient ecosystem.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} variants={itemVariants}>
                <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-3 justify-center">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
