import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../utils/auth'

function Navbar() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(isAuthenticated())
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    removeToken()
    setAuthenticated(false)
    setMenuOpen(false)
    navigate('/')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className='border-b border-[#27272A] bg-[#18181B]'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6'>
        {/* Logo */}
        <Link
          to='/'
          onClick={closeMenu}
          className='text-xl font-bold tracking-tight text-[#D4AF37]'
        >
          AuthApp
        </Link>

        {/* Desktop nav */}
        <div className='hidden items-center gap-8 md:flex'>
          <Link
            to='/'
            className='text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-[#F4F4F5]'
          >
            Home
          </Link>

          {authenticated ? (
            <>
              <Link
                to='/dashboard'
                className='text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-[#F4F4F5]'
              >
                Dashboard
              </Link>
              <button
                type='button'
                onClick={handleLogout}
                className='rounded-lg border border-[#27272A] px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:border-[#EF4444] hover:text-[#EF4444]'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to='/login'
                className='text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-[#F4F4F5]'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-[#c9a430]'
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          type='button'
          onClick={() => setMenuOpen((o) => !o)}
          className='flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] text-[#A1A1AA] transition hover:border-[#D4AF37] hover:text-[#D4AF37] md:hidden'
          aria-label='Toggle menu'
        >
          {menuOpen ? (
            /* X icon */
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='border-t border-[#27272A] bg-[#18181B] px-4 pb-4 md:hidden'>
          <div className='flex flex-col gap-1 pt-3'>
            <Link
              to='/'
              onClick={closeMenu}
              className='rounded-lg px-3 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-[#27272A] hover:text-[#F4F4F5]'
            >
              Home
            </Link>

            {authenticated ? (
              <>
                <Link
                  to='/dashboard'
                  onClick={closeMenu}
                  className='rounded-lg px-3 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-[#27272A] hover:text-[#F4F4F5]'
                >
                  Dashboard
                </Link>
                <button
                  type='button'
                  onClick={handleLogout}
                  className='mt-2 w-full rounded-lg border border-[#27272A] px-3 py-2.5 text-left text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#EF4444] hover:text-[#EF4444]'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  onClick={closeMenu}
                  className='rounded-lg px-3 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-[#27272A] hover:text-[#F4F4F5]'
                >
                  Login
                </Link>
                <Link
                  to='/register'
                  onClick={closeMenu}
                  className='mt-2 w-full rounded-lg bg-[#D4AF37] px-3 py-2.5 text-center text-sm font-semibold text-[#09090B] transition-all hover:bg-[#c9a430]'
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
