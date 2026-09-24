import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'
import { setUser } from '../store'

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [unverifiedEmail, setUnverifiedEmail] = useState(null)

  const login = async (email, password) => {
    setIsLoading(true)
    setUnverifiedEmail(null)
    try {
      const data = await authService.login(email, password)

      localStorage.setItem('accessToken', data.data.accessToken)
      localStorage.setItem('user', JSON.stringify(data.data.user))

      dispatch(
        setUser({ user: data.data.user, accessToken: data.data.accessToken })
      )

      toast.success(data.message || 'Login successful!')
      navigate('/')

      return { success: true, data }
    } catch (error) {
      // 403 = email not verified — surface a resend button instead of a generic toast
      if (error.message?.toLowerCase().includes('verify your email')) {
        setUnverifiedEmail(email)
      } else {
        toast.error(error.message || 'Login failed. Please try again.')
      }
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return { login, isLoading, unverifiedEmail }
}
