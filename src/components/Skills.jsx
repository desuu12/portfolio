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

  const replay = () => {
    setShow(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) replay() },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handle = (e) => {
      if (e.target.closest('button')?.textContent?.trim() === 'Skills')
        setTimeout(replay, 500)
    }
    document.addEventListener('click', handle)
    return () => document.removeEventListener('click', handle)
  }, [])

  return (
    <section id="skills" ref={ref} className={`py-24 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
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

        {/* Cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 justify-items-center">
          {techStack.map(({ icon: Icon, color, label }, i) => (
            <div
              key={label}
              className={`skill-card w-24 flex flex-col items-center gap-3 p-5 rounded-2xl ${
                dark ? 'bg-gray-800/80' : 'bg-gray-50'
              } shadow-md`}
              style={{
                opacity:   show ? 1 : 0,
                transform: show ? 'translateX(0) scale(1)' : 'translateX(80px) scale(0.85)',
                transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: show ? `${i * 100}ms` : '0ms',
              }}
            >
              <Icon size={38} style={{ color }} className="skill-icon drop-shadow-sm" />
              <span className={`text-xs font-semibold text-center leading-tight ${
                dark ? 'text-gray-300' : 'text-gray-600'
              }`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
