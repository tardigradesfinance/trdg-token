"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Shield,
  CheckCircle,
  Lock,
  Flame,
  FishIcon as Whale,
  Ban,
  Code,
  Diamond,
  Eye,
  Crown,
  Droplet,
} from "lucide-react"

export function Audit() {
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

  const safetyFeatures = [
    { icon: <Flame className="h-5 w-5" />, text: "Liquidity Locked (burned) forever" },
    { icon: <Lock className="h-5 w-5" />, text: "Ownership renounced" },
    { icon: <Whale className="h-5 w-5" />, text: "No repercussions of becoming a Whale" },
    { icon: <Ban className="h-5 w-5" />, text: "Can't Blacklist" },
    { icon: <Code className="h-5 w-5" />, text: "Contract cannot be altered" },
    { icon: <Diamond className="h-5 w-5" />, text: "Super strong foundation" },
    { icon: <Eye className="h-5 w-5" />, text: "No Migration" },
    { icon: <Crown className="h-5 w-5" />, text: "Tokens SAFU" },
    { icon: <Droplet className="h-5 w-5" />, text: "Tardigrades are cool af" },
  ]

  return (
    <section id="audit" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* No gradient background */}
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Security Audit
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              TRDG is committed to security and transparency. Our smart contracts have been thoroughly audited by
              security professionals.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-transparent backdrop-blur-sm border border-green-500/20 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                  <video
                    src="/images/trdg-logo.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="text-green-400 h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">Verified & Secure</h3>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">Smart contract security audit completed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">No critical vulnerabilities found</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">Tokenomics verified by security experts</span>
                    </li>
                  </ul>

                  <div className="relative inline-block w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-500 rounded-lg opacity-75 blur-sm animate-pulse"></div>
                    <Button
                      className="relative bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 w-full sm:w-auto flex items-center gap-2"
                      onClick={() =>
                        window.open(
                          "/images/trdg-logo.png",
                          "_blank",
                        )
                      }
                    >
                      <FileText className="h-4 w-4" />
                      View Audit Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Features Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 md:p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-orbitron mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Safety is a #1 Priority with $TRDG
                  </span>
                </h3>

                <div className="max-w-3xl mx-auto mb-8">
                  <div className="relative py-6 px-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-center mb-4">
                      $TRDG has a permanent 5% tax on every transaction
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Flame className="h-8 w-8 text-purple-300" />
                        </div>
                        <h5 className="font-bold mb-2">2.5% Burn & 2.5% Reward</h5>
                        <p className="text-sm text-gray-300">
                          Every transaction contributes to an ever-growing burn wallet while rewarding all holders.
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Lock className="h-8 w-8 text-purple-300" />
                        </div>
                        <h5 className="font-bold mb-2">LP Tokens Burned</h5>
                        <p className="text-sm text-gray-300">
                          Liquidity is locked forever, ensuring stability and long-term trading capability.
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Shield className="h-8 w-8 text-purple-300" />
                        </div>
                        <h5 className="font-bold mb-2">Contract Renounced</h5>
                        <p className="text-sm text-gray-300">
                          Ownership has been renounced, making the contract immutable and trustworthy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-black/30 p-4 rounded-lg border border-purple-500/10"
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-200">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
