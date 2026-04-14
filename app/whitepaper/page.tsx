'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { Download, Terminal } from 'lucide-react'
import { StandardHero } from '@/components/layout/StandardHero'

// Available commands and their content
const commandData: Record<string, string> = {
    help: `
╔════════════════════════════════════════════════════════════════╗
║                    TARDIGRADES TERMINAL v2.0                   ║
╠════════════════════════════════════════════════════════════════╣
║  Available Commands:                                           ║
║                                                                ║
║  summary    - Executive summary                                ║
║  intro      - Introduction to $TRDG                            ║
║  vision     - Our vision statement                             ║
║  problems   - Problems we address                              ║
║  solutions  - $TRDG solutions                                  ║
║  token      - Token specifications                             ║
║  security   - Security features                                ║
║  roadmap    - Project roadmap                                  ║
║  links      - Official links & socials                         ║
║  clear      - Clear terminal                                   ║
║  ascii      - Show tardigrade ASCII art                        ║
║                                                                ║
║  Type a command and press ENTER                                ║
╚════════════════════════════════════════════════════════════════╝`,

    summary: `
> EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════════

The payment sector faces hefty fees, security vulnerabilities, 
hacking risks, and third-party dependency.

$TRDG Token serves as the bridge between crypto and real world:

  ✓ Peer-to-peer exchange and storage of value
  ✓ Blockchain-based security  
  ✓ Decentralized ownership
  ✓ Deflationary supply (2.5% burn per tx)
  ✓ Automatic holder rewards (2.5% per tx)

Powered by BSC + ETH networks for true multi-chain resilience.

Type 'intro' for more details or 'help' for commands.`,

    intro: `
> INTRODUCTION
═══════════════════════════════════════════════════════════════

Tardigrades Finance ($TRDG) - Modern blockchain payment solution

Deployed on BOTH Binance Smart Chain AND Ethereum Network.

KEY MILESTONES:
───────────────────────────────────────
  ✓ BSC Launch:           March 8, 2021
  ✓ ETH Launch:           May 11, 2021  
  ✓ CoinGecko Listed:     May 2021
  ✓ CoinMarketCap Listed: May 2021
  ✓ Contract RENOUNCED:   Permanent
  ✓ LP Tokens BURNED:     Forever
───────────────────────────────────────

No central authority. True decentralization.`,

    vision: `
> VISION STATEMENT
═══════════════════════════════════════════════════════════════

Tardigrades Finance envisions:

1. FINANCIAL FREEDOM
   Freely utilize crypto in a secure, fast, affordable way

2. PASSIVE INCOME
   2.5% of every transaction → distributed to ALL holders

3. DEFLATIONARY GROWTH
   2.5% burned per tx → decreasing supply over time

4. SURVIVAL
   Like the tardigrade organism, $TRDG survives ANY condition
   Proven through multiple bear markets since 2021

#BeTheFuture 💧🐻`,

    problems: `
> PROBLEMS WE ADDRESS
═══════════════════════════════════════════════════════════════

Traditional Financial System Issues:

  ✗ SLOW PROCESSING     Bank transfers take days
  ✗ DIFFICULT SPENDING  Hard to use crypto in real life
  ✗ NO USER CONTROL     Centralized decisions
  ✗ SECURITY RISKS      Hacking and data breaches
  ✗ EXPENSIVE FEES      High transaction costs
  ✗ RESTRICTIONS        Limits, minimums, monthly fees
  ✗ SLOW KYC            Weeks for verification
  ✗ NO TRANSPARENCY     Hidden fund usage

$TRDG was created to FIX these fundamental issues.`,

    solutions: `
> $TRDG SOLUTIONS
═══════════════════════════════════════════════════════════════

LIVE FEATURES:
  [✓] Instant payments on-chain
  [✓] Complete decentralization
  [✓] LP burned forever (no rug pull possible)
  [✓] Low gas fees on BSC
  [✓] Full transparency on blockchain
  [✓] Trustless smart contracts

IN DEVELOPMENT:
  [⏳] Merchant integration plugins
  [⏳] Community voting system
  [⏳] Mobile wallet app
  [⏳] AI-powered KYC`,

    token: `
> TOKEN SPECIFICATIONS
═══════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│  Token Name:      Tardigrades Finance                      │
│  Symbol:          $TRDG                                    │
│  Decimals:        9                                        │
│  Networks:        BSC + ETH                                │
│  Initial Supply:  100,000,000,000,000,000 (100 Quad)       │
│  Launch Burn:     50% (both chains)                        │
└────────────────────────────────────────────────────────────┘

TOKENOMICS (5% Transaction Tax):
╔════════════════════════════════════════╗
║  2.5% → BURN WALLET (Permanent)        ║
║  2.5% → HOLDER REWARDS (Passive)       ║
╚════════════════════════════════════════╝

Contract: 0x92a42db88ed0f02c71d439e55962ca7cab0168b5`,

    security: `
> SECURITY FEATURES
═══════════════════════════════════════════════════════════════

[VERIFIED] LP TOKENS BURNED
  → Sent to 0x000...dead
  → Can NEVER be retrieved
  → Rug pull = IMPOSSIBLE

[VERIFIED] CONTRACT RENOUNCED
  → No owner functions
  → Immutable forever
  → Cannot be modified

[VERIFIED] NO TEAM TOKENS
  → Fair distribution
  → No reserved allocation

[VERIFIED] NO MIGRATION EVER
  → This is the only contract
  → "If it's not broke, don't fix it"

SECURITY RATING: ████████████████████ 100%
RUG PULL RISK:   ░░░░░░░░░░░░░░░░░░░░  0%`,

    roadmap: `
> ROADMAP
═══════════════════════════════════════════════════════════════

ROADMAP DATA RETRIEVED:
-----------------------
PHASE 1: GENESIS ────────────────────────── [COMPLETE] ✓
PHASE 2: SURVIVAL ───────────────────────── [COMPLETE] ✓
PHASE 3: REAWAKENING ────────────────────── [ACTIVE] ⚡
PHASE 4: EXPANSION ──────────────────────── [PENDING] ○

Type 'help' for navigation instructions.`,

    links: `
> OFFICIAL LINKS
═══════════════════════════════════════════════════════════════

WEBSITE:    https://tardigradesfinance.com

CONTRACTS:
  BSC: bscscan.com/token/0x92a42db88...
  ETH: etherscan.io/token/0x92a42db88...

TRADING:
  PancakeSwap V1 (BSC) | Uniswap V2 (ETH)
  Xeggex | MintMe

SOCIAL:
  Telegram: t.me/TardigradesOfficial
  Twitter:  twitter.com/TRDGtoken
  Reddit:   reddit.com/r/TRDGToken`,

    ascii: `
                          ████████
                      ████████████████
                    ████░░░░░░░░░░░░████
       ████████    ██░░░░██████░░░░░░░░██
     ██        ██  ██░░██      ██░░░░░░██
    ██  ██  ██  ████░░██  ●  ●  ██░░░░██
    ██  ██  ██  ██  ░░██        ██░░░░██
     ██        ██    ░░██      ██░░░░██
       ████████      ░░░░██████░░░░░░██
          ██████████████░░░░░░░░░░░░██
        ██░░░░░░░░░░░░░░░░░░░░░░░░░░██
       ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
      ██░░██░░░░██░░░░██░░░░██░░░░██░░██
     ██  ██      ██  ██      ██  ██    ██
    ██  ██        ████        ████      ██

         TARDIGRADE - THE UNKILLABLE ORGANISM
              $TRDG - THE UNKILLABLE TOKEN`
}

