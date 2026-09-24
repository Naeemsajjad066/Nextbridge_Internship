import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { EmailIcon } from '../components/icons'
import { forgotPasswordSchema } from '../utils/validationSchemas'
import { useForgotPassword } from '../hooks'

function ForgotPassword() {
  const { forgotPassword, isLoading, isSubmitted } = useForgotPassword()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onChange',
  })

  const onSubmit = async (formData) => {
    await forgotPassword(formData.email)
  }

  return (
    <AuthLayout>
      <AuthCard
        icon={EmailIcon}
        title='Forgot your password?'
        subtitle={
          isSubmitted
            ? "We've sent a reset link to your email. Check your inbox."
            : <>
                Enter your email and we'll send you
                <br />
                a link to reset your password
              </>
        }
      >
        {isSubmitted ? (
          <div className='text-center'>
            <p className='text-sm text-[var(--color-text-muted)] mb-5'>
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Link
              to='/login'
              className='text-[var(--color-button-bg)] font-medium text-sm hover:underline'
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email Input */}
            <div className='mb-5'>
              <Input
                type='email'
                id='email'
                placeholder='Email'
                icon={EmailIcon}
                error={errors.email?.message}
                {...register('email')}
              />
            </div>

            {/* Submit Button */}
            <Button
              type='submit'
              variant='primary'
              className='w-full'
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>

            {/* Back to Login */}
            <p className='text-center text-xs text-[var(--color-text-muted)] mt-4'>
              Remember your password?{' '}
              <Link
                to='/login'
                className='text-[var(--color-button-bg)] font-medium hover:underline'
              >
                Sign in
              </Link>
            </p>
          </form>
        )}
      </AuthCard>
    </AuthLayout>
  )
}

export default ForgotPassword
