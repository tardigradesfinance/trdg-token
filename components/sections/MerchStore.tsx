'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, ExternalLink, Star, Tag } from 'lucide-react'
import Image from 'next/image'

const REDBUBBLE_PRODUCTS = [
  {
    id: 'merch-01',
    name: "Water Bear Essential T-Shirt",
    price: "$15.74",
    category: "Apparel",
    link: "https://www.redbubble.com/i/t-shirt/Water-Bear-by-TRDG/76753012/z5wf",
    imageUrl: "https://ih1.redbubble.net/image.2949885607.3012/ssrco,essential_tee,mens_01,c0daed:cfa586e239,front,product_square,x600.jpg"
  },
  {
    id: 'merch-02',
    name: "TRDG Trumpet Sticker",
    price: "$1.57",
    category: "Accessories",
    link: "https://www.redbubble.com/i/sticker/TRDG-Trumpet-by-TRDG/94045084/7sgk",
    imageUrl: "https://ih1.redbubble.net/image.2950717867.5084/st,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  {
    id: 'merch-03',
    name: "TRDG Beauty Sticker",
    price: "$1.57",
    category: "Accessories",
    link: "https://www.redbubble.com/i/sticker/TRDG-Beauty-by-TRDG/94045681/7sgk",
    imageUrl: "https://ih1.redbubble.net/image.2950064548.5681/st,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  {
    id: 'merch-04',
    name: "Ready For Space Throw Blanket",
    price: "$30.09",
    category: "Home Goods",
    link: "https://www.redbubble.com/i/throw-blanket/Ready-For-Space-by-TRDG/94057761/vzy2",
    imageUrl: "https://ih1.redbubble.net/image.2950496618.7761/ur,blanket_medium_bed,square,x600.1.jpg"
  },
  {
    id: 'merch-05',
    name: "Hello Tardigrade Greeting Card",
    price: "$2.10",
    category: "Stationery",
    link: "https://www.redbubble.com/i/greeting-card/Hello-Tardigrade-by-TRDG/94062206/qjsu",
    imageUrl: "https://ih1.redbubble.net/image.2950653122.2206/papergc,300x,w,f8f8f8-pad,600x600,f8f8f8.jpg"
  },
  {
    id: 'merch-06',
    name: "TRDG LOGO iPhone Tough Case",
    price: "$24.94",
    category: "Tech Gear",
    link: "https://www.redbubble.com/i/iphone-case/TRDG-LOGO-by-TRDG/119324971/3bp7",
    imageUrl: "https://ih1.redbubble.net/image.5475037188.4971/icr,iphone_17_tough,back,a,x600-pad,600x600,f8f8f8.jpg"
  }
]

export function MerchStore() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="merch">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-trdg-cyan/10 border border-trdg-cyan/20 text-trdg-cyan text-xs font-mono tracking-widest uppercase mb-6"
                    >
                        <ShoppingBag size={14} /> Redbubble Official Shop
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-6 uppercase tracking-wider glow-text"
                    >
                        GEAR UP FOR <span className="text-trdg-cyan">SPACE</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto font-mono text-sm leading-relaxed"
                    >
                        Rep the most indestructible creature in the cosmos. High-quality orbital armor and tactical gear curated for the Extremophile colony.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REDBUBBLE_PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0d1117]/60 backdrop-blur-md rounded-2xl border border-white/5 hover:border-trdg-cyan/40 transition-all duration-500 overflow-hidden group flex flex-col h-full"
                        >
                            {/* Product Image Area */}
                            <div className="relative aspect-square bg-white/5 overflow-hidden group">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out p-4 md:p-8"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="bg-trdg-cyan/10 border border-trdg-cyan/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                                        <Tag size={10} className="text-trdg-cyan" />
                                        <span className="text-[9px] font-mono text-trdg-cyan font-bold uppercase tracking-widest">{product.category}</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Product Info */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-white group-hover:text-trdg-cyan transition-colors line-clamp-2 leading-tight">
                                        {product.name}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex text-yellow-500/50">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Certified Item</span>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Price Unit</span>
                                        <span className="text-xl font-orbitron font-black text-white">{product.price}</span>
                                    </div>
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-trdg-cyan text-black font-orbitron font-black uppercase text-[10px] tracking-widest hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:-translate-y-1"
                                    >
                                        Buy Now
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA to shop everything */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a
                        href="https://www.redbubble.com/people/TRDG/shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-orbitron font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all group"
                    >
                        <span>View Entire Global Collection</span>
                        <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <p className="mt-6 text-gray-600 font-mono text-[10px] uppercase tracking-widest">
                        Fulfilled by Redbubble · Global Shipping · Quality Guaranteed
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
