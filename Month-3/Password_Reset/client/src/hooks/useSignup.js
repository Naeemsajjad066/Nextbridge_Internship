import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'

export const useSignup = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const signup = async (name, email, password) => {
    setIsLoading(true)
    try {
      const data = await authService.signup(name, email, password)

      toast.success(data.message || 'Account created successfully!')

      setTimeout(() => {
        navigate('/login')
      }, 1000)

      return { success: true, data }
    } catch (error) {
      toast.error(error.message || 'Signup failed. Please try again.')
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return { signup, isLoading }
}
