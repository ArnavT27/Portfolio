'use client'

import { motion } from 'framer-motion'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

export default function Footer() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arnav-taneja27/' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ArnavT27/' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/arnavtaneja27' }
  ]

  return (
    <footer className="py-12 px-6 md:px-10 border-t border-white/5 pb-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Social Links */}
          <div className="flex gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Copyright Text on the Right */}
          <p className="text-sm text-gray-500">
            © 2026 Arnav. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
