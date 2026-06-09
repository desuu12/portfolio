import { useEffect, useRef, useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'desalegndrj11@gmail.com',
    href: 'mailto:desalegndrj11@gmail.com',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    animate: true,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+251 (available on request)',
    href: '#',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    animate: false,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/desuu12',
    href: 'https://github.com/desuu12',
    color: 'text-gray-400',
    bg: 'bg-gray-500/10',
    animate: false,
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@desaddis11',
    href: 'https://t.me/desaddis11',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    animate: false,
  },
]

export default function Contact({ dark }) {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        setSent(true)
        setError(false)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 4000)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
        setTimeout(() => setError(false), 5000)
      })
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border ${
    dark
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
  }`

  return (
    <section id="contact" ref={ref} className={`py-24 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-black mt-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - info */}
          <div className="reveal space-y-6">
            <div>
              <h3 className={`text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                Let's Work Together!
              </h3>
              <p className={`leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to new opportunities, collaborations, and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg, animate }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all card-hover ${
                    dark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  } ${animate ? 'email-animate' : ''}`}
                >
                  <div className={`p-3 rounded-xl ${bg}`}>
                    <Icon className={color} size={20} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {label}
                    </div>
                    <div className={`text-sm font-medium mt-0.5 ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick social buttons */}
            <div className={`p-5 rounded-2xl ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <p className={`text-sm font-semibold mb-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                Quick Connect
              </p>
              <div className="flex gap-3">
                <a href="mailto:desalegndrj11@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                  target="_blank" rel="noreferrer">
                  <FiMail size={16} /> Email Me
                </a>
                <a href="https://t.me/desaddis11" target="_blank" rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    dark ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                  }`}>
                  <FaTelegram size={16} /> Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl shadow-xl ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}
            >
              <h3 className={`text-xl font-bold mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={50}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry / Collaboration"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="mb-6">
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or say hello..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                  <span>⚠️</span> Failed to send. Please <a href="mailto:desalegndrj11@gmail.com" className="underline">email directly</a>.
                </div>
              )}

              <button
                type="submit"
                disabled={loading || sent}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5'
                } disabled:opacity-70`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : sent ? (
                  <><FiCheck size={18} /> Message Sent!</>
                ) : (
                  <><FiSend size={18} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
