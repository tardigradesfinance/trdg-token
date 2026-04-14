'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ShieldCheck, Activity, Cpu, Wifi, Database, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react'

const healthChecks = [
    { name: "Smart Contract Verification", status: "VERIFIED", details: "0x92a42...68b5", score: 100 },
    { name: "Liquidity Lock Status", status: "STABLE", details: "Permanent Burn / Lock", score: 98 },
    { name: "API Node Connectivity", status: "OPTIMAL", details: "Multi-region redundancy", score: 100 },
    { name: "Global CDN Health", status: "OPERATIONAL", details: "99.9% Up-time maintained", score: 99 },
    { name: "Cross-Chain Persistence", status: "SYRIOUS", details: "Native ETH & BSC Parity", score: 100 },
    { name: "Community Governance", status: "DECENTRALIZED", details: "100% On-chain sentiment", score: 95 }
]

export function SystemDiagnostics() {
    const [progress, setProgress] = useState(0)
    const [isScanning, setIsScanning] = useState(true)

    useEffect(() => {
        if (isScanning) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsScanning(false)
                        return 100
                    }
                    return prev + 1
                })
            }, 30)
            return () => clearInterval(interval)
        }
    }, [isScanning])

    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left side: Visual HUD Diagnostic */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
                        <div className="relative w-64 h-64 mb-8">
                            {/* Rotating outer ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-trdg-cyan/30"
                            />
                            {/* Inner ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-white/5"
                            />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-trdg-cyan mb-2"
                                >
                                    <ShieldCheck size={64} />
                                </motion.div>
                                <span className="text-4xl font-orbitron font-black text-white">{progress}%</span>
                                <span className="text-[10px] font-mono text-trdg-cyan uppercase tracking-widest mt-2">
                                    {isScanning ? "SCANNING RESOURCES..." : "SYSTEM OPTIMAL"}
                                </span>
                            </div>
                        </div>

                        <button 
                            onClick={() => { setProgress(0); setIsScanning(true); }}
                            className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 text-[10px] font-mono text-gray-400 hover:text-white hover:border-trdg-cyan/50 transition-all uppercase tracking-widest"
                        >
                            <RefreshCcw size={14} className={isScanning ? "animate-spin" : ""} />
                            Re-Run Diagnostics
                        </button>
                    </div>

                    {/* Right side: Detailed Results Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {healthChecks.map((check, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors group"
                            >
                                <div className="mt-1">
                                    {progress > (idx + 1) * 15 ? (
                                        <CheckCircle2 size={18} className="text-trdg-green" />
                                    ) : (
                                        <Activity size={18} className="text-gray-700 animate-pulse" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-[11px] font-orbitron font-bold text-gray-300 uppercase tracking-wider">{check.name}</h4>
                                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${progress > (idx + 1) * 15 ? 'bg-trdg-green/10 text-trdg-green' : 'bg-white/5 text-gray-600'}`}>
                                            {progress > (idx + 1) * 15 ? check.status : "PENDING..."}
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-mono text-gray-500 mb-2">{check.details}</p>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: progress > (idx + 1) * 15 ? `${check.score}%` : "0%" }}
                                            className="h-full bg-trdg-green/50"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
