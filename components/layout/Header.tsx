'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
    { name: 'Nexus', href: '#nexus' },
    { name: 'BioScanner', href: '#bioscanner' },
    { name: 'Mission', href: '#mission' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Acquire', href: '#acquire' },
    { name: 'About', href: '/about' },
    { name: 'Whitepaper', href: '/whitepaper' },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'circOut' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/images/trdg-logo.png"
                                alt="TRDG"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-orbitron font-bold text-xl tracking-wider text-white group-hover:text-trdg-cyan transition-colors">
                            $TRDG
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-trdg-cyan font-mono text-sm uppercase tracking-widest transition-colors hover:glow-text"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-orbitron text-[10px] uppercase tracking-wide flex items-center gap-2"
                        >
                            Buy BSC <ExternalLink size={12} />
                        </a>
                        <a
                            href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full border border-pink-500/50 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 font-orbitron text-[10px] uppercase tracking-wide flex items-center gap-2"
                        >
                            Buy ETH <ExternalLink size={12} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white hover:text-trdg-cyan transition-colors"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-space-black/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-4 text-base font-orbitron text-white hover:text-trdg-cyan border-b border-white/5"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <a
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-md bg-trdg-cyan/10 border border-trdg-cyan text-trdg-cyan text-center font-orbitron uppercase text-sm"
                                >
                                    Buy on PancakeSwap
                                </a>
                                <a
                                    href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-md bg-pink-500/10 border border-pink-500 text-pink-500 text-center font-orbitron uppercase text-sm"
                                >
                                    Buy on Uniswap
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
