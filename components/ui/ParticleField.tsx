'use client'

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    alpha: number
    color: string
}

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const colors = ['#00F0FF', '#00FF94', '#a855f7', '#f472b6']
        const isMobile = window.innerWidth < 768
        const particles: Particle[] = []
        const particleCount = isMobile ? 30 : 60

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.4 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        }

        let animationId: number

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.alpha
                ctx.fill()

                // Skip connections on mobile for performance
                if (!isMobile) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j]
                        const dx = p.x - p2.x
                        const dy = p.y - p2.y
                        const distSq = dx * dx + dy * dy

                        if (distSq < 10000) { // 100 * 100
                            const dist = Math.sqrt(distSq)
                            ctx.beginPath()
                            ctx.moveTo(p.x, p.y)
                            ctx.lineTo(p2.x, p2.y)
                            ctx.strokeStyle = p.color
                            ctx.globalAlpha = (1 - dist / 100) * 0.1
                            ctx.stroke()
                        }
                    }
                }
            })

            ctx.globalAlpha = 1
            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-30"
        />
    )
}
