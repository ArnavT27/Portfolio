'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function InteractiveNodes() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative w-full h-full"
    >
      {/* Wireframe Grid */}
      <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-40">
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 100, 255, 0.6)" />
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        {[...Array(10)].map((_, i) => (
          <g key={i}>
            <line
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="400"
              className="wireframe-grid"
              stroke="url(#gridGradient)"
            />
            <line
              x1="0"
              y1={i * 40}
              x2="400"
              y2={i * 40}
              className="wireframe-grid"
              stroke="url(#gridGradient)"
            />
          </g>
        ))}
        
        {/* Connecting Lines */}
        <path
          d="M 100 100 L 300 100 L 300 300 L 100 300 Z"
          className="wireframe-grid"
          stroke="url(#gridGradient)"
          strokeWidth="2"
        />
        <path
          d="M 150 150 L 250 150 L 250 250 L 150 250 Z"
          className="wireframe-grid"
          stroke="url(#gridGradient)"
          strokeWidth="2"
        />
      </svg>
      
      {/* Glowing Data Nodes */}
      <div className="data-node" style={{ top: '20%', left: '30%' }} />
      <div className="data-node" style={{ top: '40%', left: '70%' }} />
      <div className="data-node" style={{ top: '60%', left: '20%' }} />
      <div className="data-node" style={{ top: '80%', left: '60%' }} />
      <div className="data-node" style={{ top: '30%', left: '50%' }} />
    </motion.div>
  )
}
