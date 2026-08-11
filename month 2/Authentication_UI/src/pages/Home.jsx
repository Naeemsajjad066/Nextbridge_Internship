import { Link } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

function Home() {
  const auth = isAuthenticated()

  return (
    <div className='relative overflow-hidden bg-[#09090B]'>
      {/* Background glow effects */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/4 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] opacity-[0.05] blur-3xl sm:h-[500px] sm:w-[500px]' />
        <div className='absolute right-1/4 top-3/4 h-[300px] w-[300px] rounded-full bg-[#D4AF37] opacity-[0.03] blur-3xl sm:h-[400px] sm:w-[400px]' />
      </div>

      {/* Hero */}
      <section className='relative mx-auto flex min-h-[calc(100vh-65px)] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24'>
        {/* Badge */}
        <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#D4AF37]' />
          Secure Authentication
        </div>

        <h1 className='mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F4F4F5] sm:text-5xl md:text-6xl'>
          Authentication <span className='text-[#D4AF37]'>built for</span> the
          modern web
        </h1>

        <p className='mb-10 max-w-xl px-2 text-base leading-relaxed text-[#A1A1AA] sm:text-lg'>
          A clean, secure, and production-ready authentication system. Register,
          log in, and manage sessions with confidence.
        </p>

        <div className='flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4'>
          {auth ? (
            <Link
              to='/dashboard'
              className='w-full rounded-xl bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-[#c9a430] hover:shadow-lg hover:shadow-[#D4AF37]/20 sm:w-auto'
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to='/register'
                className='w-full rounded-xl bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-[#c9a430] hover:shadow-lg hover:shadow-[#D4AF37]/20 sm:w-auto'
              >
                Get Started
              </Link>
              <Link
                to='/login'
                className='w-full rounded-xl border border-[#27272A] px-8 py-3 text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:border-[#F4F4F5] hover:text-[#F4F4F5] sm:w-auto'
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
