import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from '../redux/authSlice'
import { loginUser } from '../services/authService'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => {
    setServerError('')

    const result = loginUser(data.email, data.password)

    if (!result.success) {
      setServerError(result.message)
      return
    }

    dispatch(login(result.token))
    navigate('/')
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-background'>
      {/* Login Card */}
      <div className='w-full max-w-md bg-cards rounded-2xl shadow-lg p-8'>
        {/* Title */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-main mb-2'>Welcome Back</h1>
          <p className='text-muted'>Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* Email Field */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-main mb-2'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              className={`w-full px-4 py-3 rounded-lg border text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all ${
                errors.email
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-300 focus:border-primary'
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className='text-xs text-red-500 mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-main mb-2'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              className={`w-full px-4 py-3 rounded-lg border text-main focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all ${
                errors.password
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-300 focus:border-primary'
              }`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <p className='text-xs text-red-500 mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Server Error */}
          {serverError && (
            <div className='text-sm p-3 rounded-lg bg-red-50 text-red-600 border border-red-200'>
              {serverError}
            </div>
          )}

          {/* Login Button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-primary hover:bg-dark text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-2'
          >
            {isSubmitting ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
