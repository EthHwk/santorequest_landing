"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface ParticlesBackgroundProps {
  color?: string
  particleCount?: number
}

export function ParticlesBackground({
  color = "rgba(204, 170, 0, 0.08)", // Color mostaza muy sutil
  particleCount = 80, // Más partículas para un efecto más rico pero sutil
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear partículas
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5, // Partículas más pequeñas
        speedX: Math.random() * 0.3 - 0.15, // Movimiento más lento
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.06 + 0.02, // Opacidad muy baja
      })
    }

    // Animar partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(")", `, ${particle.opacity})`)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [color, particleCount])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
