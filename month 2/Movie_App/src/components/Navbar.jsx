import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
    setIsMenuOpen(false)
  }

  const handleLogin = () => {
    navigate('/login')
    setIsMenuOpen(false)
  }

  const isActivePath = (path) => location.pathname === path

  return (
    <nav className='bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Left side - Logo + Navigation */}
          <div className='flex items-center space-x-8'>
            {/* Logo */}
            <Link
              to='/'
              className='text-2xl font-bold text-slate-50 hover:text-amber-400 transition-colors duration-300'
            >
              <span className='text-amber-400'>🎬 Cenovo</span>
            </Link>

            {/* Navigation Links */}
            <div className='hidden md:flex items-center space-x-4'>
              <Link
                to='/'
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActivePath('/')
                    ? 'bg-slate-800 text-amber-400 shadow-lg'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                }`}
              >
                Home
              </Link>

              {user && (
                <Link
                  to='/favorites'
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActivePath('/favorites')
                      ? 'bg-slate-800 text-amber-400 shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50'
                  }`}
                >
                  Favorites
                </Link>
              )}
            </div>
          </div>

          {/* Right side - Auth Section */}
          <div className='hidden md:flex items-center space-x-4'>
            {user ? (
              <>
                <span className='text-slate-300 text-sm'>
                  Welcome,{' '}
                  <span className='text-amber-400 font-medium'>
                    {user.name}
                  </span>
                </span>
                <button
                  onClick={handleLogout}
                  className='bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg'
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className='bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-slate-50 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 transition-colors duration-300'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700'>
          <Link
            to='/'
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              isActivePath('/')
                ? 'bg-slate-700 text-amber-400 shadow-lg'
                : 'text-slate-300 hover:bg-slate-700 hover:text-slate-50'
            }`}
          >
            Home
          </Link>

          {user && (
            <Link
              to='/favorites'
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActivePath('/favorites')
                  ? 'bg-slate-700 text-amber-400 shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-slate-50'
              }`}
            >
              Favorites
            </Link>
          )}

          <div className='pt-4 pb-3 border-t border-slate-600'>
            {user && (
              <div className='flex items-center px-3'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center'>
                    <span className='text-slate-900 font-bold text-sm'>
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-none text-slate-50'>
                    {user.name}
                  </div>
                  <div className='text-sm font-medium leading-none text-slate-300 mt-1'>
                    {user.email}
                  </div>
                </div>
              </div>
            )}

            <div className='mt-3 px-2 space-y-1'>
              {user ? (
                <button
                  onClick={handleLogout}
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-slate-50 hover:bg-red-600 transition-colors duration-300'
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-amber-500 text-slate-900 hover:bg-amber-600 transition-all duration-300'
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
