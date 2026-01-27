"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
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

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or want to join the Extremophiles? Reach out to us!
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Mail className="text-purple-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                      <p className="text-white">contact@trdg.finance</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <MessageSquare className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Community Support</h4>
                      <p className="text-white">Join our Telegram or Discord for direct support</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Follow Us</h4>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="#"
                      className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                    >
                      <span className="sr-only">Telegram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.84 0-1.68-.21-2.52-.629l-2.94 1.47.63-2.52c-.42-.84-.63-1.68-.63-2.52 0-3.36 2.94-6.09 6.3-6.09 3.36 0 6.3 2.73 6.3 6.09 0 3.36-2.94 6.09-6.3 6.09zm3.78-4.2c-.21-.105-1.26-.63-1.47-.7-.21-.07-.42-.105-.63.105-.21.21-.84.7-1.05.84-.21.14-.42.14-.63.07-.21-.105-.84-.42-1.68-.84-1.26-.84-2.1-1.89-2.31-2.1-.21-.21-.21-.42-.07-.63.14-.21.21-.42.42-.63.21-.21.21-.42.42-.63.21-.21.21-.42.07-.63-.07-.21-.63-1.47-.84-2.1-.21-.63-.42-.63-.63-.63h-.63c-.21 0-.42.21-.63.42-.21.21-.84.84-.84 2.1 0 1.26.84 2.52 1.05 2.73.21.21 2.94 4.2 7.14 5.67 4.2 1.47 4.2 1.05 5.04.84.84-.21 1.68-.7 1.89-1.47.21-.77.21-1.47.07-1.68-.14-.21-.42-.21-.63-.21z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/40 transition-colors"
                    >
                      <span className="sr-only">Discord</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-transparent backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-black/60 border-purple-500/20 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black/60 border-purple-500/20 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="bg-black/60 border-purple-500/20 focus:border-purple-500 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
