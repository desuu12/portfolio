import { useEffect, useRef } from 'react'
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

export default function Education({ dark }) {
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
    <section id="education" ref={ref} className={`py-24 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Academic Background
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${dark ? 'bg-gray-700' : 'bg-gray-200'}`} />

          <div className="reveal relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center ring-4 ring-blue-500/20 z-10">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className={`rounded-2xl p-8 ${dark ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg card-hover`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiAward className="text-blue-500" size={20} />
                    <span className={`text-sm font-semibold px-3 py-0.5 rounded-full bg-blue-500/10 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                      Bachelor's Degree
                    </span>
                  </div>
                  <h3 className={`text-2xl font-black mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                    B.Sc. Computer Science
                  </h3>
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="text-indigo-400" size={16} />
                    <span className={`text-lg font-semibold text-gradient`}>Haramaya University</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className={`flex items-center gap-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <FiCalendar size={14} />
                    <span>2022 – Present</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <FiMapPin size={14} />
                    <span>Haramaya, Ethiopia</span>
                  </div>
                </div>
              </div>

              <p className={`mt-4 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                Studying core Computer Science concepts including data structures, algorithms, software engineering,
                database systems, web development, and operating systems. Actively working on real-world
                projects and building expertise in full-stack web development.
              </p>

              {/* Relevant courses */}
              <div className="mt-6">
                <p className={`text-sm font-semibold mb-3 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Software Engineering',
                    'Database Systems',
                    'Web Development',
                    'Operating Systems',
                    'Computer Networks',
                    'OOP',
                    'Discrete Mathematics',
                  ].map((course) => (
                    <span
                      key={course}
                      className={`text-xs px-3 py-1 rounded-full ${
                        dark
                          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
