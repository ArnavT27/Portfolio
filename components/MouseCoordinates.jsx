'use client'

import { useEffect, useState } from 'react'

export default function MouseCoordinates() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="font-mono text-xs text-gray-500">
      X: {coords.x} Y: {coords.y}
    </div>
  )
}
