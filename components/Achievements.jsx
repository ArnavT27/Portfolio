'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Target, Code2 } from 'lucide-react'

const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

const achievements = [
  {
    platform: 'LeetCode',
    rating: 'Max Rating: 1811',
    problems: '700+ Problems Solved',
    icon: Code2,
    color: 'from-orange-500 to-yellow-500',
    link: 'https://leetcode.com/u/ArnavT27/'
  },
  {
    platform: 'Codeforces',
    rank: 'Pupil',
    rating: 'Max Rating: 1211',
    problems: '100+ Problems Solved',
    icon: Target,
    color: 'from-cyan-500 to-blue-500',
    link: 'https://codeforces.com/profile/arnavtaneja27'
  },

  {
    platform: 'Problem Solving',
    rank: 'Top Performer',
    rating: '1000+ Problems',
    problems: 'Across Platforms',
    icon: Award,
    color: 'from-green-500 to-emerald-500',
    link: '#'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-10 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={springTransition}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="text-sm font-medium text-indigo-400 mb-3 tracking-wider uppercase"
          >
            Competitive Programming
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Achievements & Rankings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistent performance across competitive programming platforms
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...springTransition, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-white/5 hover:border-white/10 transition-all p-6 h-full">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                      {achievement.platform}
                    </h3>
                    <div className="space-y-1">
                      {achievement.rank ? <p className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {achievement.rank}
                      </p> : <p></p>
                      }

                      <p className="text-sm text-indigo-400 font-medium">
                        {achievement.rating}
                      </p>
                      <p className="text-xs text-gray-500">
                        {achievement.problems}
                      </p>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
