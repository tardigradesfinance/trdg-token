'use client'

import { motion } from 'framer-motion'
import { Book, Terminal, Activity, Search } from 'lucide-react'
import { OrganicBackground } from '@/components/ui/SectionBackgrounds'

const logs = [
    {
        tag: "LOG_01",
        title: "The Emergence",
        content: "In the vast expanse of the universe, a project known as $TRDG emerged with a captivating mission: to discover the most formidable creature ever to exist. Its founders were driven by a visionary idea that in times of turbulent market fluctuations, our bodies would enter a state of Cryptobiosis, mirroring the incredible resilience of tardigrades, the legendary microscopic creatures capable of surviving in extreme environments."
    },
    {
        tag: "LOG_02",
        title: "The Extremophiles",
        content: "For the holders of $TRDG, this notion carried profound meaning. The tokens became a treasured asset, a beacon of hope that could resurface amidst the chaos of unpredictable circumstances. The community embracing $TRDG earned the moniker 'Extremophiles,' embodying the spirit of those who fearlessly tackle adversity head-on."
    },
    {
        tag: "LOG_03",
        title: "Interstellar Reach",
        content: "Facilitating its interstellar reach, $TRDG ventured onto both the Binance Smart Chain (BSC) and Ethereum (ETH) blockchain networks. This cross-chain presence allowed the $TRDG Community Reward Token to bridge communities across galaxies, connecting traders and enthusiasts with a shared passion for exploration and resilience."
    },
    {
        tag: "LOG_04",
        title: "The Magic of Scarcity",
        content: "The magic of $TRDG unfolded with each transaction, which carried a 5% tax. Half of this tax rewarded the loyal holders, returning 2.5% of every transaction directly to their wallets. The other half embarked on a mysterious journey into a burn wallet—a seemingly impenetrable vault, forever inaccessible. Within the $TRDG community, speculation ran rife about the secrets concealed within."
    }
]

export function ArchiveLogs() {
    return (
        <section id="archives" className="relative py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
            <OrganicBackground />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-lg bg-trdg-green/10 flex items-center justify-center text-trdg-green">
                        <Terminal size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter">
                            ARCHIVE <span className="text-trdg-green">LOGS</span>
                        </h2>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Database: Chronicles of the Extremophiles</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {logs.map((log, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-trdg-green/40 overflow-hidden will-change-transform"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Book size={100} />
                            </div>

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="hidden sm:block text-[10px] font-mono text-trdg-green rotate-180 [writing-mode:vertical-lr] opacity-30">
                                    {log.tag} // SEC_ENCRYPTED
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold font-orbitron text-white mb-4 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-trdg-green animate-pulse" />
                                        {log.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-md leading-relaxed font-light">
                                        {log.content}
                                    </p>
                                </div>
                            </div>

                            {/* HUD scanning Effect */}
                            <motion.div
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 h-0.5 bg-trdg-green/50 w-0 group-hover:w-full duration-1000"
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-trdg-green/10 via-black to-black border border-white/5 relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-4xl">
                        <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
                            THE FINAL <span className="text-trdg-green">REVELATION</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Finally, the moment arrived to reveal the true might of tardigrades—the undisputed champions of resilience in the universe. These microscopic marvels embodied the indomitable spirit of $TRDG, symbolizing the untapped potential residing within every token holder. Their remarkable ability to withstand the harshest conditions served as a powerful metaphor, inspiring the $TRDG community to confront and conquer any challenge they encountered.
                        </p>
                        <p className="text-trdg-green font-mono text-sm border-l-2 border-trdg-green pl-4 italic">
                            "Together, let us delve into uncharted territories, forging a path illuminated by the spirit of the tardigrades—the invincible creatures who remind us of our own extraordinary strength."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
