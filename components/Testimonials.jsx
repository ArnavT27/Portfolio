'use client'

import { motion } from 'framer-motion'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-10 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Centered Quote Text */}
          <div className="flex-1">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
              "Working with Sanches was transformative for our platform. Their technical 
              expertise and attention to security details gave us confidence in scaling 
              our infrastructure."
            </p>
          </div>
          
          {/* Author Info on the Right with Avatar */}
          <div className="flex items-center gap-4 md:flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              SJ
            </div>
            <div>
              <p className="font-semibold text-gray-200">Sarah Johnson</p>
              <p className="text-sm text-gray-500">CTO, TechStart Inc.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
