import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from './useAuth'
import { loginSchema } from '../schemas/loginSchema'

/**
 * Custom hook that encapsulates login page logic
 */
export const useLogin = () => {
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data) => {
    setLoginError('')

    try {
      const result = await login(data.email, data.password)

      if (result.success) {
        navigate('/')
      } else {
        setLoginError(result.message)
      }
    } catch (error) {
      setLoginError('An error occurred during login. Please try again.')
    }
  }

  const handleDemoLogin = () => {
    reset({
      email: 'admin@movieapp.com',
      password: 'admin123',
    })
  }

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    loginError,
    onSubmit,
    handleDemoLogin,
  }
}
