import { useEffect, useRef } from 'react'
import { FiCode, FiDatabase, FiLayout, FiBook } from 'react-icons/fi'

const highlights = [
  { icon: FiLayout, label: 'Frontend', desc: 'React, JS, Tailwind, Bootstrap', color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { icon: FiCode, label: 'Backend', desc: 'PHP, Python, REST APIs', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { icon: FiDatabase, label: 'Database', desc: 'MySQL, Database Design', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: FiBook, label: 'Learning', desc: 'Always growing, always building', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
]

export default function About({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className={`py-24 ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center mb-16 reveal">
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Who I Am
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="reveal">
            <div className={`relative rounded-2xl overflow-hidden ${dark ? 'bg-gray-800' : 'bg-white'} p-8 shadow-xl`}>
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full translate-x-16 translate-y-16" />
              <div className="relative text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 ring-4 ring-blue-500/30">
                  <img src="/profile.jpg" alt="Desalegn" className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                  <div className="hidden w-full h-full items-center justify-center text-4xl">👨‍💻</div>
                </div>
                <h3 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Desalegn</h3>
                <p className={`text-sm mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Computer Science Student</p>
                <p className={`text-sm ${dark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Haramaya University</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[['3', 'Projects'], ['4th', 'Year Student']].map(([num, label]) => (
                    <div key={label} className={`rounded-xl p-3 ${dark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="text-2xl font-black text-gradient">{num}</div>
                      <div className={`text-xs mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal space-y-6">
            <p className={`text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a <span className={`font-semibold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>4th-year Computer Science student</span> at{' '}
              <span className={`font-semibold ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>Haramaya University</span>, with a strong
              interest in web development and software engineering.
            </p>
            <p className={`leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Through my academic journey and personal projects, I've built skills in both frontend and backend development —
              from crafting responsive UIs with React and Tailwind to building server-side logic with PHP and MySQL.
            </p>
            <p className={`leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm actively looking for opportunities to grow, contribute, and apply what I've learned in real-world projects.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {highlights.map(({ icon: Icon, label, desc, color, bg }) => (
                <div key={label} className={`flex items-start gap-3 p-4 rounded-xl ${dark ? 'bg-gray-800' : 'bg-white'} shadow-sm card-hover`}>
                  <div className={`p-2 rounded-lg ${bg}`}>
                    <Icon className={color} size={18} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>{label}</div>
                    <div className={`text-xs mt-0.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
