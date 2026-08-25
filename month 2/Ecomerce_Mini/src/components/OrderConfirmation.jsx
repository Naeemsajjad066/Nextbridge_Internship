import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function OrderConfirmation({ fullName, city, email }) {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6 text-center'>
      <div className='bg-cards rounded-2xl shadow p-10 flex flex-col items-center gap-4 max-w-md w-full'>
        <CheckCircle size={64} className='text-primary' />
        <h1 className='text-2xl font-bold text-dark'>Order Placed!</h1>
        <p className='text-muted text-sm'>
          Thank you, <span className='font-semibold text-dark'>{fullName}</span>
          ! Your order has been confirmed and will be shipped to{' '}
          <span className='font-semibold text-dark'>{city}</span>.
        </p>
        <p className='text-xs text-muted'>
          A confirmation will be sent to{' '}
          <span className='font-medium text-dark'>{email}</span>.
        </p>
        <button
          onClick={() => navigate('/products')}
          className='mt-2 w-full bg-primary hover:bg-dark text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer'
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default OrderConfirmation
