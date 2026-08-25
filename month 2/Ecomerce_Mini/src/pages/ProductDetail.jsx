import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { fetchProductById } from '../services/productService'
import { addToCart } from '../redux/cartSlice'

function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
  })

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <p className='text-muted text-lg'>Loading product...</p>
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <p className='text-red-500 text-lg'>Product not found.</p>
      </div>
    )
  }

  const { title, price, description, category, image, rating } = product

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        {/* Breadcrumb */}
        <nav className='flex items-center gap-2 text-sm text-muted mb-10'>
          <Link to='/' className='hover:text-primary transition-colors'>
            Home
          </Link>
          <span>/</span>
          <Link to='/products' className='hover:text-primary transition-colors'>
            Products
          </Link>
          <span>/</span>
          <span className='text-dark font-medium line-clamp-1'>{title}</span>
        </nav>

        {/* Main Content */}
        <div className='bg-cards rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden grid grid-cols-1 md:grid-cols-2'>
          {/* Left — Image */}
          <div className='bg-background flex items-center justify-center p-12 min-h-[420px]'>
            <img
              src={image}
              alt={title}
              className='max-h-80 w-full object-contain hover:scale-105 transition-transform duration-300'
            />
          </div>

          {/* Right — Details */}
          <div className='flex flex-col gap-6 p-10 border-l border-gray-100'>
            <span className='text-xs font-semibold uppercase tracking-widest text-primary'>
              {category}
            </span>

            <h1 className='text-2xl font-bold text-dark leading-snug'>
              {title}
            </h1>

            {/* Rating */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill={i < Math.round(rating.rate) ? '#84CC16' : '#E5E7EB'}
                  >
                    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                  </svg>
                ))}
              </div>
              <span className='text-sm font-semibold text-dark'>
                {rating.rate}
              </span>
              <span className='text-sm text-muted'>
                ({rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <span className='text-4xl font-extrabold text-dark'>
              ${price.toFixed(2)}
            </span>

            <hr className='border-gray-100' />

            <p className='text-sm text-muted leading-relaxed'>{description}</p>

            {/* Add to Cart */}
            <div className='flex items-center gap-4 mt-2'>
              <button
                onClick={handleAddToCart}
                className='flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 cursor-pointer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
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

            {/* Trust badges */}
            <div className='flex items-center gap-6 pt-2'>
              <div className='flex items-center gap-1.5 text-xs text-muted'>
                <span>🚚</span> Free shipping over $50
              </div>
              <div className='flex items-center gap-1.5 text-xs text-muted'>
                <span>🔄</span> Easy returns
              </div>
              <div className='flex items-center gap-1.5 text-xs text-muted'>
                <span>🔒</span> Secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
