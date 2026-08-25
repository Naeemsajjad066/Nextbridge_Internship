import { ShoppingBag } from 'lucide-react'
import { SectionHeader } from './FormField'

function OrderSummary({ cartItems, total }) {
  return (
    <div className='bg-cards rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24'>
      <SectionHeader icon={ShoppingBag} title='Order Summary' />

      {/* Item list */}
      <div className='flex flex-col gap-3 mb-4'>
        {cartItems.map((item) => (
          <div key={item.id} className='flex items-center gap-3'>
            <div className='w-12 h-12 rounded-lg bg-background flex items-center justify-center p-1 shrink-0'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-xs font-medium text-dark line-clamp-1'>
                {item.title}
              </p>
              <p className='text-xs text-muted'>× {item.quantity}</p>
            </div>
            <span className='text-xs font-semibold text-dark shrink-0'>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className='border-t border-gray-100 pt-4 flex flex-col gap-2'>
        <div className='flex justify-between text-sm text-muted'>
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className='flex justify-between text-sm text-muted'>
          <span>Shipping</span>
          <span className='text-primary font-medium'>Free</span>
        </div>
        <div className='flex justify-between text-base font-bold text-dark border-t border-gray-100 pt-3 mt-1'>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Submit */}
      <button
        type='submit'
        className='mt-6 w-full bg-primary hover:bg-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm cursor-pointer'
      >
        Place Order · ${total.toFixed(2)}
      </button>

      <p className='mt-3 text-center text-xs text-muted'>
        🔒 Your payment info is secure
      </p>
    </div>
  )
}

export default OrderSummary
