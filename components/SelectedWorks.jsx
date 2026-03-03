'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState } from 'react'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

const works = [
  {
    title: 'Collaborative Code Editor',
    category: 'Real-time Collaboration • WebSockets',
    year: '2026',
    github: 'https://github.com/ArnavT27/CodeEditor'
  },
  {
    title: 'Real Time Chat Application',
    category: 'Real-time Messaging • WebSockets',
    year: '2025',
    github: 'https://github.com/ArnavT27/Chat-Application'
  },
  {
    title: 'Career Quest Platform',
    category: 'AI-Driven Analysis • Machine Learning',
    year: '2025',
    github: 'https://github.com/ArnavT27/CareerQuest'
  },
  {
    title: 'Full Stack Authentication System',
    category: 'Security • JWT • OAuth',
    year: '2024',
    github: 'https://github.com/ArnavT27/mern-auth'
  },
]

export default function SelectedWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
    setHoveredIndex(index)
  }

  return (
    <section id="works" className="py-32 px-6 md:px-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Selected Works</h2>
          <p className="text-gray-400">Recent projects and case studies</p>
        </motion.div>
        
        {/* Projects List - Vertical with border-bottom */}
        <div className="space-y-0">
          {works.map((work, index) => (
            <motion.a
              key={index}
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative border-b border-white/5 py-8 cursor-pointer group block"
            >
              <div className="flex items-center justify-between">
                {/* Text Content - Shifts right on hover */}
                <motion.div
                  animate={{ x: hoveredIndex === index ? 20 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1"
                >
                  <h3 className="text-2xl md:text-4xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {work.category} • {work.year}
                  </p>
                </motion.div>
                
                {/* Index Number */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 0.3 : 0.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl md:text-7xl font-bold text-white hidden md:block"
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </div>
              
              
              {/* Optional: Preview Image Background (subtle) */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.05 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 pointer-events-none"
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
