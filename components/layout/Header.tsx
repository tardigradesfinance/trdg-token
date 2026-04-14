import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink, ChevronDown, Send, Twitter, Youtube, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavSubItem {
    name: string
    href: string
    icon?: any
}

interface NavItem {
    name: string
    href?: string
    items?: NavSubItem[]
}

const navItems: NavItem[] = [
    {
        name: 'Tracking',
        items: [
            { name: 'Charts', href: '/intelligence/charts' },
            { name: 'Live Data', href: '/stats' },
            { name: 'System Status', href: '/intelligence/diagnostics' },
        ]
    },
    {
        name: 'Token',
        items: [
            { name: 'Tokenomics', href: '/protocol/tokenomics' },
            { name: 'About Specimen', href: '/protocol/specimen' },
            { name: 'Audit & Security', href: '/protocol/security' },
            { name: 'Whitepaper', href: '/whitepaper' },
        ]
    },
    {
        name: 'History',
        items: [
            { name: 'Archives', href: '/archives/logs' },
            { name: 'Legacy Site', href: '/archives/legacy' },
        ]
    },
    {
        name: 'Resources',
        items: [
            { name: 'Registry', href: '#ecosystem' },
            { name: 'Forbes Asset', href: 'https://www.forbes.com/digital-assets/assets/trdgtoken-trdg/' },
            { name: 'MEXC Market', href: 'https://www.mexc.com/price/trdgtoken/info' },
            { name: 'Token Metrics', href: 'https://app.tokenmetrics.com/en/tardigrades-finance' },
            { name: 'DappRadar', href: 'https://dappradar.com/dapp/trdg-track' },
            { name: 'Merch Shop', href: '/merch' },
        ]
    },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-space-black/95 backdrop-blur-xl shadow-lg border-white/10' : 'bg-transparent border-transparent'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                                priority
                            />
                        </div>
                        <span className="font-orbitron font-bold text-xl tracking-wider text-white group-hover:text-trdg-cyan transition-colors">
                            $TRDG
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-1 lg:space-x-4">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.items ? (
                                    <button
                                        className={`flex items-center gap-1.5 px-3 py-2 text-gray-300 hover:text-trdg-cyan font-mono text-sm uppercase tracking-widest transition-colors ${activeDropdown === item.name ? 'text-trdg-cyan' : ''}`}
                                    >
                                        {item.name}
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="px-3 py-2 text-gray-300 hover:text-trdg-cyan font-mono text-sm uppercase tracking-widest transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                <AnimatePresence>
                                    {item.items && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-64 bg-zinc-950 border border-white/10 rounded-xl mt-2 py-4 shadow-2xl backdrop-blur-xl"
                                        >
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="flex items-center justify-between px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-all text-xs font-mono uppercase tracking-widest"
                                                >
                                                    {subItem.name}
                                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* Action & Socials */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pr-6 border-r border-white/10">
                            <a href="https://t.me/TardigradesOfficial" target="_blank" className="text-gray-400 hover:text-trdg-cyan transition-colors" title="Telegram">
                                <Send size={18} />
                            </a>
                            <a href="https://x.com/TRDGtoken" target="_blank" className="text-gray-400 hover:text-white transition-colors" title="X (Twitter)">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.youtube.com/@TRDGLive" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors" title="YouTube">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.instagram.com/trdgtoken/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors" title="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/TRDGtoken" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors" title="Facebook">
                                <Facebook size={18} />
                            </a>
                        </div>

                        <a
                            href="https://pancakeswap.finance/swap?outputCurrency=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-orbitron text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                        >
                            Buy BSC <ExternalLink size={12} />
                        </a>
                        <a
                            href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-pink-500/50 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 font-orbitron text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                        >
                            Buy ETH <ExternalLink size={12} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 top-20 bg-space-black z-[100] md:hidden overflow-y-auto"
                    >
                        <div className="px-6 py-10 space-y-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="space-y-4">
                                    <button
                                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                                        className="w-full flex items-center justify-between text-xl font-orbitron font-bold text-white uppercase tracking-tighter"
                                    >
                                        {item.name}
                                        {item.items && <ChevronDown className={`transition-transform duration-300 ${mobileDropdown === item.name ? 'rotate-180' : ''}`} />}
                                    </button>

                                    <AnimatePresence>
                                        {item.items && mobileDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 space-y-4 pt-2"
                                            >
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block text-gray-400 hover:text-trdg-cyan text-sm font-mono uppercase tracking-widest"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!item.items && (
                                        <Link
                                            href={item.href || '#'}
                                            className="block text-xl font-orbitron font-bold text-white uppercase tracking-tighter"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className="pt-10 flex flex-col gap-4">
                                <a
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5"
                                    target="_blank"
                                    className="w-full py-4 text-center bg-yellow-500 text-black font-orbitron font-bold uppercase rounded-xl"
                                >
                                    Buy on BSC
                                </a>
                                <a
                                    href="https://app.uniswap.org/#/swap?outputCurrency=0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                                    target="_blank"
                                    className="w-full py-4 text-center bg-pink-500 text-white font-orbitron font-bold uppercase rounded-xl"
                                >
                                    Buy on ETH
                                </a>

                                {/* Mobile Socials */}
                                <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/5">
                                    <a href="https://t.me/TardigradesOfficial" target="_blank" className="text-gray-400 hover:text-trdg-cyan transition-colors">
                                        <Send size={24} />
                                    </a>
                                    <a href="https://x.com/TRDGtoken" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                        <Twitter size={24} />
                                    </a>
                                    <a href="https://www.youtube.com/@TRDGLive" target="_blank" className="text-gray-400 hover:text-red-500 transition-colors">
                                        <Youtube size={24} />
                                    </a>
                                    <a href="https://www.instagram.com/trdgtoken/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="https://www.facebook.com/TRDGtoken" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        <Facebook size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
