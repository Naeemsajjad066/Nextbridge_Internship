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

      // Show success toast
      toast.success(data.message || 'Account created successfully!')

      // Navigate to login page after successful signup
      setTimeout(() => {
        navigate('/login')
      }, 1000)

      return { success: true, data }
    } catch (error) {
      // Show error toast
      toast.error(error.message || 'Signup failed. Please try again.')
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return { signup, isLoading }
}
