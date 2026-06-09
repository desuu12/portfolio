import { useEffect, useRef, useState } from 'react'
import {
  FaReact, FaJs, FaHtml5, FaPhp, FaPython, FaGitAlt,
} from 'react-icons/fa'
import { SiTailwindcss, SiBootstrap, SiMysql } from 'react-icons/si'

const techStack = [
  { icon: FaReact,       color: '#61DAFB', label: 'React'      },
  { icon: FaJs,          color: '#F7DF1E', label: 'JavaScript' },
  { icon: FaHtml5,       color: '#E34F26', label: 'HTML5'      },
  { icon: SiTailwindcss, color: '#38B2AC', label: 'Tailwind'   },
  { icon: SiBootstrap,   color: '#7952B3', label: 'Bootstrap'  },
  { icon: FaPhp,         color: '#777BB4', label: 'PHP'        },
  { icon: FaPython,      color: '#3776AB', label: 'Python'     },
  { icon: SiMysql,       color: '#00758F', label: 'MySQL'      },
  { icon: FaGitAlt,      color: '#F05032', label: 'Git'        },
]

export default function Skills({ dark }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className={`py-24 ${dark ? 'bg-gray-950' : 'bg-white'} overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <span className={`text-sm font-semibold tracking-widest uppercase ${
            dark ? 'text-blue-400' : 'text-blue-600'
          }`}>What I Know</span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>My <span className="text-gradient">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Marquee track */}
      <div className={`relative transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
        {/* fade edges */}
        <div className={`absolute left-0 top-0 h-full w-20 z-10 pointer-events-none ${
          dark ? 'bg-gradient-to-r from-gray-950 to-transparent' : 'bg-gradient-to-r from-white to-transparent'
        }`} />
        <div className={`absolute right-0 top-0 h-full w-20 z-10 pointer-events-none ${
          dark ? 'bg-gradient-to-l from-gray-950 to-transparent' : 'bg-gradient-to-l from-white to-transparent'
        }`} />

        <div
          className="flex w-max"
          style={{ animation: `marquee 18s linear infinite`, animationPlayState: paused ? 'paused' : 'running' }}
        >
          {[...techStack, ...techStack].map(({ icon: Icon, color, label }, i) => (
            <div
              key={i}
              onMouseEnter={() => { setHovered(label); setPaused(true) }}
              onMouseLeave={() => { setHovered(null); setPaused(false) }}
              className={`relative mx-4 w-24 flex-shrink-0 flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default overflow-hidden shadow-md ${
                dark ? 'bg-gray-800/80' : 'bg-gray-50'
              }`}
            >
              {/* glow blob */}
              <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${color}44, transparent 70%)`,
                  opacity: hovered === label ? 1 : 0,
                }}
              />
              {/* icon */}
              <div style={{
                transform: hovered === label ? 'translateY(-4px) scale(1.3) rotate(-6deg)' : 'translateY(0) scale(1) rotate(0deg)',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                filter: hovered === label ? `drop-shadow(0 0 10px ${color})` : 'none',
              }}>
                <Icon size={38} style={{ color }} />
              </div>
              {/* label */}
              <span className={`text-xs font-semibold text-center leading-tight relative z-10 transition-all duration-300 ${
                hovered === label ? 'text-white scale-105' : dark ? 'text-gray-300' : 'text-gray-600'
              }`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
