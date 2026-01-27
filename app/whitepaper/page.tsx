'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { Terminal, FileText, ChevronRight, Lock, CheckCircle, Clock, AlertTriangle, Download } from 'lucide-react'

// Terminal typing effect hook
function useTypewriter(text: string, speed: number = 20, startDelay: number = 0, enabled: boolean = true) {
    const [displayedText, setDisplayedText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (!enabled) return
        setDisplayedText('')
        setIsComplete(false)

        const startTimeout = setTimeout(() => {
            let i = 0
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.slice(0, i + 1))
                    i++
                } else {
                    setIsComplete(true)
                    clearInterval(interval)
                }
            }, speed)
            return () => clearInterval(interval)
        }, startDelay)

        return () => clearTimeout(startTimeout)
    }, [text, speed, startDelay, enabled])

    return { displayedText, isComplete }
}

// Section data with status
const sections = [
    {
        id: 'executive-summary',
        title: 'EXECUTIVE SUMMARY',
        command: 'cat /docs/executive-summary.md',
        status: 'complete',
        content: `The payment sector has always been deemed one of the most vital sectors for the economy to function. Although various digital payment options exist, users still face hefty fees, security vulnerabilities, hacking risks, and third-party dependency.

Cryptocurrencies were meant to replace the traditional financial system through decentralization. However, consumers regularly face problems with usability, complicated interfaces, and difficulty converting crypto to fiat currency.

Tardigrades Finance aims to serve as the bridge between the cryptocurrency world and the real world. Our goal is to satisfy consumer demand by providing a state-of-the-art payment processing token without compromising security, efficiency, or cost-effectiveness.

Powered by Binance Smart Chain and Ethereum Networks, the $TRDG Token serves as a next-generation payment token combining:
• Peer-to-peer exchange and storage of value
• Blockchain-based security
• Decentralized ownership
• Deflationary approach towards supply
• Automatic holder rewards (2.5% per transaction)
• Automatic burn mechanism (2.5% per transaction)`
    },
    {
        id: 'introduction',
        title: 'INTRODUCTION',
        command: 'cat /docs/introduction.md',
        status: 'complete',
        content: `Tardigrades Finance ($TRDG) is a modern-age blockchain project that aims to resolve problems associated with traditional payment processing by providing a decentralized crypto token with instant, seamless, cost-effective payment capabilities.

Deployed on both Binance Smart Chain (BSC) and Ethereum (ETH) Networks, the $TRDG Token works as a multi-feature payment token allowing users to transact in a seamless, risk-free, and cost-effective manner.

KEY MILESTONES ACHIEVED:
✓ BSC Launch: March 8th, 2021
✓ ETH Launch: May 11th, 2021
✓ CoinGecko Listing: May 2021
✓ CoinMarketCap Listing: May 2021
✓ Contract Renounced: Permanent
✓ LP Tokens Burned: Forever

The user doesn't have to rely on central authorities whose actions may result in system collapse. $TRDG represents true decentralization.`
    },
    {
        id: 'vision',
        title: 'VISION STATEMENT',
        command: 'cat /docs/vision.md',
        status: 'complete',
        content: `Tardigrades Finance believes the underlying factor that will continue to define blockchain and DeFi products is the ability to give people and businesses more power and control over their finances.

This is the driving force behind $TRDG Token, which envisions:

1. FINANCIAL FREEDOM
   Providing a payment currency where people can freely utilize their crypto assets in a fully secure, fast, and affordable online environment.

2. PASSIVE INCOME
   Offering staking rewards through our automatic reflection system—earn 2.5% of every transaction distributed to all holders.

3. DEFLATIONARY GROWTH  
   With 2.5% of every transaction burned, the circulating supply continuously decreases, potentially increasing value over time.

4. SURVIVAL
   Like the biological tardigrade, $TRDG is built to survive any market condition. We've already proven this through multiple bear markets since 2021.

#BeTheFuture 💧🐻`
    },
    {
        id: 'problems',
        title: 'PROBLEMS WE ADDRESS',
        command: 'cat /docs/problems.md',
        status: 'complete',
        content: `TRADITIONAL PAYMENT ISSUES:

❌ SLOW PROCESSING
   Despite digital revolution, bank transactions still take days to complete.

❌ SPENDING DIGITAL ASSETS
   Mass adoption remains challenging. Finding places to spend crypto is difficult.

❌ NO COMMUNITY AUTHORITY
   Traditional centralized companies don't grant decision-making to users.

❌ SECURITY VULNERABILITIES
   Centralized systems are prone to hacking attacks and data breaches.

❌ EXPENSIVE FEES
   Micro-transactions often cost more in fees than the transaction itself.

❌ ACCOUNT RESTRICTIONS
   Monthly fees, card limits, minimum balances—traditional banking is restrictive.

❌ TIME-CONSUMING KYC/AML
   Know Your Customer processes can take weeks to complete.

❌ LACK OF TRANSPARENCY
   Investors rarely know how or where funds are being utilized.

$TRDG was created to address these fundamental issues with the traditional financial system.`
    },
    {
        id: 'solutions',
        title: '$TRDG SOLUTIONS',
        command: 'cat /docs/solutions.md',
        status: 'partial',
        content: `IMPLEMENTED SOLUTIONS:

✓ INSTANT PAYMENTS
  $TRDG payments are instant on-chain. No waiting days for transactions.
  STATUS: LIVE ✓

✓ DECENTRALIZATION
  Complete control lies with users. No central authority. Contract renounced.
  STATUS: LIVE ✓

✓ SAFE & SECURE
  LP tokens burned for eternity. Smart contract audited and immutable.
  STATUS: LIVE ✓

✓ LOWER COSTS
  Minimal gas fees on BSC. Significantly lower than traditional processors.
  STATUS: LIVE ✓

✓ TRANSPARENCY
  All transactions recorded on public blockchain. Fully auditable.
  STATUS: LIVE ✓

✓ TRUSTLESS SYSTEM
  Smart contracts eliminate middlemen. No third-party dependencies.
  STATUS: LIVE ✓

PENDING DEVELOPMENT:

⏳ MERCHANT PLUGINS
  State-of-the-art plugins for business integration.
  STATUS: FUTURE DEVELOPMENT

⏳ COMMUNITY VOTING
  On-chain governance for platform decisions.
  STATUS: FUTURE DEVELOPMENT

⏳ AI-POWERED KYC
  Seamless automated verification system.
  STATUS: FUTURE DEVELOPMENT

⏳ DEDICATED WALLET APP
  Mobile wallet with enhanced features.
  STATUS: FUTURE DEVELOPMENT`
    },
    {
        id: 'token',
        title: '$TRDG TOKEN SPECIFICATIONS',
        command: 'cat /docs/token-specs.md',
        status: 'complete',
        content: `TOKEN DETAILS:
═══════════════════════════════════════════════════
  Token Name:     Tardigrades Finance
  Symbol:         $TRDG
  Decimals:       9
  Contract:       0x92a42db88ed0f02c71d439e55962ca7cab0168b5
  Networks:       Binance Smart Chain (BSC) + Ethereum (ETH)
  Initial Supply: 100,000,000,000,000,000 (100 Quadrillion)
  Launch Burn:    50% (Same on both chains)
═══════════════════════════════════════════════════

TOKENOMICS - 5% TRANSACTION TAX:
┌─────────────────────────────────────────────────┐
│  2.5% → BURN WALLET (Permanent Deflation)       │
│  2.5% → HOLDER REWARDS (Passive Income)         │
└─────────────────────────────────────────────────┘

The rewards for $TRDG are set to 2.5%. This allows holders to earn more tokens on EVERY transaction made—without staking required.

Rewards are fixed and shared between ALL holders at each transaction: buy, sell, trade, send, receive.

KEY ADVANTAGES:
• No staking required for rewards
• Automatic deflation reduces supply
• Same contract on both BSC and ETH
• Portable (millions of dollars in megabytes)
• Lowest transaction fees
• Complete privacy on public blockchain`
    },
    {
        id: 'security',
        title: 'SECURITY FEATURES',
        command: 'cat /docs/security-audit.md',
        status: 'complete',
        content: `SECURITY ARCHITECTURE:
═══════════════════════════════════════════════════

[VERIFIED] LP TOKENS BURNED FOR ETERNITY
Instead of time-locking liquidity, LP tokens were sent to:
0x000000000000000000000000000000000000dead

This address can NEVER be accessed by anyone—not the team,
not hackers, not anyone. Rug pull = IMPOSSIBLE.

[VERIFIED] CONTRACT OWNERSHIP RENOUNCED
The team renounced ownership of the smart contract.
This prevents ANY future modifications, wallet additions,
or tampering. The contract is immutable forever.

[VERIFIED] NO TEAM TOKENS
The founding team holds no reserved allocation.
Complete alignment with the community.

[VERIFIED] NO MIGRATION EVER
$TRDG will NEVER migrate to a new contract.
"If it's not broke, why try and fix it?"

SECURITY RATING: ████████████████████ 100%
RUG PULL RISK:   □□□□□□□□□□□□□□□□□□□□ 0%

$TRDG is built on BNB Chain and Ethereum—two of the most
secure and battle-tested blockchain networks in existence.`
    },
    {
        id: 'roadmap',
        title: 'ROADMAP',
        command: 'cat /docs/roadmap.md',
        status: 'partial',
        content: `TARDIGRADES FINANCE ROADMAP:

PHASE 1: GENESIS [COMPLETE] ✓
═══════════════════════════════════════════════════
✓ Token Development & Deployment
✓ BSC Launch (March 8, 2021)
✓ ETH Launch (May 11, 2021)
✓ LP Tokens Burned Forever
✓ Contract Ownership Renounced
✓ CoinGecko Listing
✓ CoinMarketCap Listing
✓ Community Building

PHASE 2: SURVIVAL [COMPLETE] ✓
═══════════════════════════════════════════════════
✓ Survive 2021 Bull Market
✓ Survive 2022 Crypto Winter
✓ Survive 2023 Market Recovery
✓ Survive 2024 Market Cycles
✓ Maintain Community Trust
✓ Zero Rug Pulls (Verified)

PHASE 3: REAWAKENING [ACTIVE] ⚡
═══════════════════════════════════════════════════
✓ Website Redesign 2025
✓ Enhanced Terminal Interface
⏳ Community Revival Campaign
⏳ New Exchange Listings
⏳ Partnership Development
⏳ Marketing Push

PHASE 4: EXPANSION [PENDING] ○
═══════════════════════════════════════════════════
○ Merchant Integration Plugins
○ Mobile Wallet Development
○ NFT Ecosystem (Fugligrades)
○ Governance Implementation
○ Cross-chain Bridges
○ Real-world Utility Partners`
    },
    {
        id: 'links',
        title: 'OFFICIAL LINKS',
        command: 'cat /docs/links.md',
        status: 'complete',
        content: `VERIFIED OFFICIAL CHANNELS:
═══════════════════════════════════════════════════

WEBSITE:
https://tardigradesfinance.com

SMART CONTRACT:
BSC:  https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5
ETH:  https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5

TRADING:
PancakeSwap V1: https://pancakeswap.finance/swap (BSC)
Uniswap V2:     https://app.uniswap.org (ETH)
Xeggex:         https://xeggex.com
MintMe:         https://mintme.com

SOCIAL:
Telegram:       https://t.me/TardigradesOfficial
Twitter/X:      https://twitter.com/TRDGtoken
Reddit:         https://reddit.com/r/TRDGToken
Medium:         https://tardigradesfinance.medium.com
YouTube:        https://youtube.com/@TRDGLive
GitHub:         https://github.com/tardigradesfinance

PRICE TRACKING:
CoinGecko:      https://coingecko.com/en/coins/tardigrades-finance
CoinMarketCap:  https://coinmarketcap.com/currencies/tardigrades-finance

FOUNDER CONTACT:
Telegram:       https://t.me/jShiz`
    },
    {
        id: 'disclaimer',
        title: 'LEGAL DISCLAIMER',
        command: 'cat /docs/disclaimer.md --legal',
        status: 'complete',
        content: `⚠️ IMPORTANT LEGAL NOTICE ⚠️
═══════════════════════════════════════════════════

This whitepaper is for INFORMATIONAL PURPOSES ONLY and does not constitute financial, legal, or tax advice. Please read carefully.

NO INVESTMENT ADVICE:
This document does not constitute a prospectus or offer document of any sort. It is not intended to constitute an offer of securities or a solicitation for investment.

NO WARRANTIES:
$TRDG makes no warranties or representations as to the successful development or implementation of technologies and innovations mentioned herein.

RISK WARNING:
Cryptocurrency investments carry SIGNIFICANT RISKS. You may lose all or part of the value of your investment. Past performance is not indicative of future results.

REGULATORY STATUS:
No regulatory authority has examined or approved any of the information in this whitepaper. The publication of this document does not imply compliance with any laws or regulations.

FORWARD-LOOKING STATEMENTS:
This document may contain forward-looking statements based on assumptions considered reasonable at the time of writing. These may not be achieved due to multiple risk factors.

DO YOUR OWN RESEARCH (DYOR):
You should conduct your own research and consult professional advisors before making any investment decisions.

DISTRIBUTION RESTRICTIONS:
This whitepaper may not be redistributed without prior written consent. Check local laws regarding cryptocurrency in your jurisdiction.

$TRDG is a community-driven experimental project with no guarantees of returns or feature completion.`
    }
]

