import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Services', 'Contact']

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? dark ? 'bg-gray-900/95 shadow-lg shadow-blue-500/10 backdrop-blur-md' : 'bg-white/95 shadow-lg backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="text-xl font-black text-gradient cursor-pointer" onClick={() => scrollTo('home')}>
          &lt;Desalegn /&gt;
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  dark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark toggle + Mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-full transition-all ${
              dark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className={`md:hidden p-2 rounded-full ${dark ? 'text-gray-300' : 'text-gray-700'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden px-4 pb-4 pt-2 ${dark ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`block w-full text-left py-2.5 text-sm font-medium border-b transition-colors ${
                dark ? 'text-gray-300 border-gray-800 hover:text-blue-400' : 'text-gray-700 border-gray-100 hover:text-blue-500'
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
