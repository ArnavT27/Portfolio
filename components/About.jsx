'use client'

import { motion } from 'framer-motion'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Crafting digital experiences with precision and purpose
            </h2>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm text-gray-300 hover:border-indigo-500/50 hover:text-gray-100 transition-all"
            >
              Learn more about me
            </a>
          </motion.div>
          
          {/* Right - Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I'm a <span className="text-indigo-400 font-semibold">third-year</span> Computer Science student at the <span className="text-indigo-400 font-semibold">Indian Institute of Information 
              Technology, Pune</span>, passionate about building innovative solutions that bridge 
              technology and real-world impact. My journey in software development has been 
              driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in cloud architecture, AI/ML integration, and full-stack development, 
              with hands-on experience in building scalable applications and secure systems. 
              From real-time collaborative tools to AI-driven platforms, I enjoy tackling 
              complex challenges and turning ideas into functional products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, I'm exploring emerging technologies, contributing to 
              open-source projects, and constantly learning new skills to stay at the 
              forefront of innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
