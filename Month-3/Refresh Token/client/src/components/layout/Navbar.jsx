import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth, useLogout } from '../../hooks'
import Button from '../ui/Button'

function Navbar() {
  const { user, isAuthenticated } = useAuth()
  const { logout } = useLogout()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const appName = import.meta.env.VITE_APP_NAME || 'Naeem'

  const getInitial = () => {
    return user?.name?.charAt(0).toUpperCase() || 'U'
  }

  return (
    <nav className='bg-[var(--color-icon-bg)]/80 backdrop-blur-sm border-b border-[var(--color-input-border)] sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--color-button-bg)] to-[var(--color-text-muted)] rounded-xl flex items-center justify-center'>
              <svg
                className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <span className='text-lg sm:text-xl font-semibold text-[var(--color-text-dark)]'>
              {appName}
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-4'>
            {isAuthenticated ? (
              <>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-button-bg)] to-indigo-400 flex items-center justify-center text-white font-semibold text-lg shadow-lg'>
                    {getInitial()}
                  </div>
                  <span className='text-sm font-medium text-[var(--color-text-dark)]'>
                    {user?.name}
                  </span>
                </div>

                <Button onClick={logout} variant='ghost' size='md'>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button to='/login' variant='ghost' size='md'>
                  Sign In
                </Button>
                <Button to='/signup' variant='primary' size='md'>
                  Get Started
                </Button>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-[var(--color-icon-bg)] transition-colors'
          >
            <svg
              className='w-6 h-6 text-[var(--color-text-dark)]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-[var(--color-input-border)] pt-4'>
            {isAuthenticated ? (
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3 pb-4 border-b border-[var(--color-input-border)]'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-button-bg)] to-indigo-400 flex items-center justify-center text-white font-semibold text-lg shadow-lg'>
                    {getInitial()}
                  </div>
                  <span className='text-sm font-medium text-[var(--color-text-dark)]'>
                    {user?.name}
                  </span>
                </div>
                <Button
                  onClick={logout}
                  variant='ghost'
                  size='md'
                  className='w-full'
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className='flex flex-col gap-3'>
                <Button
                  to='/login'
                  variant='ghost'
                  size='md'
                  className='w-full'
                >
                  Sign In
                </Button>
                <Button
                  to='/signup'
                  variant='primary'
                  size='md'
                  className='w-full'
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
