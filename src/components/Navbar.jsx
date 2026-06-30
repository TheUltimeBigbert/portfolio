import { RESUME_URL, RESUME_FILENAME } from '../constants'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="#" className="font-bold text-lg hover:text-blue-400 transition-colors">
          JRR Rogel
        </a>

        <div className="flex flex-wrap items-center gap-4">
          <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
