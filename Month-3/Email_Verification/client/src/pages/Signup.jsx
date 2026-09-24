import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import {
  UserAddIcon,
  UserIcon,
  EmailIcon,
  LockIcon,
  EyeOffIcon,
} from '../components/icons'
import { signupSchema } from '../utils/validationSchemas'
import { useSignup } from '../hooks'

function Signup() {
  const { signup, isLoading } = useSignup()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  })

  const onSubmit = async (formData) => {
    await signup(formData.name, formData.email, formData.password)
  }

  return (
    <AuthLayout>
      <AuthCard
        icon={UserAddIcon}
        title='Sign up with email'
        subtitle={
          <>
            Create your account to get started
            <br />
            and join our community
          </>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name Input */}
          <div className='mb-3'>
            <Input
              type='text'
              id='name'
              placeholder='Name'
              icon={UserIcon}
              error={errors.name?.message}
              {...register('name')}
            />
          </div>

          {/* Email Input */}
          <div className='mb-3'>
            <Input
              type='email'
              id='email'
              placeholder='Email'
              icon={EmailIcon}
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          {/* Password Input */}
          <div className='mb-3'>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Password'
              icon={LockIcon}
              rightIcon={EyeOffIcon}
              onRightIconClick={() => setShowPassword((prev) => !prev)}
              error={errors.password?.message}
              {...register('password')}
            />
          </div>

          {/* Confirm Password Input */}
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
            {isLoading ? 'Creating account...' : 'Get Started'}
          </Button>
          <p className='text-center text-xs text-[var(--color-text-muted)] mt-4'>
            Already have an account?{' '}
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

export default Signup
