import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'OSTA Job Portal',
    description:
      'A comprehensive job portal platform connecting employers and job seekers with advanced filtering, user authentication, job posting management, and application tracking system.',
    image: null,
    emoji: '💼',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'React', 'HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/desuu12',
    demo: null,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Full-Stack',
  },
  {
    title: 'Artisan Broker Marketplace',
    description:
      'A marketplace platform connecting skilled artisans with clients, featuring service listings, broker management, user profiles, messaging, and transaction handling built with modern web technologies.',
    image: null,
    emoji: '🛠️',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'React', 'HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/desuu12',
    demo: null,
    color: 'from-indigo-500 to-purple-500',
    badge: 'Full-Stack',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, a working contact form via EmailJS, and sections for skills, projects, and education.',
    image: null,
    emoji: '🌐',
    tags: ['React', 'Tailwind CSS', 'Vite', 'EmailJS', 'Framer Motion'],
    github: 'https://github.com/desuu12',
    demo: null,
    color: 'from-green-500 to-teal-500',
    badge: 'Frontend',
  },
]

export default function Projects({ dark }) {
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
    <section id="projects" ref={ref} className={`py-24 ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            What I've Built
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`reveal group rounded-2xl overflow-hidden ${
                dark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg card-hover`}
            >
              {/* Image / placeholder */}
              <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                    {project.emoji}
                  </span>
                </div>
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)', backgroundSize: '30px 30px' }}
                />
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/30 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.badge}
                  </span>
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        dark
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                      dark
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                    >
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  ) : (
                    <span className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                      <FiExternalLink size={16} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/desuu12"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-blue-500/40 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all hover:-translate-y-1"
          >
            <FiGithub size={18} /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
