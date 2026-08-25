import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ShoppingBag } from 'lucide-react'

import checkoutSchema from '../schemas/checkoutSchema'
import { clearCart } from '../redux/cartSlice'
import ShippingForm from '../components/ShippingForm'
import OrderSummary from '../components/OrderSummary'
import OrderConfirmation from '../components/OrderConfirmation'

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [submittedData, setSubmittedData] = useState(null)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  })

  const onSubmit = (data) => {
    dispatch(clearCart())
    setSubmittedData(data)
  }

  if (submittedData) {
    return <OrderConfirmation {...submittedData} />
  }

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-background flex flex-col items-center justify-center gap-4 text-center px-6'>
        <ShoppingBag size={56} className='text-muted opacity-30' />
        <h1 className='text-2xl font-bold text-dark'>Nothing to checkout</h1>
        <p className='text-muted text-sm'>
          Add some products to your cart first.
        </p>
        <button
          onClick={() => navigate('/products')}
          className='mt-2 bg-primary hover:bg-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer'
        >
          Browse Products
        </button>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background px-4 sm:px-6 py-8 sm:py-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center gap-3 mb-8'>
          <ShoppingBag size={26} className='text-primary' />
          <h1 className='text-2xl sm:text-3xl font-bold text-dark'>Checkout</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>
              <ShippingForm register={register} errors={errors} />
            </div>
            <div className='lg:col-span-1'>
              <OrderSummary cartItems={cartItems} total={total} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
