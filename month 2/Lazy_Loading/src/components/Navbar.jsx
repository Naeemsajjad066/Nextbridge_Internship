import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/profile', label: 'Profile' },
    { path: '/reports', label: 'Reports' },
    { path: '/admin', label: 'Admin' },
    { path: '/dashboard', label: 'Dashboard', isButton: true },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2' onClick={closeMenu}>
            <div className='w-9 h-9 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold'>
              L
            </div>
            <span className='text-xl font-bold text-gray-900'>
              Lazy Loading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  item.isButton
                    ? 'bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors'
                    : 'text-gray-700 hover:text-gray-900 transition-colors'
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden flex flex-col gap-1.5 p-2'
            aria-label='Toggle menu'
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className='flex flex-col gap-2 py-2 border-t border-gray-200 mt-4'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  item.isButton
                    ? 'bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors mt-2'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors'
                }
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
