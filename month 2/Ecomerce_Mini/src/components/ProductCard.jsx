import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function ProductCard({ product }) {
  const { id, title, price, image, category, rating } = product
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className='bg-cards rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100'>
      {/* Image */}
      <Link
        to={`/products/${id}`}
        className='bg-background flex items-center justify-center p-6 h-52'
      >
        <img src={image} alt={title} className='h-full w-full object-contain' />
      </Link>

      {/* Content */}
      <div className='flex flex-col flex-1 p-4 gap-3'>
        {/* Category */}
        <span className='text-xs font-medium uppercase tracking-wider text-primary'>
          {category}
        </span>

        {/* Title */}
        <h3 className='text-sm font-semibold text-main leading-snug line-clamp-2'>
          {title}
        </h3>

        {/* Rating */}
        <div className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='#84CC16'
          >
            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
          </svg>
          <span className='text-sm font-medium text-main'>{rating.rate}</span>
          <span className='text-xs text-muted'>({rating.count} reviews)</span>
        </div>

        {/* Footer: Price + Button */}
        <div className='flex flex-col lg:flex-col xl:flex-row xl:items-center xl:justify-between mt-auto pt-3 border-t border-gray-100 gap-3'>
          <span className='text-lg font-bold text-dark'>
            ${price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            className='flex items-center justify-center gap-2 bg-primary hover:bg-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap w-full xl:w-auto'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='9' cy='21' r='1' />
              <circle cx='20' cy='21' r='1' />
              <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
