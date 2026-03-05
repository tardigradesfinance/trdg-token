'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, ExternalLink, RefreshCw } from 'lucide-react'
import Image from 'next/image'

export function MerchStore() {
    const [merch, setMerch] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMerch = async () => {
            try {
                const res = await fetch('/api/printful')
                if (!res.ok) throw new Error('Failed to fetch merch')
                const data = await res.json()
                setMerch(data)
            } catch (error) {
                console.error('Error fetching merchandise:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchMerch()
    }, [])

    if (loading) {
        return (
            <section className="py-24 relative overflow-hidden bg-[#0A0D10] border-t border-white/5" id="store">
                <div className="container mx-auto px-4 flex justify-center items-center py-20">
                    <RefreshCw className="w-8 h-8 text-trdg-cyan animate-spin" />
                </div>
            </section>
        )
    }

    if (!merch || !merch.details) {
        return null;
    }

    // Attempt to get a high quality image from details
    let imageUrl = merch.thumbnail_url;
    // Get the first mockup or file if available
    const syncVariants = merch.details.sync_variants || [];
    if (syncVariants.length > 0 && syncVariants[0].files && syncVariants[0].files.length > 0) {
        // Try to find a mockup
        const mockup = syncVariants[0].files.find((f: any) => f.type === 'preview' || f.type === 'mockup');
        if (mockup) {
            imageUrl = mockup.preview_url;
        }
    }

    // Clean up product name
    const cleanName = merch.name.replace(" - Fugligrades 'Hide yo kids, hide yo wife'", "");

    return (
        <section className="py-24 relative overflow-hidden bg-[#0A0D10] border-t border-white/5" id="store">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 blur-3xl rounded-full bg-trdg-cyan/30 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 text-trdg-cyan text-xs font-mono tracking-widest uppercase mb-6"
                    >
                        <ShoppingBag size={14} /> Official Arsenal
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-6 uppercase tracking-wider glow-text"
                    >
                        Gear Up For Space
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed"
                    >
                        Rep the most indestructible creature in the cosmos. High-quality orbital armor shipped directly to your launch pad.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-space-light border border-white/10 rounded-2xl overflow-hidden hover:border-trdg-cyan/30 transition-all duration-500 group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                            {/* Image side */}
                            <div className="relative p-8 flex justify-center items-center bg-white/5 h-full min-h-[400px]">
                                <Image
                                    src={imageUrl}
                                    alt={cleanName}
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out p-6"
                                />
                                <div className="absolute top-4 left-4 bg-trdg-cyan text-black font-orbitron text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded shadow-[0_0_10px_rgba(0,240,255,0.5)] z-10">
                                    New Drop
                                </div>
                            </div>

                            {/* Info side */}
                            <div className="p-8 md:p-12 md:pl-0 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4 line-clamp-2">
                                    {cleanName}
                                </h3>

                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex text-yellow-400">
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                    </div>
                                    <span className="text-gray-400 font-mono text-xs">5.0 Orbital Rating</span>
                                </div>

                                <p className="text-gray-400 font-mono text-sm mb-8 leading-relaxed">
                                    Made with premium extremophile fabrics. Designed to survive asteroid impacts, solar storms, and the fiercest bear markets. Wear the ultimate proof of resilience.
                                </p>

                                <div className="mt-auto">
                                    <button
                                        className="w-full relative overflow-hidden group bg-trdg-cyan text-black px-6 py-4 rounded-lg font-orbitron font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <span className="relative z-10">Purchase Cargo</span>
                                        <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    </button>
                                    <p className="text-center font-mono text-[10px] text-gray-500 mt-4 uppercase tracking-widest">
                                        Secure Checkout · Worldwide Shipping
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
