import { useState } from 'react'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'

export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const forgotPassword = async (email) => {
    setIsLoading(true)
    try {
      const data = await authService.forgotPassword(email)
      setIsSubmitted(true)
      toast.success(data.message || 'Reset link sent! Check your inbox.')
      return { success: true }
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.')
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return { forgotPassword, isLoading, isSubmitted }
}
