import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { LoginIcon, EmailIcon, LockIcon, EyeOffIcon } from '../components/icons'
import { loginSchema } from '../utils/validationSchemas'
import { useLogin, useResendVerification } from '../hooks'

function Login() {
  const { login, isLoading, unverifiedEmail } = useLogin()
  const { resend, isResending } = useResendVerification()
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  })

  const onSubmit = async (formData) => {
    await login(formData.email, formData.password)
  }

  return (
    <AuthLayout>
      <AuthCard
        icon={LoginIcon}
        title='Sign in with email'
        subtitle={
          <>
            Make a new doc to bring your words, data,
            <br />
            and teams together. For free
          </>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Input */}
          <div className='mb-3'>
            <Input
              type='email'
              id='email'
              placeholder='Email'
              icon={EmailIcon}
              {...register('email')}
            />
          </div>

          {/* Password Input */}
          <div className='mb-2'>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              icon={LockIcon}
              rightIcon={EyeOffIcon}
              onRightIconClick={() => setShowPassword((prev) => !prev)}
              {...register('password')}
            />
          </div>

          {/* Forgot Password */}
          <div className='text-right mb-5'>
            <Link
              to='/forgot-password'
              className='text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors'
            >
              Forgot password?
            </Link>
          </div>

          {/* Email not verified banner */}
          {unverifiedEmail && (
            <div className='mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-center'>
              <p className='text-xs text-amber-700 mb-2'>
                Your email is not verified. Check your inbox or request a new
                link.
              </p>
              <button
                type='button'
                onClick={() => resend(unverifiedEmail)}
                disabled={isResending}
                className='text-xs font-medium text-[var(--color-button-bg)] hover:underline disabled:opacity-50'
              >
                {isResending ? 'Sending...' : 'Resend verification email'}
              </button>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type='submit'
            variant='primary'
            className='w-full'
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Get Started'}
          </Button>

          {/* Sign Up Link */}
          <p className='text-center text-xs text-[var(--color-text-muted)] mt-4'>
            Don't have an account?{' '}
            <Link
              to='/signup'
              className='text-[var(--color-button-bg)] font-medium hover:underline'
            >
              Sign up
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}

export default Login
