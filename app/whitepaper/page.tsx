'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { ChevronDown, CheckCircle, Clock, AlertTriangle, Download, Terminal } from 'lucide-react'

// Section data
const sections = [
    {
        id: 'executive-summary',
        title: 'EXECUTIVE SUMMARY',
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
        status: 'complete',
        content: `Tardigrades Finance believes the underlying factor that will continue to define blockchain and DeFi products is the ability to give people and businesses more power and control over their finances.

This is the driving force behind $TRDG Token, which envisions:

1. FINANCIAL FREEDOM - Providing a payment currency where people can freely utilize their crypto assets in a fully secure, fast, and affordable online environment.

2. PASSIVE INCOME - Offering staking rewards through our automatic reflection system—earn 2.5% of every transaction distributed to all holders.

3. DEFLATIONARY GROWTH - With 2.5% of every transaction burned, the circulating supply continuously decreases, potentially increasing value over time.

4. SURVIVAL - Like the biological tardigrade, $TRDG is built to survive any market condition. We've already proven this through multiple bear markets since 2021.

#BeTheFuture 💧🐻`
    },
    {
        id: 'problems',
        title: 'PROBLEMS WE ADDRESS',
        status: 'complete',
        content: `TRADITIONAL PAYMENT ISSUES:

❌ SLOW PROCESSING - Despite digital revolution, bank transactions still take days to complete.
❌ SPENDING DIGITAL ASSETS - Mass adoption remains challenging. Finding places to spend crypto is difficult.
❌ NO COMMUNITY AUTHORITY - Traditional centralized companies don't grant decision-making to users.
❌ SECURITY VULNERABILITIES - Centralized systems are prone to hacking attacks and data breaches.
❌ EXPENSIVE FEES - Micro-transactions often cost more in fees than the transaction itself.
❌ ACCOUNT RESTRICTIONS - Monthly fees, card limits, minimum balances—traditional banking is restrictive.
❌ TIME-CONSUMING KYC/AML - Know Your Customer processes can take weeks to complete.
❌ LACK OF TRANSPARENCY - Investors rarely know how or where funds are being utilized.

$TRDG was created to address these fundamental issues with the traditional financial system.`
    },
    {
        id: 'solutions',
        title: '$TRDG SOLUTIONS',
        status: 'partial',
        content: `IMPLEMENTED SOLUTIONS:

✓ INSTANT PAYMENTS - $TRDG payments are instant on-chain. No waiting days for transactions. STATUS: LIVE
✓ DECENTRALIZATION - Complete control lies with users. No central authority. Contract renounced. STATUS: LIVE
✓ SAFE & SECURE - LP tokens burned for eternity. Smart contract audited and immutable. STATUS: LIVE
✓ LOWER COSTS - Minimal gas fees on BSC. Significantly lower than traditional processors. STATUS: LIVE
✓ TRANSPARENCY - All transactions recorded on public blockchain. Fully auditable. STATUS: LIVE
✓ TRUSTLESS SYSTEM - Smart contracts eliminate middlemen. No third-party dependencies. STATUS: LIVE

PENDING DEVELOPMENT:
⏳ MERCHANT PLUGINS - State-of-the-art plugins for business integration.
⏳ COMMUNITY VOTING - On-chain governance for platform decisions.
⏳ AI-POWERED KYC - Seamless automated verification system.
⏳ DEDICATED WALLET APP - Mobile wallet with enhanced features.`
    },
    {
        id: 'token',
        title: 'TOKEN SPECIFICATIONS',
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

The rewards for $TRDG are set to 2.5%. This allows holders to earn more tokens on EVERY transaction made—without staking required.`
    },
    {
        id: 'security',
        title: 'SECURITY FEATURES',
        status: 'complete',
        content: `SECURITY ARCHITECTURE:
═══════════════════════════════════════════════════

[VERIFIED] LP TOKENS BURNED FOR ETERNITY
Instead of time-locking liquidity, LP tokens were sent to:
0x000000000000000000000000000000000000dead
This address can NEVER be accessed by anyone. Rug pull = IMPOSSIBLE.

[VERIFIED] CONTRACT OWNERSHIP RENOUNCED
The team renounced ownership of the smart contract.
This prevents ANY future modifications or tampering. The contract is immutable forever.

[VERIFIED] NO TEAM TOKENS
The founding team holds no reserved allocation. Complete alignment with the community.

[VERIFIED] NO MIGRATION EVER
$TRDG will NEVER migrate to a new contract. "If it's not broke, why try and fix it?"

SECURITY RATING: ████████████████████ 100%
RUG PULL RISK:   □□□□□□□□□□□□□□□□□□□□ 0%`
    },
    {
        id: 'roadmap',
        title: 'ROADMAP',
        status: 'partial',
        content: `TARDIGRADES FINANCE ROADMAP:

PHASE 1: GENESIS [COMPLETE] ✓
✓ Token Development & Deployment | ✓ BSC Launch (March 8, 2021)
✓ ETH Launch (May 11, 2021) | ✓ LP Tokens Burned Forever
✓ Contract Ownership Renounced | ✓ CoinGecko & CMC Listing

PHASE 2: SURVIVAL [COMPLETE] ✓
✓ Survive 2021 Bull Market | ✓ Survive 2022 Crypto Winter
✓ Survive 2023-2024 Market Cycles | ✓ Maintain Community Trust

PHASE 3: REAWAKENING [ACTIVE] ⚡
✓ Website Redesign 2025 | ⏳ Community Revival Campaign
⏳ New Exchange Listings | ⏳ Partnership Development

PHASE 4: EXPANSION [PENDING] ○
○ Merchant Integration Plugins | ○ Mobile Wallet Development
○ NFT Ecosystem (Fugligrades) | ○ Governance Implementation`
    },
    {
        id: 'links',
        title: 'OFFICIAL LINKS',
        status: 'complete',
        content: `VERIFIED OFFICIAL CHANNELS:
═══════════════════════════════════════════════════

WEBSITE: https://tardigradesfinance.com

SMART CONTRACT:
BSC:  https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5
ETH:  https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5

TRADING:
PancakeSwap V1 (BSC) | Uniswap V2 (ETH) | Xeggex | MintMe

SOCIAL:
Telegram: https://t.me/TardigradesOfficial
Twitter/X: https://twitter.com/TRDGtoken
Reddit: https://reddit.com/r/TRDGToken
Medium: https://tardigradesfinance.medium.com

FOUNDER CONTACT: https://t.me/jShiz`
    },
    {
        id: 'disclaimer',
        title: 'LEGAL DISCLAIMER',
        status: 'complete',
        content: `⚠️ IMPORTANT LEGAL NOTICE ⚠️
═══════════════════════════════════════════════════

This whitepaper is for INFORMATIONAL PURPOSES ONLY and does not constitute financial, legal, or tax advice.

NO INVESTMENT ADVICE: This document does not constitute a prospectus or offer document of any sort.

RISK WARNING: Cryptocurrency investments carry SIGNIFICANT RISKS. You may lose all or part of the value of your investment. Past performance is not indicative of future results.

DO YOUR OWN RESEARCH (DYOR): You should conduct your own research and consult professional advisors before making any investment decisions.

$TRDG is a community-driven experimental project with no guarantees of returns or feature completion.`
    }
]

