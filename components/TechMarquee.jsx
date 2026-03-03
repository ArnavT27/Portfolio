'use client'

export default function TechMarquee() {
  const technologies = [
    'JAVA',
    'PYTHON',
    'AWS',
    'SECURE ARCHITECTURE',
    'REACT',
    'NEXT.JS',
    'NODE.JS',
    'Javascript',
    'MongoDB',
    'MySQL',
    'Docker',
    'AI/ML',
    'CLOUD COMPUTING',
    'CYBER SECURITY'
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-t border-white/5 py-4 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {technologies.map((tech, index) => (
            <span key={index} className="text-sm font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              {tech} •
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {technologies.map((tech, index) => (
            <span key={index} className="text-sm font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              {tech} •
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
