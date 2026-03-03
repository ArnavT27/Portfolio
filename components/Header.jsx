'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

const MagneticLink = ({ href, children }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const maxDistance = 100
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      x.set(distanceX * strength * 0.4)
      y.set(distanceY * strength * 0.4)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </motion.a>
  )
}

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20"
    >
      <nav className="w-full px-10 py-6 flex items-center justify-between">
        {/* Left - Magnetic Navigation Links */}
        <div className="flex gap-8">
          <MagneticLink href="#home">Home</MagneticLink>
          <MagneticLink href="#services">Services</MagneticLink>
          <MagneticLink href="#works">Work</MagneticLink>
        </div>
        
        {/* Center - Brand with Terminal Prompt */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-cyan-400 text-lg font-mono">~/$</span>
          <h1 className="text-xl font-bold tracking-tight uppercase">Arnav</h1>
        </div>
        
        {/* Right - Contact & Resume */}
        <div className="flex items-center gap-6">
          <a 
            href="https://drive.google.com/file/d/1E9V09s7jfOlRc8BS88drinkW2hyV77Ug/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Resume
          </a>
          <a 
            href="mailto:arnavtaneja27@gmail.com"
            className="text-sm uppercase tracking-wider text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
