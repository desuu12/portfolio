import { FiGithub, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

const socials = [
  { icon: FiGithub, href: 'https://github.com/desuu12', label: 'GitHub', color: 'hover:text-white' },
  { icon: FaTelegram, href: 'https://t.me/desaddis11', label: 'Telegram', color: 'hover:text-blue-400' },
  { icon: FiMail, href: 'mailto:desalegndrj11@gmail.com', label: 'Email', color: 'hover:text-red-400' },
]

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Services', 'Contact']

export default function Footer({ dark }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={`${dark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900 border-t border-gray-800'} text-gray-400`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-gradient">&lt;Desalegn /&gt;</span>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Computer Science Student & Full-Stack Web Developer at Haramaya University.
              Passionate about building modern web solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:desalegndrj11@gmail.com" className="email-animate inline-block hover:text-blue-400 transition-colors">
                  desalegndrj11@gmail.com
                </a>
              </li>
              <li>
                <a href="https://t.me/desaddis11" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  Telegram: @desaddis11
                </a>
              </li>
              <li>
                <a href="https://github.com/desuu12" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  GitHub: desuu12
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-lg bg-gray-800 ${color} transition-all hover:-translate-y-1 hover:bg-gray-700`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © 2026 Desalegn. All Rights Reserved. Made with{' '}
            <FiHeart className="text-red-500 animate-pulse" size={14} /> using React & Tailwind CSS
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors hover:-translate-y-0.5 transition-transform"
          >
            <FiArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
