import { Link } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[#09090B] px-4 py-10'>
      {/* Subtle background glow */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] opacity-[0.04] blur-3xl' />
      </div>

      <div className='relative w-full max-w-md'>
        {/* Logo mark */}
        <div className='mb-8 text-center'>
          <span className='text-2xl font-bold tracking-tight text-[#D4AF37]'>
            AuthApp
          </span>
          <p className='mt-1 text-sm text-[#A1A1AA]'>Sign in to your account</p>
        </div>

        {/* Card */}
        <div className='rounded-2xl border border-[#27272A] bg-[#18181B] p-6 shadow-2xl sm:p-8'>
          <h1 className='mb-1 text-xl font-semibold text-[#F4F4F5]'>
            Welcome back
          </h1>
          <p className='mb-6 text-sm text-[#A1A1AA]'>
            Enter your credentials to continue
          </p>
          <LoginForm />
          <p className='mt-6 text-center text-sm text-[#A1A1AA]'>
            Don't have an account?{' '}
            <Link
              to='/register'
              className='font-medium text-[#D4AF37] hover:underline'
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