// Typing effect component
function TypedContent({ text, onComplete }: { text: string, onComplete?: () => void }) {
    const [displayed, setDisplayed] = useState('')
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        setDisplayed('')
        setComplete(false)
        let i = 0
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 5)) // Type 5 chars at a time for speed
                i += 5
            } else {
                setComplete(true)
                clearInterval(interval)
                onComplete?.()
            }
        }, 10)
        return () => clearInterval(interval)
    }, [text, onComplete])

    return (
        <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed text-xs md:text-sm font-mono">
            {displayed}
            {!complete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="text-trdg-green"
                >
                    █
                </motion.span>
            )}
        </pre>
    )
}

export default function WhitepaperPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null)
    const [typingComplete, setTypingComplete] = useState(false)

    const handleSectionClick = (sectionId: string) => {
        if (expandedSection === sectionId) {
            // Collapse current section
            setExpandedSection(null)
            setTypingComplete(false)
        } else {
            // Expand new section (collapses previous automatically)
            setExpandedSection(sectionId)
            setTypingComplete(false)
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'complete': return <CheckCircle size={14} className="text-trdg-green" />
            case 'partial': return <Clock size={14} className="text-yellow-400" />
            case 'pending': return <AlertTriangle size={14} className="text-orange-400" />
            default: return null
        }
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <CustomCursor />
            <Header />

            <div className="pt-24 pb-16 min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">

                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-4">
                                <Terminal className="text-trdg-cyan" size={16} />
                                <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest font-black">Technical Documentation</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-2">
                                WHITEPAPER <span className="text-trdg-cyan">v2.0</span>
                            </h1>
                            <p className="text-gray-500 font-mono text-xs">
                                Click a section to expand • Click again to collapse
                            </p>

                            {/* Download PDF Button */}
                            <a
                                href="https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-mono hover:bg-purple-500/30 transition-colors border border-purple-500/30"
                            >
                                <Download size={14} />
                                DOWNLOAD ORIGINAL PDF
                            </a>
                        </motion.div>

                        {/* Accordion Sections */}
                        <div className="space-y-2">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50"
                                >
                                    {/* Section Header (Clickable) */}
                                    <button
                                        onClick={() => handleSectionClick(section.id)}
                                        className={`w-full px-4 py-4 flex items-center justify-between gap-4 transition-all ${expandedSection === section.id
                                                ? 'bg-trdg-cyan/10 border-b border-trdg-cyan/20'
                                                : 'hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-mono text-gray-600">{String(index + 1).padStart(2, '0')}</span>
                                            <span className={`font-orbitron font-bold text-sm uppercase tracking-wide ${expandedSection === section.id ? 'text-trdg-cyan' : 'text-white'
                                                }`}>
                                                {section.title}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {getStatusIcon(section.status)}
                                            <motion.div
                                                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown size={18} className={expandedSection === section.id ? 'text-trdg-cyan' : 'text-gray-500'} />
                                            </motion.div>
                                        </div>
                                    </button>

                                    {/* Section Content (Expandable) */}
                                    <AnimatePresence>
                                        {expandedSection === section.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div
                                                    className="p-4 md:p-6 bg-black/60"
                                                    style={{
                                                        textShadow: '0 0 5px rgba(0,255,148,0.2)'
                                                    }}
                                                >
                                                    <TypedContent
                                                        text={section.content}
                                                        onComplete={() => setTypingComplete(true)}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Status Legend */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 p-4 rounded-xl bg-zinc-900/30 border border-white/5"
                        >
                            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono">
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
                        </motion.div>

                        {/* Footer Note */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
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
