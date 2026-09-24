import { useAuth } from '../../hooks'
import Button from '../ui/Button'

function Hero() {
  const { isAuthenticated } = useAuth()
  const appName = import.meta.env.VITE_APP_NAME || 'Naeem'

  return (
    <div className='text-center max-w-3xl mx-auto'>
      <div className='flex justify-center mb-8'>
        <div className='w-20 h-20 bg-[var(--color-icon-bg)] rounded-2xl flex items-center justify-center shadow-xl'>
          <svg
            className='w-10 h-10 text-[var(--color-button-bg)]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            />
          </svg>
        </div>
      </div>

      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-6'>
        Welcome to
        <br />
        {appName}
      </h1>

      <p className='text-base sm:text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed'>
        Create amazing documents, collaborate with your team, and bring your
        ideas to life. Start building something extraordinary today.
      </p>

      {!isAuthenticated && (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
          <Button
            to='/signup'
            variant='primary'
            size='lg'
            className='w-full sm:w-auto'
          >
            Get Started Free
          </Button>
          <Button
            to='/login'
            variant='secondary'
            size='lg'
            className='w-full sm:w-auto'
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  )
}

export default Hero
