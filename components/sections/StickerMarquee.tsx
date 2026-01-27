'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const stickers = [
    "are-you-my-friend.png", "be-safe.png", "binance-soon.png", "call-me-moss-piglet.png",
    "check.png", "come-with-me-if-you-want-to-live.png", "elon-musk-loves-extremophiles.png",
    "funds-safu.png", "get-sum-trdg.png", "gm.png", "got-bnb.png", "green-bars.png",
    "happy-1year.png", "hes-doing-research.png", "hold-up-its-ringing.png", "how-you-doin.png",
    "hows-the-weather.png", "i-got-your-back.png", "is-it-cold-out.png", "is-it-hot-out.png",
    "layah-bullish.png", "lets-drive.png", "look-ma-no-hands.png", "moon-soon.png",
    "mr-big-whale.png", "no-migration.png", "no-way.png", "nom-nom.png", "oops-my-bad.png",
    "pcs-uni.png", "peace-love-trdg.png", "pump-eeeet.png", "raid-twitter.png",
    "sellers-get-rekt.png", "ser-plz-no-fud.png", "slumdoge.png", "strongest-creatures.png",
    "tardigrades-stay-hungry.png", "thatmartiniguy.png", "themooncarl.png", "threads.png",
    "time-to-take-a-bath.png", "trdg-holders-be-like.png", "trdg-pepe.png", "trdg-refresh.png",
    "uponlycobie.png", "water-bear-dont-care.png", "welcome-home.png", "what-did-you-say.png",
    "what-dip.png", "what.png", "when-coinbase.png", "where-is-mr-prince.png", "yo-what-up.png",
    "you-cant-see-me.png", "yum-you-like-pancakes-too.png"
]

export function StickerMarquee() {
    const row1 = [...stickers].sort(() => 0.5 - Math.random())
    const row2 = [...stickers].sort(() => 0.5 - Math.random())
    const containerRef = useRef<HTMLElement>(null)
    const isInView = useInView(containerRef, { amount: 0.1 })

    return (
        <section ref={containerRef} className="py-20 bg-black overflow-hidden border-y border-white/5 relative z-10">
            <div className="flex flex-col gap-12">

                {/* Row 1: Moving Right */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={isInView ? { x: [0, -4000] } : {}}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-12 whitespace-nowrap will-change-transform"
                    >
                        {[...row1, ...row1, ...row1].map((sticker, i) => (
                            <div key={i} className="relative w-40 h-40 flex-shrink-0 group hover:scale-110 transition-transform duration-300 will-change-transform">
                                <Image
                                    src={`/images/stickers/${sticker}`}
                                    alt="sticker"
                                    fill
                                    className="object-contain filter brightness-90 contrast-125 group-hover:brightness-100 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Moving Left */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={isInView ? { x: [-4000, 0] } : {}}
                        transition={{
                            duration: 70,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-12 whitespace-nowrap will-change-transform"
                    >
                        {[...row2, ...row2, ...row2].map((sticker, i) => (
                            <div key={i} className="relative w-40 h-40 flex-shrink-0 group hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={`/images/stickers/${sticker}`}
                                    alt="sticker"
                                    fill
                                    className="object-contain filter brightness-90 contrast-125 group-hover:brightness-100 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
