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
        const isMobile = width < 768
        canvas.width = width
        canvas.height = height

        // Star properties
        const stars: { x: number; y: number; z: number; color: string; sizeOffset: number }[] = []
        const numStars = isMobile ? 150 : 350
        const centerX = width / 2
        const centerY = height / 2

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - centerX,
                y: Math.random() * height - centerY,
                z: Math.random() * width,
                color: Math.random() > 0.9 ? '#00F0FF' : '#ffffff',
                sizeOffset: Math.random()
            })
        }

        let speed = isMobile ? 0.15 : 0.2
        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0

        const handleMouseMove = (e: MouseEvent) => {
            targetX = (e.clientX - centerX) * 0.03
            targetY = (e.clientY - centerY) * 0.03
        }

        let isVisible = true
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
        }, { threshold: 0.1 })
        observer.observe(canvas)

        const animate = () => {
            if (isVisible) {
                ctx.clearRect(0, 0, width, height)

                // Dynamic easing for mouse parallax
                mouseX += (targetX - mouseX) * 0.05
                mouseY += (targetY - mouseY) * 0.05

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
                        const depth = Math.max(0, 1 - star.z / width)
                        const size = depth * (isMobile ? 1.5 : 2.5) * star.sizeOffset
                        const alpha = depth * 0.7

                        ctx.fillStyle = star.color
                        ctx.globalAlpha = alpha

                        if (size < 1.2) {
                            ctx.fillRect(px, py, size, size)
                        } else {
                            ctx.beginPath()
                            ctx.arc(px, py, size, 0, Math.PI * 2)
                            ctx.fill()
                        }
                    }
                })
            }
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
            observer.disconnect()
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
