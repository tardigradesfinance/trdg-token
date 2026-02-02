'use client'

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { StarField } from "@/components/ui/StarField"
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const metadata = {
    title: "FAQ - Frequently Asked Questions",
    description: "Common questions about TRDG token, tardigrades, buying process, tokenomics, security, and more. Get answers about the most resilient memecoin.",
    keywords: ["TRDG FAQ", "tardigrade token questions", "how to buy TRDG", "is TRDG safe", "TRDG tokenomics", "tardigrade cryptocurrency questions", "memecoin FAQ"]
}

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What is TRDG Token?",
        answer: "TRDG is a deflationary reflection token inspired by tardigrades - the most resilient creatures in the universe. Launched in 2021 on both Binance Smart Chain (BSC) and Ethereum (ETH), TRDG features burned liquidity pools (LP burned for eternity) and renounced contracts, making it one of the safest memecoin investments. Holders automatically earn reflections from every transaction."
    },
    {
        question: "How do I buy TRDG?",
        answer: "You can buy TRDG on two networks:\n\n**BSC (BNB Chain)**: Use PancakeSwap V1 to swap BNB for TRDG\n**ETH (Ethereum)**: Use Uniswap V2 to swap ETH for TRDG\n\nContract Address (same on both chains): 0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5\n\nMake sure to use a wallet like MetaMask or Trust Wallet, and always verify the contract address."
    },
    {
        question: "What makes tardigrades special?",
        answer: "Tardigrades (also known as water bears or moss piglets) are microscopic organisms that can survive extreme conditions including:\n\n• Temperatures from near absolute zero to 300°F\n• Radiation levels 1000x higher than lethal doses for humans\n• Vacuum of space\n• Crushing pressure\n• Years without food or water\n\nThis incredible resilience inspired TRDG's mission to be the most survivor-focused token in crypto."
    },
    {
        question: "Is TRDG safe to invest in?",
        answer: "TRDG has multiple safety features:\n\n✅ **LP Burned Forever**: 100% of liquidity is burned - no rug pull possible\n✅ **Contract Renounced**: Developers cannot modify the contract\n✅ **Dual-Chain Deployment**: Listed on BSC and ETH since 2021\n✅ **Deflationary**: Tokens are continuously burned, reducing supply\n✅ **Reflection Rewards**: Holders automatically earn from transactions\n\nAs with any cryptocurrency, please do your own research and only invest what you can afford to lose."
    },
    {
        question: "How do the reflection rewards work?",
        answer: "TRDG uses a 5% transaction tax that is redistributed to all holders:\n\n• When anyone buys, sells, or transfers TRDG, 5% is collected\n• This 5% is automatically distributed to all existing holders proportionally\n• The more TRDG you hold, the more reflections you earn\n• Reflections appear automatically in your wallet - no claiming required\n\nThis creates a passive income stream for long-term holders."
    },
    {
        question: "What are the tokenomics?",
        answer: "**Initial Supply (per chain)**: 100 Quadrillion (100,000T) tokens\n**Tax**: 5% on all transactions (redistributed to holders)\n**Burned**: Over 50% of total supply burned permanently\n**Liquidity**: 100% locked (LP tokens burned)\n**Contract**: Renounced (immutable)\n**Chains**: BSC (PancakeSwap V1) + ETH (Uniswap V2)"
    },
    {
        question: "Why are there two chains (BSC and ETH)?",
        answer: "TRDG was launched on both BSC and Ethereum to give users maximum flexibility:\n\n**BSC Advantages**:\n• Lower transaction fees\n• Faster transactions\n• Popular with retail investors\n\n**ETH Advantages**:\n• More established ecosystem\n• Higher liquidity for larger trades\n• Preferred by institutional investors\n\nBoth chains have independent supplies but the same tokenomics and safety features."
    },
    {
        question: "How much TRDG has been burned?",
        answer: "Over 50% of the total supply across both chains has been permanently burned to the dead wallet (0x000...dead). This deflationary model means the circulating supply continuously decreases, potentially increasing scarcity and value over time. Check our real-time stats page for current burn statistics."
    },
    {
        question: "Can I earn passive income with TRDG?",
        answer: "Yes! TRDG holders automatically earn passive income through reflection rewards. Every time someone buys, sells, or transfers TRDG, 5% of that transaction is distributed proportionally to all holders. Simply hold TRDG in your wallet and watch your balance grow over time."
    },
    {
        question: "What happened since TRDG launched in 2021?",
        answer: "TRDG has survived market crashes, bear markets, and thousands of failed tokens since 2021. True to the tardigrade spirit of resilience:\n\n• Liquidity remains locked forever\n• Community stayed active through bear markets\n• Contract continues to function perfectly\n• Reflection rewards still distributing\n• No developer intervention possible (renounced)\n\nWe've proven the 'survivor token' narrative isn't just marketing - it's reality."
    },
    {
        question: "How can I track my TRDG holdings?",
        answer: "You can track your TRDG in several ways:\n\n1. **In your wallet**: Your balance updates automatically with reflections\n2. **Block explorers**: View your address on BSCScan or Etherscan\n3. **Our Stats Page**: Use the built-in wallet tracker to see detailed holdings, rewards, and USD value\n4. **Portfolio trackers**: Add TRDG to CoinGecko portfolio or similar tools"
    },
    {
        question: "What is the contract address?",
        answer: "The TRDG contract address is the SAME on both BSC and Ethereum:\n\n**0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5**\n\nAlways verify this address before making any trades. Never trust contract addresses from unofficial sources."
    },
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* JSON-LD FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <div className="fixed inset-0 z-0">
                <StarField />
            </div>
            <CustomCursor />
            <Header />

            <div className="pt-28 pb-16 min-h-screen relative z-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6">
                            <HelpCircle className test-trdg-cyan animate-pulse" size={16} />
                            <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest font-black">
                                Frequently Asked Questions
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-orbitron font-black text-white mb-4 uppercase tracking-tighter">
                            TRDG <span className="text-trdg-cyan text-glow-trdg">FAQ</span>
                        </h1>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
                            Everything you need to know
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 overflow-hidden hover:border-trdg-cyan/30 transition-all"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 flex items-start justify-between gap-4 text-left transition-colors hover:bg-white/5"
                                >
                                    <div className="flex items-start gap-3 flex-1">
                                        <HelpCircle className="text-trdg-cyan shrink-0 mt-1" size={20} />
                                        <h3 className="text-lg font-orbitron font-bold text-white">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="shrink-0">
                                        {openIndex === index ? (
                                            <ChevronUp className="text-trdg-cyan" size={20} />
                                        ) : (
                                            <ChevronDown className="text-gray-500" size={20} />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pl-15">
                                                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="https://t.me/TardigradesOfficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg bg-trdg-cyan/20 border border-trdg-cyan/30 text-trdg-cyan font-bold hover:bg-trdg-cyan/30 transition-all"
                            >
                                Join Telegram
                            </a>
                            <a
                                href="https://twitter.com/TRDGtoken"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-bold hover:border-trdg-cyan/30 transition-all"
                            >
                                Follow on X
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
