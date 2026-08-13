import { Link, Navigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { isLoggedIn } from '../services/authService'
import FormInput from '../components/auth/FormInput'
import PasswordInput from '../components/auth/PasswordInput'
import { EmailIcon, LoadingSpinner } from '../components/icons'

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    loginError,
    onSubmit,
    handleDemoLogin,
  } = useLogin()

  if (isLoggedIn()) {
    return <Navigate to='/' replace />
  }

  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute -top-40 -right-40 w-80 h-80 rounded-full bg-amber-500 opacity-5 blur-3xl' />
      <div className='absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-slate-600 opacity-5 blur-3xl' />

      <div className='relative max-w-md w-full space-y-8'>
        {/* Header */}
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-slate-50 mb-2'>
            Welcome back!
          </h2>
          <p className='text-slate-400'>Sign in to your account to continue</p>
        </div>

        {/* Form card */}
        <div className='bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-slate-600'>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            {/* Error message */}
            {loginError && (
              <div className='bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm'>
                {loginError}
              </div>
            )}

            {/* Email input */}
            <FormInput
              label='Email Address'
              id='email'
              type='email'
              placeholder='Enter your email'
              register={register('email')}
              error={errors.email?.message}
              icon={EmailIcon}
            />

            {/* Password input */}
            <PasswordInput
              label='Password'
              id='password'
              placeholder='Enter your password'
              register={register('password')}
              error={errors.password?.message}
            />

            {/* Remember me & Forgot password */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-amber-500 focus:ring-amber-500 border-slate-600 rounded bg-slate-700'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-slate-400'
                >
                  Remember me
                </label>
              </div>
              <a
                href='#'
                className='text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200'
              >
                Forgot your password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type='submit'
              disabled={!isValid || isSubmitting}
              className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100'
            >
              {isSubmitting ? (
                <div className='flex items-center'>
                  <LoadingSpinner className='-ml-1 mr-3 h-5 w-5 text-slate-900' />
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </button>

            {/* Demo credentials button */}
            <button
              type='button'
              onClick={handleDemoLogin}
              disabled={isSubmitting}
              className='w-full flex justify-center py-3 px-4 border border-amber-500/50 rounded-lg shadow-sm text-sm font-medium text-amber-400 bg-amber-500/20 hover:bg-amber-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
            >
              Fill Demo Credentials
            </button>
          </form>

          {/* Sign up link */}
          <div className='mt-6 text-center'>
            <p className='text-slate-400'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='font-medium text-amber-400 hover:text-amber-300 transition-colors duration-200'
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Demo credentials hint */}
        <div className='text-center'>
          <p className='text-slate-400 text-sm'>
            Demo credentials: admin@movieapp.com / admin123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
