import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-background flex flex-col items-center justify-center gap-4 text-center px-6'>
        <ShoppingCart size={64} className='text-muted opacity-30' />
        <h1 className='text-2xl sm:text-3xl font-bold text-dark'>Your Cart</h1>
        <p className='text-muted text-base sm:text-lg'>
          Your cart is empty. Start shopping!
        </p>
        <a
          href='/products'
          className='mt-2 inline-block bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-dark transition-colors cursor-pointer'
        >
          Browse Products
        </a>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background px-4 sm:px-6 py-8 sm:py-10'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-6 sm:mb-8'>
          <ShoppingCart size={26} className='text-primary shrink-0' />
          <h1 className='text-2xl sm:text-3xl font-bold text-dark'>
            Your Cart
          </h1>
          <span className='ml-auto text-muted text-xs sm:text-sm whitespace-nowrap'>
            {cartItems.length} item{cartItems.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Cart Items */}
        <div className='flex flex-col gap-4'>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className='mt-6 sm:mt-8 bg-cards rounded-2xl shadow p-5 sm:p-6 flex flex-col gap-4'>
          <h2 className='text-lg sm:text-xl font-semibold text-dark border-b border-gray-100 pb-4'>
            Order Summary
          </h2>

          <div className='flex justify-between text-muted text-sm'>
            <span>
              Subtotal ({cartItems.length} item{cartItems.length > 1 ? 's' : ''}
              )
            </span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className='flex justify-between text-muted text-sm'>
            <span>Shipping</span>
            <span className='text-primary font-medium'>Free</span>
          </div>

          <div className='flex justify-between text-dark font-bold text-base sm:text-lg border-t border-gray-100 pt-4'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            to={'/checkout'}
            className='block text-center w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-dark transition-colors text-sm sm:text-base mt-2 cursor-pointer'
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
