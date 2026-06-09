import { useState, useEffect } from 'react'
import { FiGithub, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

const titles = [
  'Full-Stack Web Developer',
  'Computer Science Student',
  'React Developer',
  'Problem Solver',
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 6,
}))

export default function Hero({ dark }) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = titles[titleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section id="home" className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.5) 1px,transparent 1px)', backgroundSize: '50px 50px' }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 pt-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">Desalegn</span>
          </h1>

          <div className="h-10 mb-6">
            <span className="text-xl sm:text-2xl font-semibold text-blue-400 typing-cursor">
              {displayed}
            </span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            4th-year Computer Science student at{' '}
            <span className="text-blue-400 font-semibold">Haramaya University</span>, building modern
            web apps with React, PHP, and MySQL.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-6 py-3 border border-blue-500/40 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            <a href="https://github.com/desuu12" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all hover:-translate-y-1">
              <FiGithub size={20} />
            </a>
            <a href="https://t.me/desaddis11" target="_blank" rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all hover:-translate-y-1">
              <FaTelegram size={20} />
            </a>
            <a href="mailto:desalegndrj11@gmail.com"
              className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-red-400 hover:bg-gray-700 transition-all hover:-translate-y-1 email-animate">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full ring-animate"
              style={{ background: 'conic-gradient(from 0deg, #3b82f6, #6366f1, #3b82f6)', padding: '3px' }}>
              <div className="w-full h-full rounded-full bg-gray-900" />
            </div>
            {/* Outer glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 glow-blue animate-pulse-slow" />
            {/* Profile photo / placeholder */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Desalegn"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center flex-col gap-2">
                <span className="text-6xl">👨‍💻</span>
                <span className="text-blue-300 text-xs font-medium">Add profile.jpg</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce-slow">
              React ⚛️
            </div>
            <div className="absolute -bottom-4 -left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              PHP 🐘
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="animate-bounce" size={20} />
      </div>
    </section>
  )
}
