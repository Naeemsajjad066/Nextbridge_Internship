import { useAuth } from '../../hooks'
import Card from '../ui/Card'
import Button from '../ui/Button'

function CTASection() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return null
  }

  return (
    <Card
      variant='feature'
      className='mt-16 sm:mt-24 md:mt-32 text-center p-6 sm:p-8 md:p-12 shadow-xl'
    >
      <h2 className='text-2xl sm:text-3xl font-bold text-[var(--color-text-dark)] mb-4'>
        Ready to get started?
      </h2>
      <p className='text-sm sm:text-base text-[var(--color-text-muted)] mb-6 sm:mb-8 max-w-2xl mx-auto'>
        Join thousands of users who are already creating amazing content. Sign
        up now and start your journey.
      </p>
      <Button
        to='/signup'
        variant='primary'
        size='lg'
        className='w-full sm:w-auto'
      >
        Create Free Account
      </Button>
    </Card>
  )
}

export default CTASection
