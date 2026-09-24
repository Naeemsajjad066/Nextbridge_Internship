import { Link, useLocation } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Button from '../components/ui/Button'
import { EmailIcon } from '../components/icons'
import { useState } from 'react'
import toast from 'react-hot-toast'
import authService from '../services/auth.service'

function CheckEmail() {
  const { state } = useLocation()
  const email = state?.email
  const [isSending, setIsSending] = useState(false)

  const resendEmail = async () => {
    if (!email) return
    setIsSending(true)
    try {
      const data = await authService.resendVerificationEmail(email)
      toast.success(data.message || 'A new verification email has been sent.')
    } catch (error) {
      toast.error(error.message || 'Unable to resend the verification email.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <AuthLayout>
      <AuthCard
        icon={EmailIcon}
        title='Check your email'
        subtitle={
          email
            ? `We sent a verification link to ${email}. Verify your email before signing in.`
            : 'We sent a verification link to your email. Verify your email before signing in.'
        }
      >
        <Link to='/login'>
          <Button type='button' variant='primary' className='w-full'>
            Go to login
          </Button>
        </Link>
        {email && (
          <Button
            type='button'
            variant='secondary'
            className='w-full mt-3'
            onClick={resendEmail}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Resend verification email'}
          </Button>
        )}
      </AuthCard>
    </AuthLayout>
  )
}

export default CheckEmail
