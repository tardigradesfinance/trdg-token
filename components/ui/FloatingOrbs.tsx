'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function FloatingOrbs() {
    const { scrollY } = useScroll()

    const y1 = useTransform(scrollY, [0, 3000], [0, -500])
    const y2 = useTransform(scrollY, [0, 3000], [0, -300])
    const y3 = useTransform(scrollY, [0, 3000], [0, -700])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Large Cyan Orb */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-trdg-cyan/5 blur-[100px]"
            />

            {/* Green Orb */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[50vh] -left-32 w-[400px] h-[400px] rounded-full bg-trdg-green/5 blur-[80px]"
            />

            {/* Purple Orb */}
            <motion.div
                style={{ y: y3 }}
                className="absolute top-[150vh] right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[100px]"
            />

            {/* Pink Orb */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[250vh] -left-20 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[60px]"
            />

            {/* Orange Orb */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[350vh] right-10 w-[400px] h-[400px] rounded-full bg-orange-500/3 blur-[80px]"
            />
        </div>
    )
}
