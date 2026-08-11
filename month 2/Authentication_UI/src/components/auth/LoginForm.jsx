import Button from '../common/Button'
import Input from '../common/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/loginSchema'
import { login } from '../../services/authService'
import { setToken } from '../../utils/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  function onSubmit(data) {
    try {
      setServerError('')
      const token = login(data)
      setToken(token)
      navigate('/')
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Input
        label='Email'
        type='email'
        placeholder='you@example.com'
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label='Password'
        type='password'
        placeholder='••••••••'
        {...register('password')}
        error={errors.password?.message}
      />

      {serverError && (
        <p className='rounded-lg border border-[#EF4444]/20 bg-[#EF4444]/10 px-3 py-2 text-sm text-[#EF4444]'>
          {serverError}
        </p>
      )}

      <Button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Signing in…' : 'Sign In'}
      </Button>
    </form>
  )
}

export default LoginForm
