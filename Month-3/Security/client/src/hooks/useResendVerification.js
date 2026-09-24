import { useState } from 'react'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'

export const useResendVerification = () => {
  const [isResending, setIsResending] = useState(false)

  const resend = async (email) => {
    setIsResending(true)
    try {
      await authService.resendVerificationEmail(email)
      toast.success('Verification email sent! Check your inbox.')
      return { success: true }
    } catch (error) {
      toast.error(error.message || 'Failed to resend. Please try again.')
      return { success: false, error }
    } finally {
      setIsResending(false)
    }
  }

  return { resend, isResending }
}
