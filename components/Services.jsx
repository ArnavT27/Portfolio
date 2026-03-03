'use client'

import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: { 
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
}

const services = [
  {
    number: '01',
    title: 'Cloud Architecture',
    description: 'Designing and implementing scalable cloud infrastructure on Google Cloud Platform and AWS.',
    icon: '☁️'
  },
  {
    number: '02',
    title: 'AI/ML Integration',
    description: 'Building intelligent systems with machine learning models and natural language processing.',
    icon: '🤖'
  },
  {
    number: '03',
    title: 'Full-Stack Development',
    description: 'Creating end-to-end web applications with modern frameworks and best practices.',
    icon: '💻'
  },
  {
    number: '04',
    title: 'Security & Cryptography',
    description: 'Implementing secure systems with encryption, authentication, and quantum-safe protocols.',
    icon: '🔐'
  },
  {
    number: '05',
    title: 'System Architecture',
    description: 'Designing robust, maintainable software architectures for complex applications.',
    icon: '🏗️'
  }
]

export default function Services() {
  const scrollRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="services" className="py-32 px-6 md:px-10 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springTransition}
              viewport={{ once: true }}
              className="text-sm font-medium text-indigo-400 mb-3 tracking-wider uppercase"
            >
              What I Offer
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={springTransition}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold"
            >
              Services & Expertise
            </motion.h2>
          </div>
          
          {/* Navigation Arrows */}
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => scroll('left')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
            <motion.button 
              onClick={() => scroll('right')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Horizontal Scrolling Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              transition={{ ...springTransition, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="min-w-[350px] md:min-w-[420px] snap-start relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-white/5 hover:border-white/10 transition-all group cursor-pointer"
            >
              {/* Large Background Number - centered and more visible */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] md:text-[320px] font-bold leading-none pointer-events-none select-none text-white/[0.15]"
                animate={hoveredIndex === index ? { 
                  scale: 1.05,
                  opacity: 0.2
                } : { 
                  scale: 1,
                  opacity: 0.15
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {service.number}
              </motion.div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start gap-6 flex-1">
                  {/* Circular Icon with enhanced animation */}
                  
                  
                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300">
                        {service.title}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex-shrink-0"
                      >
                        <div 
                          className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm border-2"
                          style={{
                            borderColor: `rgba(${service.accentColor === 'cyan' ? '0, 255, 255' : service.accentColor === 'fuchsia' ? '255, 0, 255' : service.accentColor === 'lime' ? '190, 255, 0' : service.accentColor === 'yellow' ? '255, 255, 0' : '168, 85, 247'}, 0.6)`,
                            boxShadow: `0 0 10px rgba(${service.accentColor === 'cyan' ? '0, 255, 255' : service.accentColor === 'fuchsia' ? '255, 0, 255' : service.accentColor === 'lime' ? '190, 255, 0' : service.accentColor === 'yellow' ? '255, 255, 0' : '168, 85, 247'}, 0.4)`
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent line with unique gradient */}
                <motion.div 
                  className={`h-[3px] bg-gradient-to-r ${service.borderGradient} mt-6 rounded-full shadow-lg`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
