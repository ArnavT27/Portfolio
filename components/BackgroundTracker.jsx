'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundTracker() {
  const canvasRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Tech keywords scattered across the canvas
    const keywords = [
      { text: 'JAVA', x: 150, y: 200 },
      { text: 'PYTHON', x: 800, y: 150 },
      { text: 'CLOUD', x: 400, y: 400 },
      { text: 'REACT', x: 1200, y: 300 },
      { text: 'NEXT.JS', x: 300, y: 600 },
      { text: 'SECURITY', x: 1000, y: 500 },
      { text: 'AI/ML', x: 600, y: 250 },
      { text: 'NODE.JS', x: 1400, y: 400 },
      { text: 'ARCHITECTURE', x: 200, y: 800 },
      { text: 'SCALABLE', x: 900, y: 700 },
      { text: 'DEVOPS', x: 1100, y: 800 },
      { text: 'DATABASES', x: 1300, y: 600 }
    ]

    // Mouse tracking with spring physics
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      // Spring physics for smooth following
      const spring = 0.1
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * spring
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * spring

      // Clear canvas
      ctx.fillStyle = '#050505'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1
      const gridSize = 50

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - currentPos.current.x, 2) + 
            Math.pow(y - currentPos.current.y, 2)
          )
          
          if (distance < 300) {
            const opacity = 1 - distance / 300
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.3})`
            ctx.strokeRect(x, y, gridSize, gridSize)
          }
        }
      }

      // Draw radial gradient spotlight
      const gradient = ctx.createRadialGradient(
        currentPos.current.x,
        currentPos.current.y,
        0,
        currentPos.current.x,
        currentPos.current.y,
        600
      )
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.15)')
      gradient.addColorStop(0.5, 'rgba(29, 78, 216, 0.08)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw tech keywords (revealed by spotlight)
      ctx.font = 'bold 14px Space Grotesk, sans-serif'
      ctx.textAlign = 'center'

      keywords.forEach(keyword => {
        const distance = Math.sqrt(
          Math.pow(keyword.x - currentPos.current.x, 2) + 
          Math.pow(keyword.y - currentPos.current.y, 2)
        )
        
        if (distance < 400) {
          const opacity = 1 - distance / 400
          ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.6})`
          ctx.fillText(keyword.text, keyword.x, keyword.y)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{ background: '#050505' }}
    />
  )
}
