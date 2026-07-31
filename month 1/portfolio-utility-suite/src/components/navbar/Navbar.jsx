import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Utilities', to: '/utilities' },
  { label: 'OOP', to: '/oop' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-medium text-sm transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="w-[min(90%,1200px)] mx-auto flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
          Portfolio
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/blog"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-slate-700 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
