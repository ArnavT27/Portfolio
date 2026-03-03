'use client'

import { useEffect, useState } from 'react'

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function TextScramble({ text, delay = 0, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let frame = 0
    const frameDelay = 30
    const revealDelay = delay * 1000

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const progress = frame / (text.length * 2)
        
        if (progress >= 1) {
          setDisplayText(text)
          setIsComplete(true)
          clearInterval(interval)
          return
        }

        const scrambled = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            
            const revealIndex = Math.floor(progress * text.length)
            
            if (index < revealIndex) {
              return text[index]
            }
            
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')

        setDisplayText(scrambled)
        frame++
      }, frameDelay)

      return () => clearInterval(interval)
    }, revealDelay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span className={`scramble-text ${className}`}>
      {displayText}
    </span>
  )
}
