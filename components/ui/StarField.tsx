'use client'

import { useRef, useEffect } from 'react'

export function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        canvas.width = width
        canvas.height = height

        // Star properties
        const stars: { x: number; y: number; z: number; color: string; sizeOffset: number }[] = []
        const numStars = 400 // Reduced significantly for subtlety
        const centerX = width / 2
        const centerY = height / 2

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - centerX,
                y: Math.random() * height - centerY,
                z: Math.random() * width,
                color: Math.random() > 0.9 ? '#00F0FF' : '#aaaaaa', // Mostly dim white/grey, rare cyan
                sizeOffset: Math.random()
            })
        }

        let speed = 0.2 // Very slow, majestic drift
        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX - centerX) * 0.05
            mouseY = (e.clientY - centerY) * 0.05
        }

        const animate = () => {
            // Fix for flashing: Fully clear the canvas instead of using transparency trails
            ctx.clearRect(0, 0, width, height)

            const cx = centerX + mouseX
            const cy = centerY + mouseY

            stars.forEach((star) => {
                star.z -= speed
                if (star.z <= 0) {
                    star.z = width
                    star.x = Math.random() * width - centerX
                    star.y = Math.random() * height - centerY
                }

                const k = 128.0 / star.z
                const px = star.x * k + cx
                const py = star.y * k + cy

                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    // Calculate size and opacity based on Z depth
                    const depth = Math.max(0, 1 - star.z / width)
                    const size = depth * 2.5 * star.sizeOffset
                    const alpha = depth * 0.8 // Max opacity 0.8 (never fully opaque bright)

                    ctx.fillStyle = star.color
                    ctx.globalAlpha = alpha
                    ctx.beginPath()
                    ctx.arc(px, py, size, 0, Math.PI * 2)
                    ctx.fill()

                    // Only very close stars get a tiny glow
                    if (depth > 0.8 && star.color === '#00F0FF') {
                        ctx.shadowBlur = 10
                        ctx.shadowColor = star.color
                    } else {
                        ctx.shadowBlur = 0
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', resize)
        }

    }, [])

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* CSS-based Nebula Background - Made slightly darker/subtler */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />

            {/* Canvas Stars */}
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    )
}
