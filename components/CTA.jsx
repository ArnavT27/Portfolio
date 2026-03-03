'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6 md:px-10 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
        >
          {/* Large CTA Text with Inline Emoji */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-12">
            LET'S <span className="inline-block">✨</span> CREATE<br />
            GREAT THINGS.
          </h2>
          
          {/* "Drop me a line" Button with Gradient Border */}
          <motion.a
            href="mailto:arnavtaneja27@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-4 rounded-full text-lg font-medium relative overflow-hidden group"
            style={{
              background: 'transparent',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0E12, #0C0E12), linear-gradient(135deg, #ec4899, #8b5cf6)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <span className="relative z-10">Drop me a line</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
