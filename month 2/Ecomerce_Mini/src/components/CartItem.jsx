import { useDispatch } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/cartSlice'
import { Trash2 } from 'lucide-react'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className='bg-cards rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row gap-4 sm:items-center'>
      {/* Product Image */}
      <div className='w-full sm:w-24 h-40 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2'>
        <img
          src={item.image}
          alt={item.title}
          className='w-full h-full object-contain'
        />
      </div>

      {/* Product Info */}
      <div className='flex-1 min-w-0'>
        <h3 className='text-dark font-semibold text-sm leading-snug line-clamp-2'>
          {item.title}
        </h3>
        <p className='text-primary font-bold text-base mt-1'>
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls + Remove */}
      <div className='flex sm:flex-col items-center justify-between sm:justify-center gap-3 shrink-0'>
        <div className='flex items-center gap-2 border border-gray-200 rounded-lg overflow-hidden'>
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className='w-9 h-9 flex items-center justify-center text-dark hover:bg-gray-100 transition-colors font-bold text-lg cursor-pointer'
          >
            −
          </button>
          <span className='w-8 text-center text-dark font-semibold text-sm'>
            {item.quantity}
          </span>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className='w-9 h-9 flex items-center justify-center text-dark hover:bg-gray-100 transition-colors font-bold text-lg cursor-pointer'
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className='flex items-center gap-1 text-red-400 hover:text-red-600 text-xs font-medium transition-colors cursor-pointer'
        >
          <Trash2 size={13} />
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
