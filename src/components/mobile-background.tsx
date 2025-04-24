"use client"

import { useEffect, useRef } from "react"

export default function MenuBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create a gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
    gradient.addColorStop(1, "rgba(20, 20, 20, 1)")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some "lava-like" veins
    const drawVeins = () => {
      const veins = 5

      for (let i = 0; i < veins; i++) {
        const startX = Math.random() * canvas.width
        const startY = canvas.height

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        let x = startX
        let y = startY

        // Create a path going upward with random variations
        while (y > 0) {
          x += (Math.random() - 0.5) * 100
          y -= Math.random() * 50 + 20

          ctx.lineTo(x, y)
        }

        // Create gradient for the vein
        const veinGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        veinGradient.addColorStop(0, "rgba(255, 50, 0, 0.1)")
        veinGradient.addColorStop(1, "rgba(255, 100, 0, 0.4)")

        ctx.strokeStyle = veinGradient
        ctx.lineWidth = Math.random() * 3 + 1
        ctx.stroke()
      }
    }

    drawVeins()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Redraw everything
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      drawVeins()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
}
