import { useEffect, useRef } from 'react'
import { FiLayout, FiServer, FiSmartphone, FiCode, FiDatabase, FiZap } from 'react-icons/fi'

const services = [
  {
    icon: FiLayout,
    title: 'Frontend Development',
    description:
      'Building beautiful, responsive, and interactive user interfaces using React.js, Tailwind CSS, and modern JavaScript.',
    features: ['React.js Components', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Creating robust server-side applications, REST APIs, and database-driven systems using PHP and Python.',
    features: ['REST API Design', 'PHP Applications', 'Python Scripting', 'Authentication Systems'],
    color: 'from-indigo-500 to-purple-500',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Web Design',
    description:
      'Crafting pixel-perfect, mobile-first websites that work flawlessly across all devices and screen sizes.',
    features: ['Mobile-First Approach', 'Cross-Browser Support', 'Tailwind CSS', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: FiDatabase,
    title: 'Database Design',
    description:
      'Designing and managing relational databases with MySQL, ensuring data integrity and optimized queries.',
    features: ['MySQL Database Design', 'Query Optimization', 'Data Modeling', 'CRUD Operations'],
    color: 'from-green-500 to-teal-500',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: FiCode,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end web application development from design to deployment, combining frontend and backend expertise.',
    features: ['Full-Stack Projects', 'API Integration', 'Database Integration', 'Code Review'],
    color: 'from-orange-500 to-red-500',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
  {
    icon: FiZap,
    title: 'Performance & Optimization',
    description:
      'Optimizing web applications for speed, performance, and best practices to deliver the best user experience.',
    features: ['Page Speed Optimization', 'Code Splitting', 'SEO Basics', 'Best Practices'],
    color: 'from-yellow-500 to-orange-500',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
]

export default function Services({ dark }) {
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
    <section id="services" ref={ref} className={`py-24 ${dark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            What I Offer
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`reveal group relative rounded-2xl p-6 overflow-hidden card-hover ${
                dark ? 'bg-gray-800' : 'bg-white'
              } shadow-sm`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Top border */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`inline-flex p-3 rounded-xl ${service.iconBg} mb-4`}>
                <service.icon className={service.iconColor} size={24} />
              </div>

              <h3 className={`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
