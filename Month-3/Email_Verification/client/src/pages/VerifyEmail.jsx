import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AuthLayout from '../components/layout/AuthLayout'
import AuthCard from '../components/auth/AuthCard'
import Button from '../components/ui/Button'
import { EmailIcon } from '../components/icons'
import authService from '../services/auth.service'

function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState(token ? 'loading' : 'error')
  const [message, setMessage] = useState(
    token ? 'Verifying your email...' : 'This verification link is missing a token.'
  )

  const hasVerified = useRef(false)

  useEffect(() => {
    if (!token) return
    if (hasVerified.current) return // already called, skip the second StrictMode invoke

    hasVerified.current = true

    const verify = async () => {
      try {
        const data = await authService.verifyEmail(token)
        setStatus('success')
        setMessage(data.message || 'Your email has been verified successfully.')
      } catch (error) {
        setStatus('error')
        setMessage(error.message || 'This verification link is invalid or expired.')
      }
    }

    verify()
  }, [token])

  return (
    <AuthLayout>
      <AuthCard
        icon={EmailIcon}
        title={status === 'success' ? 'Email verified!' : 'Email verification'}
        subtitle={message}
      >
        {status === 'loading' && (
          <p className='text-center text-sm text-[var(--color-text-muted)]'>Please wait...</p>
        )}
        {status !== 'loading' && (
          <Link to='/login'>
            <Button type='button' variant='primary' className='w-full'>
              Go to login
            </Button>
          </Link>
        )}
      </AuthCard>
    </AuthLayout>
  )
}

export default VerifyEmail
