'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import MouseCoordinates from './MouseCoordinates'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Typography - Center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center space-y-8"
          >
            {/* Line 1: ENGINEERING with stroke outline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-widest"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ENGINEERING
            </motion.h1>
            
            {/* Line 2: SCALABLE SYSTEMS with glassmorphism pill */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest flex items-center justify-center gap-6 flex-wrap"
            >
              <span>SCALABLE</span>
              <span className="glass-pill-hero">SYSTEMS</span>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mt-8"
            >
              Building next-generation platforms with quantum-safe security and AI-driven intelligence
            </motion.p>
          </motion.div>
        </div>
        
        {/* Bottom Elements */}
        <div className="absolute bottom-12 left-0 right-0 px-10 flex items-center justify-between">
          {/* Left - Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex items-center gap-3"
          >
            <div className="scroll-prompt">
              <ChevronDown className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll to explore</span>
          </motion.div>
          
          {/* Right - Live Mouse Coordinates */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <MouseCoordinates />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
