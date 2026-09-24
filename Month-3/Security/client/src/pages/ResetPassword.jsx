import { useEffect, useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { LockIcon, EyeOffIcon } from '../components/icons'
import { resetPasswordSchema } from '../utils/validationSchemas'
import { useResetPassword } from '../hooks'

function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  const { resetPassword, isLoading } = useResetPassword()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange',
  })

  // Redirect if no token in URL
  useEffect(() => {
    if (!token) {
      navigate('/forgot-password')
    }
  }, [token, navigate])

  const onSubmit = async (formData) => {
    await resetPassword(token, formData.newPassword)
  }

  if (!token) return null

  return (
    <AuthLayout>
      <AuthCard
        icon={LockIcon}
        title='Set new password'
        subtitle={
          <>
            Your new password must be at least
            <br />6 characters long
          </>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* New Password */}
          <div className='mb-3'>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='newPassword'
              placeholder='New Password'
              icon={LockIcon}
              rightIcon={EyeOffIcon}
              onRightIconClick={() => setShowPassword((prev) => !prev)}
              error={errors.newPassword?.message}
              {...register('newPassword')}
            />
          </div>

          {/* Confirm Password */}
          <div className='mb-5'>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirmPassword'
              placeholder='Confirm Password'
              icon={LockIcon}
              rightIcon={EyeOffIcon}
              onRightIconClick={() => setShowConfirmPassword((prev) => !prev)}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
            />
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            variant='primary'
            className='w-full'
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
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
      </AuthCard>
    </AuthLayout>
  )
}

export default ResetPassword
