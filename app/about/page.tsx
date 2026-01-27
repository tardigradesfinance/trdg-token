import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/ui/CustomCursor"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Shield, Flame, Lock, Users, Zap, Heart, Star, Globe, Award, Calendar } from "lucide-react"

export const metadata: Metadata = {
    title: "About $TRDG | The Tardigrade Story",
    description: "Learn about Tardigrades Finance, the most resilient token in crypto. Founded in 2021, $TRDG has survived every market condition with LP burned for eternity and contract renounced.",
    openGraph: {
        title: "About $TRDG | The Tardigrade Story",
        description: "Learn about Tardigrades Finance, the most resilient token in crypto.",
    }
}

const stats = [
    { label: "Launch Date", value: "March 2021", icon: Calendar },
    { label: "Survived Bear Markets", value: "2+", icon: Shield },
    { label: "LP Status", value: "Burned Forever", icon: Flame },
    { label: "Contract Status", value: "Renounced", icon: Lock },
]

const values = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Developed with safety as the top priority. LP tokens were burned, not locked. Contract was renounced to prevent any tampering."
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "The community's time and efforts are always appreciated as we become stronger day by day. Everyone has a special skillset to contribute."
    },
    {
        icon: Zap,
        title: "No Migration Ever",
        description: "$TRDG has no active migration and no plans to migrate. If it's not broke, why try and fix it? We stand strong with our original contract."
    },
    {
        icon: Heart,
        title: "Transparent & Trusted",
        description: "The search for projects with transparency and trust as core values is challenging. TRDG has maintained this foundation since launch."
    }
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <CustomCursor />
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-trdg-cyan/5 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 mb-6">
                            <Globe className="text-trdg-cyan" size={16} />
                            <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest font-black">The Tardigrade Story</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase tracking-tighter">
                            About <span className="text-trdg-cyan">$TRDG</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            Blockchain Tardigrades! $TRDG is a symbol of the strongest creature in the universe,
                            the Tardigrade. Listed on BSC and ETH networks since 2021.
                        </p>
                        <div className="text-3xl font-bold text-trdg-green font-orbitron">#BeTheFuture 💧🐻</div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-white/5 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <stat.icon className="mx-auto mb-3 text-trdg-cyan" size={28} />
                                <div className="text-2xl font-bold text-white font-orbitron">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-mono uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-8 text-center">
                            Why is <span className="text-trdg-green">TRDG</span> Different?
                        </h2>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The search for cryptocurrency projects with transparency and trust as core values has gotten
                                increasingly challenging over time. TRDG has already created and maintained an initial concrete
                                foundation since its launch on <strong className="text-white">March 8th, 2021</strong>.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                As time moves forward, we expect many more updates in the coming years to help propel our
                                project to places we could never imagine! The community's time and efforts are always appreciated
                                as we become stronger day by day.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                It is the daily mission of Tardigrades to survive market cycles and FUD! Despite any challenges,
                                we are ready to continue our growth. It is amazing to see the level of happiness and contentment
                                that tardigrades demonstrate despite being microscopic organisms.
                            </p>
                            <p className="text-xl text-trdg-cyan font-bold text-center my-12">
                                As a scavenger of tiny foliage and a focus on survival, Tardigrades are Extremophiles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-zinc-900/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-16 text-center">
                        Core <span className="text-purple-400">Values</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {values.map((value, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-black border border-white/10 hover:border-trdg-cyan/30 transition-all">
                                <value.icon className="text-trdg-cyan mb-4" size={32} />
                                <h3 className="text-xl font-orbitron font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tokenomics Summary */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-12 text-center">
                            The <span className="text-orange-400">5% Tax</span> System
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-center">
                                <Flame className="text-orange-500 mx-auto mb-4" size={48} />
                                <div className="text-4xl font-black text-orange-400 font-orbitron mb-2">2.5%</div>
                                <div className="text-xl font-bold text-white mb-2">Burn</div>
                                <p className="text-gray-400 text-sm">Every transaction permanently removes tokens from circulation</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-trdg-green/10 border border-trdg-green/20 text-center">
                                <Award className="text-trdg-green mx-auto mb-4" size={48} />
                                <div className="text-4xl font-black text-trdg-green font-orbitron mb-2">2.5%</div>
                                <div className="text-xl font-bold text-white mb-2">Reward</div>
                                <p className="text-gray-400 text-sm">Distributed proportionally to all $TRDG holders</p>
                            </div>
                        </div>
                        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
                            Every time someone buys, sells, trades, sends or receives using our locked contract,
                            a percentage of that transaction is moved to an ever-growing burn wallet and another
                            part is rewarded to all holders of $TRDG. These deflationary properties guarantee
                            continued growth while decreasing circulating supply.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 bg-gradient-to-r from-trdg-cyan/5 to-purple-500/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-8">
                        Meet the <span className="text-trdg-cyan">Founder</span>
                    </h2>
                    <div className="inline-block p-8 rounded-2xl bg-black border border-white/10">
                        <div className="text-6xl mb-4">👑</div>
                        <div className="text-2xl font-orbitron font-bold text-white mb-2">jShiz</div>
                        <div className="text-gray-400 mb-4">Creator of $TRDG</div>
                        <Link
                            href="https://t.me/jShiz"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-trdg-cyan text-black font-bold hover:bg-trdg-cyan/80 transition-colors"
                        >
                            Contact on Telegram
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contract Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-black mb-8">
                        Contract <span className="text-trdg-green">Address</span>
                    </h2>
                    <p className="text-gray-400 mb-8">Same on Both BSC and ETH Networks</p>
                    <div className="inline-block p-6 rounded-2xl bg-zinc-900 border border-white/10">
                        <code className="text-trdg-cyan font-mono text-sm md:text-lg break-all">
                            0x92a42db88ed0f02c71d439e55962ca7cab0168b5
                        </code>
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <Link
                            href="https://bscscan.com/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                        >
                            View on BSCScan
                        </Link>
                        <Link
                            href="https://etherscan.io/token/0x92a42db88ed0f02c71d439e55962ca7cab0168b5"
                            target="_blank"
                            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 transition-colors"
                        >
                            View on Etherscan
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