// Boot sequence messages
const bootSequence = [
    { text: 'TARDIGRADES FINANCE TERMINAL v2.0.25', delay: 0 },
    { text: 'Initializing secure connection...', delay: 200 },
    { text: 'Verifying blockchain integrity...', delay: 400 },
    { text: 'Loading document archives...', delay: 600 },
    { text: 'Decrypting whitepaper data...', delay: 800 },
    { text: 'ACCESS GRANTED', delay: 1000, highlight: true },
]

export default function WhitepaperPage() {
    const [bootComplete, setBootComplete] = useState(false)
    const [bootStep, setBootStep] = useState(0)
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const [loadingSection, setLoadingSection] = useState(false)
    const [typedContent, setTypedContent] = useState('')
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const terminalRef = useRef<HTMLDivElement>(null)

    // Boot sequence
    useEffect(() => {
        if (bootStep < bootSequence.length) {
            const timer = setTimeout(() => {
                setBootStep(prev => prev + 1)
            }, bootSequence[bootStep].delay + 300)
            return () => clearTimeout(timer)
        } else {
            setTimeout(() => setBootComplete(true), 500)
        }
    }, [bootStep])

    // Section loading effect
    const loadSection = (sectionId: string) => {
        const section = sections.find(s => s.id === sectionId)
        if (!section) return

        setLoadingSection(true)
        setCommandHistory(prev => [...prev, section.command])

        setTimeout(() => {
            setActiveSection(sectionId)
            setLoadingSection(false)

            // Type out content
            let i = 0
            const content = section.content
            setTypedContent('')
            const interval = setInterval(() => {
                if (i < content.length) {
                    setTypedContent(content.slice(0, i + 1))
                    i += 3 // Speed up typing
                } else {
                    clearInterval(interval)
                }
            }, 5)
        }, 800)
    }

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [typedContent, bootStep, activeSection])

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'complete': return <CheckCircle size={14} className="text-trdg-green" />
            case 'partial': return <Clock size={14} className="text-yellow-400" />
            case 'pending': return <AlertTriangle size={14} className="text-orange-400" />
            default: return <FileText size={14} className="text-gray-400" />
        }
    }

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'complete': return 'VERIFIED'
            case 'partial': return 'IN PROGRESS'
            case 'pending': return 'PENDING'
            default: return 'UNKNOWN'
        }
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <CustomCursor />
            <Header />

            <div className="pt-24 pb-16 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">

                        {/* Terminal Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900 rounded-t-xl border border-white/10 p-4 flex items-center gap-4"
                        >
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center">
                                <span className="font-mono text-sm text-gray-400">
                                    trdg@mainframe:~/whitepaper$
                                </span>
                            </div>
                            <a
                                href="https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf"
                                target="_blank"
                                className="flex items-center gap-2 px-3 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-mono hover:bg-purple-500/30 transition-colors"
                            >
                                <Download size={12} />
                                DOWNLOAD PDF
                            </a>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row">
                            {/* Sidebar - Table of Contents */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="lg:w-72 bg-zinc-900/50 border-l border-b lg:border-b-0 lg:border-r border-white/10 p-4"
                            >
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Terminal size={12} />
                                    TABLE OF CONTENTS
                                </div>
                                <nav className="space-y-1">
                                    {sections.map((section, index) => (
                                        <motion.button
                                            key={section.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: bootComplete ? 0.1 * index : 2 + 0.1 * index }}
                                            onClick={() => loadSection(section.id)}
                                            disabled={!bootComplete}
                                            className={`w-full text-left p-2 rounded-lg flex items-center gap-2 text-xs font-mono transition-all group ${activeSection === section.id
                                                    ? 'bg-trdg-cyan/20 text-trdg-cyan border border-trdg-cyan/30'
                                                    : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                                                } ${!bootComplete ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            <ChevronRight size={12} className={`transition-transform ${activeSection === section.id ? 'rotate-90 text-trdg-cyan' : 'group-hover:translate-x-1'}`} />
                                            <span className="flex-1 truncate">{section.title}</span>
                                            {getStatusIcon(section.status)}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Status Legend */}
                                <div className="mt-8 pt-4 border-t border-white/10">
                                    <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Status Key</div>
                                    <div className="space-y-2 text-[10px] font-mono">
                                        <div className="flex items-center gap-2 text-trdg-green">
                                            <CheckCircle size={12} /> VERIFIED / LIVE
                                        </div>
                                        <div className="flex items-center gap-2 text-yellow-400">
                                            <Clock size={12} /> IN DEVELOPMENT
                                        </div>
                                        <div className="flex items-center gap-2 text-orange-400">
                                            <AlertTriangle size={12} /> FUTURE PLANNED
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main Terminal Area */}
                            <div className="flex-1 bg-black border-x border-b border-white/10 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl overflow-hidden">
                                <div
                                    ref={terminalRef}
                                    className="h-[70vh] overflow-y-auto p-6 font-mono text-sm"
                                    style={{
                                        background: 'radial-gradient(ellipse at bottom, #0a0a0a 0%, #000 100%)',
                                        textShadow: '0 0 5px rgba(0,255,148,0.3)'
                                    }}
                                >
                                    {/* Boot Sequence */}
                                    <AnimatePresence>
                                        {!bootComplete && (
                                            <motion.div className="space-y-2 mb-8">
                                                {bootSequence.slice(0, bootStep).map((msg, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className={msg.highlight ? 'text-trdg-green font-bold' : 'text-gray-500'}
                                                    >
                                                        <span className="text-gray-600">[{String(i).padStart(2, '0')}]</span> {msg.text}
                                                        {i === bootStep - 1 && !msg.highlight && (
                                                            <motion.span
                                                                animate={{ opacity: [1, 0] }}
                                                                transition={{ repeat: Infinity, duration: 0.5 }}
                                                            >
                                                                _
                                                            </motion.span>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Welcome Message */}
                                    {bootComplete && !activeSection && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-center py-16"
                                        >
                                            <pre className="text-trdg-cyan text-[8px] md:text-xs mb-8 leading-tight">
                                                {`
 ████████╗██████╗ ██████╗  ██████╗ 
 ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝ 
    ██║   ██████╔╝██║  ██║██║  ███╗
    ██║   ██╔══██╗██║  ██║██║   ██║
    ██║   ██║  ██║██████╔╝╚██████╔╝
    ╚═╝   ╚═╝  ╚═╝╚═════╝  ╚═════╝ 
`}
                                            </pre>
                                            <h1 className="text-2xl md:text-4xl font-orbitron font-black text-white mb-4">
                                                WHITEPAPER <span className="text-trdg-cyan">v2.0</span>
                                            </h1>
                                            <p className="text-gray-500 mb-8">
                                                Tardigrades Finance Technical Documentation
                                            </p>
                                            <div className="text-gray-600 text-xs animate-pulse">
                                                ← Select a section from the menu to begin
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Command History */}
                                    {commandHistory.map((cmd, i) => (
                                        <div key={i} className="mb-2 text-gray-600">
                                            <span className="text-trdg-cyan">trdg@mainframe</span>
                                            <span className="text-white">:</span>
                                            <span className="text-blue-400">~/whitepaper</span>
                                            <span className="text-white">$ </span>
                                            <span className="text-gray-300">{cmd}</span>
                                        </div>
                                    ))}

                                    {/* Loading Animation */}
                                    {loadingSection && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-yellow-400 flex items-center gap-2"
                                        >
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                            >
                                                ⚙
                                            </motion.span>
                                            Loading document...
                                        </motion.div>
                                    )}

                                    {/* Active Section Content */}
                                    {activeSection && !loadingSection && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-4"
                                        >
                                            {/* Section Header */}
                                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                                                <div className="flex-1">
                                                    <h2 className="text-xl font-orbitron font-bold text-trdg-cyan">
                                                        {sections.find(s => s.id === activeSection)?.title}
                                                    </h2>
                                                </div>
                                                <div className={`px-3 py-1 rounded text-[10px] font-mono uppercase ${sections.find(s => s.id === activeSection)?.status === 'complete'
                                                        ? 'bg-trdg-green/20 text-trdg-green'
                                                        : sections.find(s => s.id === activeSection)?.status === 'partial'
                                                            ? 'bg-yellow-400/20 text-yellow-400'
                                                            : 'bg-orange-400/20 text-orange-400'
                                                    }`}>
                                                    {getStatusLabel(sections.find(s => s.id === activeSection)?.status || '')}
                                                </div>
                                            </div>

                                            {/* Content with typing effect */}
                                            <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed text-xs md:text-sm">
                                                {typedContent}
                                                <motion.span
                                                    animate={{ opacity: [1, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.5 }}
                                                    className="text-trdg-green"
                                                >
                                                    █
                                                </motion.span>
                                            </pre>
                                        </motion.div>
                                    )}

                                    {/* Command Line Prompt */}
                                    {bootComplete && activeSection && !loadingSection && typedContent === sections.find(s => s.id === activeSection)?.content && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="mt-8 pt-4 border-t border-white/10"
                                        >
                                            <span className="text-trdg-cyan">trdg@mainframe</span>
                                            <span className="text-white">:</span>
                                            <span className="text-blue-400">~/whitepaper</span>
                                            <span className="text-white">$ </span>
                                            <motion.span
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.8 }}
                                                className="text-white"
                                            >
                                                _
                                            </motion.span>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 text-center text-xs text-gray-600 font-mono"
                        >
                            TARDIGRADES FINANCE WHITEPAPER • LAST UPDATED: JANUARY 2025 • VERSION 2.0
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
