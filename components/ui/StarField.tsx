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

        // CONFIGURATION
        const CONFIG = {
            starCount: isMobile ? 400 : 1000,
            speed: isMobile ? 0.2 : 0.3,
            trailLength: 0.15,
            planetCount: 1, // Minimize planets as requested
        }

        const centerX = width / 2
        const centerY = height / 2

        // --- STARS ---
        // We use a Z-coordinate based starfield (warp effect)
        type Star = {
            x: number
            y: number
            z: number
            color: string
            sizeBase: number
            alphaBase: number
        }

        const stars: Star[] = []
        for (let i = 0; i < CONFIG.starCount; i++) {
            stars.push(createStar())
        }

        function createStar(): Star {
            return {
                x: (Math.random() * width - centerX) * 0.7,
                y: (Math.random() * height - centerY) * 0.7,
                z: Math.random() * width,
                color: Math.random() > 0.85 ? '#00A3FF' : '#ffffff', // TRDG Cyan/Blue mix
                sizeBase: Math.random(),
                alphaBase: 0.5 + Math.random() * 0.5
            }
        }

        // --- PLANETS ---
        type Planet = {
            x: number
            y: number
            radius: number
            color: string
            speedX: number
            speedY: number
            hasRings: boolean
        }
        const planets: Planet[] = []
        // Initialize planets nicely distributed
        for (let i = 0; i < CONFIG.planetCount; i++) {
            planets.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: isMobile ? 20 + Math.random() * 40 : 40 + Math.random() * 80,
                color: i % 2 === 0 ? '#003366' : '#220033', // Dark deep space colors
                speedX: (Math.random() - 0.5) * 0.05,
                speedY: (Math.random() - 0.5) * 0.05,
                hasRings: Math.random() > 0.5
            })
        }


        // Mouse Parallax
        let mouseX = 0
        let mouseY = 0
        let targetMouseX = 0
        let targetMouseY = 0

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX - centerX) * 0.05
            targetMouseY = (e.clientY - centerY) * 0.05
        }

        let isVisible = true
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
        }, { threshold: 0.1 })
        observer.observe(canvas)

        const animate = () => {
            if (isVisible) {
                ctx.fillStyle = 'rgba(0, 0, 5, 0.4)' // Slight trail/fade effect on background for smoother visuals? No, clean start each frame for crisp stars.
                ctx.clearRect(0, 0, width, height)

                // Update Mouse Orbit
                mouseX += (targetMouseX - mouseX) * 0.05
                mouseY += (targetMouseY - mouseY) * 0.05
                const cx = centerX + mouseX
                const cy = centerY + mouseY

                // 1. Draw Planets (Background Layer)
                // They move very slowly and are unaffected by warp z-index (simulating infinite distance)
                planets.forEach(planet => {
                    planet.x += planet.speedX
                    planet.y += planet.speedY

                    // Wrap around screen
                    if (planet.x < -planet.radius) planet.x = width + planet.radius
                    if (planet.x > width + planet.radius) planet.x = -planet.radius
                    if (planet.y < -planet.radius) planet.y = height + planet.radius
                    if (planet.y > height + planet.radius) planet.y = -planet.radius

                    // Draw Gradient Planet
                    const gradient = ctx.createRadialGradient(
                        planet.x - planet.radius * 0.3,
                        planet.y - planet.radius * 0.3,
                        planet.radius * 0.1,
                        planet.x,
                        planet.y,
                        planet.radius
                    )
                    gradient.addColorStop(0, '#1a237e') // Lighter blue center
                    gradient.addColorStop(0.5, planet.color)
                    gradient.addColorStop(1, 'transparent')

                    ctx.fillStyle = gradient
                    ctx.beginPath()
                    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2)
                    ctx.fill()

                    // Optional Rings
                    if (planet.hasRings) {
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
                        ctx.lineWidth = planet.radius * 0.1
                        ctx.beginPath()
                        ctx.ellipse(planet.x, planet.y, planet.radius * 1.6, planet.radius * 0.4, Math.PI / 6, 0, Math.PI * 2)
                        ctx.stroke()
                    }
                })


                // 2. Draw Stars (Warp Layer)
                stars.forEach((star) => {
                    // Move star closer
                    star.z -= CONFIG.speed
                    if (star.z <= 0) {
                        star.z = width
                        // Concentrate stars more in center (0.7 spread) to prevent early exit
                        star.x = (Math.random() * width - centerX) * 0.7
                        star.y = (Math.random() * height - centerY) * 0.7
                    }

                    const k = 128.0 / star.z
                    const px = star.x * k + cx
                    const py = star.y * k + cy

                    // Bounds check
                    if (px >= -50 && px <= width + 50 && py >= -50 && py <= height + 50) {
                        const depth = 1 - star.z / width
                        const size = (1 - depth) * 0.1 + depth * 3 * star.sizeBase
                        // Boost distant visibility
                        const alpha = (0.2 + depth * 0.8) * star.alphaBase

                        // Store previous position for trail (but clamp it so it doesn't streak across screen on wrap)
                        // Actually, we can just project a point slightly further back in Z for the tail
                        const tailZ = star.z + (CONFIG.speed * 20) // Simulated previous Z
                        const kTail = 128.0 / tailZ
                        const tailX = star.x * kTail + cx
                        const tailY = star.y * kTail + cy

                        ctx.globalAlpha = alpha
                        ctx.fillStyle = star.color
                        ctx.strokeStyle = star.color

                        // If star is close (high depth) and moving fast visually, draw trail
                        const distToCenter = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2)
                        const isFast = distToCenter > 100 // Stars at edges move faster

                        if (isFast && depth > 0.5) {
                            ctx.lineWidth = size
                            ctx.beginPath()
                            ctx.moveTo(tailX, tailY)
                            ctx.lineTo(px, py)
                            ctx.stroke()
                        } else if (size > 1.5) {
                            ctx.beginPath()
                            ctx.arc(px, py, size, 0, Math.PI * 2)
                            ctx.fill()
                        } else {
                            ctx.fillRect(px, py, size, size)
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
            {/* CSS-based Nebula Background - Deep Space */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#050b14] via-[#000000] to-[#000000]" />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 mix-blend-overlay" />

            {/* Canvas Stars */}
            <canvas ref={canvasRef} className="absolute inset-0 block mix-blend-screen" />
        </div>
    )
}
