'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stickers = [
    "ARE YOU MY FRIEND.png", "BE SAFE.png", "BINANCE SOON.png", "CALL ME MOSS PIGLET.png",
    "CHECK.png", "COME WITH ME IF YOU WANT TO LIVE.png", "ELON MUSK LOVES EXTREMOPHILES.png",
    "FUNDS SAFU.png", "GET SUM TRDG.png", "GM.png", "GOT BNB.png", "GREEN BARS.png",
    "HAPPY 1YEAR.png", "HES DOING RESEARCH.png", "HOLD UP ITS RINGING.png", "HOW YOU DOIN.png",
    "HOWS THE WEATHER.png", "I GOT YOUR BACK.png", "IS IT COLD OUT.png", "IS IT HOT OUT.png",
    "LAYAH BULLISH.png", "LETS DRIVE.png", "LOOK MA NO HANDS.png", "MOON SOON.png",
    "MR BIG WHALE.png", "NO MIGRATION.png", "NO WAY.png", "NOM NOM.png", "OOPS MY BAD.png",
    "PCS UNI.png", "PEACE LOVE TRDG.png", "PUMP EEEET.png", "RAID TWITTER.png",
    "SELLERS GET REKT.png", "SER PLZ NO FUD.png", "SLUMDOGE.png", "STRONGEST CREATURES.png",
    "TARDIGRADES STAY HUNGRY.png", "THATMARTINIGUY.png", "THEMOONCARL.png", "THREADS.png",
    "TIME TO TAKE A BATH.png", "TRDG HOLDERS BE LIKE.png", "TRDG PEPE.png", "TRDG REFRESH.png",
    "UPONLYCOBIE.png", "WATER BEAR DONT CARE.png", "WELCOME HOME.png", "WHAT DID YOU SAY.png",
    "WHAT DIP.png", "WHAT.png", "WHEN COINBASE.png", "WHERE IS MR PRINCE.png", "YO WHAT UP.png",
    "YOU CANT SEE ME.png", "YUM YOU LIKE PANCAKES TOO.png"
]

export function StickerMarquee() {
    // Split stickers into two halves for two rows to increase variety
    const row1 = [...stickers].sort(() => Math.random() - 0.5)
    const row2 = [...stickers].sort(() => Math.random() - 0.5)

    return (
        <section className="py-20 bg-black overflow-hidden border-y border-white/5 relative z-10">
            <div className="flex flex-col gap-12">

                {/* Row 1: Moving Right */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -4000] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-12 whitespace-nowrap"
                    >
                        {[...row1, ...row1, ...row1].map((sticker, i) => (
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

                {/* Row 2: Moving Left */}
                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={{ x: [-4000, 0] }}
                        transition={{
                            duration: 70,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-12 whitespace-nowrap"
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
