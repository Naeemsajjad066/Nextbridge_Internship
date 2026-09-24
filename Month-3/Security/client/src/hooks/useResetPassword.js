import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'

export const useResetPassword = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = async (token, newPassword) => {
    setIsLoading(true)
    try {
      const data = await authService.resetPassword(token, newPassword)
      toast.success(data.message || 'Password reset successfully!')
      navigate('/login')
      return { success: true }
    } catch (error) {
      toast.error(
        error.message || 'Failed to reset password. The link may have expired.'
      )
      return { success: false, error }
    } finally {
      setIsLoading(false)
    }
  }

  return { resetPassword, isLoading }
}
