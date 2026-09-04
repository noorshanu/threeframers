"use client"

import { useCallback, useEffect, useRef } from "react"

type Spark = {
  x: number
  y: number
  angle: number
  startTime: number
}

type GlobalClickSparkProps = {
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
}

const easeOut = (t: number) => t * (2 - t)

export const GlobalClickSpark = ({
  sparkColor = "#D1DEEF",
  sparkSize = 10,
  sparkRadius = 16,
  sparkCount = 8,
  duration = 400,
}: GlobalClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparksRef = useRef<Spark[]>([])

  const spawnSparks = useCallback(
    (x: number, y: number) => {
      const now = performance.now()
      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
      }))
      sparksRef.current.push(...newSparks)
    },
    [sparkCount],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId = 0

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime
        if (elapsed >= duration) return false

        const progress = elapsed / duration
        const eased = easeOut(progress)
        const distance = eased * sparkRadius
        const lineLength = sparkSize * (1 - eased)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    const handlePointerDown = (event: PointerEvent) => {
      spawnSparks(event.clientX, event.clientY)
    }

    window.addEventListener("pointerdown", handlePointerDown)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointerdown", handlePointerDown)
      cancelAnimationFrame(animationId)
    }
  }, [duration, sparkColor, sparkRadius, sparkSize, spawnSparks])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  )
}

export default GlobalClickSpark