export default function WhitepaperPage() {
    const [input, setInput] = useState('')
    const [history, setHistory] = useState<{ type: 'cmd' | 'output', text: string }[]>([])
    const [displayText, setDisplayText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const terminalRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Boot sequence on mount
    useEffect(() => {
        const bootMessages = [
            '> Initializing TRDG Terminal...',
            '> Loading blockchain data...',
            '> Connecting to BSC Network... OK',
            '> Connecting to ETH Network... OK',
            '> Security protocols verified.',
            '',
            'Welcome to TARDIGRADES FINANCE WHITEPAPER TERMINAL',
            'Type "help" for available commands.',
            ''
        ]

        let delay = 0
        bootMessages.forEach((msg, i) => {
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'output', text: msg }])
            }, delay)
            delay += 150
        })
    }, [])

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [history, displayText])

    // Type out effect for command output
    const typeOutput = (text: string) => {
        setIsTyping(true)
        setDisplayText('')
        let i = 0
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 3)) // 3 chars at a time for speed
                i += 3
            } else {
                setDisplayText(text)
                setIsTyping(false)
                setHistory(prev => [...prev, { type: 'output', text }])
                setDisplayText('')
                clearInterval(interval)
            }
        }, 5)
    }

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase()
        setHistory(prev => [...prev, { type: 'cmd', text: `$ ${cmd}` }])
        setInput('')

        if (trimmed === 'clear') {
            setHistory([])
            setDisplayText('')
            return
        }

        if (commandData[trimmed]) {
            typeOutput(commandData[trimmed])
        } else if (trimmed === '') {
            // Do nothing for empty
        } else {
            setHistory(prev => [...prev, { type: 'output', text: `Command not found: "${trimmed}". Type "help" for commands.` }])
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isTyping) {
            handleCommand(input)
        }
    }

    return (
        <main className="min-h-screen text-white relative">
            <CustomCursor />
            <Header />

            <StandardHero 
                title={<>V2.0 <span className="text-trdg-cyan">WHITEPAPER</span></>}
                subtitle="High-fidelity technical documentation and strategic vision"
            />

            <div className="relative z-10 -mt-32">
                <div className="bg-gradient-to-b from-transparent via-black/90 via-5% via-black/90 via-95% to-transparent pt-32 pb-24">
                    <div className="container mx-auto px-4 flex-1 flex flex-col max-w-4xl">

                    {/* Terminal Header Bar */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">trdg-whitepaper — bash</span>
                        </div>
                        <a
                            href="https://ea6606de-4b0e-4d9c-8b09-9efbd0cf8116.filesusr.com/ugd/134033_e07d36208707464180db00aa8da37a2b.pdf"
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded bg-purple-500/20 text-purple-400 text-xs font-mono hover:bg-purple-500/30 transition-colors border border-purple-500/30"
                        >
                            <Download size={12} />
                            PDF
                        </a>
                    </div>

                    {/* Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 rounded-lg border border-white/10 bg-[#0d1117]/80 backdrop-blur-sm overflow-hidden flex flex-col min-h-[60vh] md:min-h-[70vh] shadow-2xl"
                    >
                        {/* Terminal Content */}
                        <div
                            ref={terminalRef}
                            className="flex-1 p-4 md:p-6 overflow-y-auto font-mono text-sm leading-relaxed"
                            onClick={() => inputRef.current?.focus()}
                            style={{
                                textShadow: '0 0 8px rgba(0,255,148,0.15)'
                            }}
                        >
                            {/* History */}
                            {history.map((item, i) => (
                                <div key={i} className={item.type === 'cmd' ? 'text-trdg-cyan' : 'text-gray-300 whitespace-pre-wrap'}>
                                    {item.text}
                                </div>
                            ))}

                            {/* Currently typing output */}
                            {displayText && (
                                <div className="text-gray-300 whitespace-pre-wrap">
                                    {displayText}
                                    <span className="animate-pulse text-trdg-green">█</span>
                                </div>
                            )}

                            {/* Input line */}
                            {!isTyping && (
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-trdg-green">$</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="flex-1 bg-transparent outline-none text-white caret-trdg-green"
                                        autoFocus
                                        spellCheck={false}
                                    />
                                    <span className="animate-pulse text-trdg-green">█</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Quick Commands */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {['help', 'summary', 'token', 'security', 'roadmap', 'ascii'].map(cmd => (
                            <button
                                key={cmd}
                                onClick={() => !isTyping && handleCommand(cmd)}
                                disabled={isTyping}
                                className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-gray-400 text-xs font-mono hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50"
                            >
                                {cmd}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 text-center text-[10px] text-gray-600 font-mono">
                        TARDIGRADES FINANCE • WHITEPAPER v2.0 • JANUARY 2025
                    </div>
                </div>
            </div>
        </div>

            <Footer />
        </main>
    )
}
