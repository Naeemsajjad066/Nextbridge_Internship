import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchFeaturedProducts } from '../services/productService'
import ProductCard from '../components/ProductCard'

const categories = [
  {
    name: "Men's Clothing",
    value: "men's clothing",
    emoji: '👔',
    bg: 'bg-blue-50',
  },
  {
    name: "Women's Clothing",
    value: "women's clothing",
    emoji: '👗',
    bg: 'bg-pink-50',
  },
  {
    name: 'Electronics',
    value: 'electronics',
    emoji: '💻',
    bg: 'bg-yellow-50',
  },
  {
    name: 'Jewelery',
    value: 'jewelery',
    emoji: '💍',
    bg: 'bg-purple-50',
  },
]

function Home() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: fetchFeaturedProducts,
  })

  return (
    <div className='min-h-screen bg-background'>
      {/* ── Hero ── */}
      <section
        className='relative bg-dark bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-dark opacity-80' />

        {/* Content */}
        <div className='relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-6'>
          <span className='text-accent text-sm font-semibold uppercase tracking-widest'>
            New Arrivals 2024
          </span>
          <h1 className='text-5xl font-extrabold text-white leading-tight max-w-2xl'>
            Shop the Latest <span className='text-primary'>Trends</span>
          </h1>
          <p className='text-gray-300 text-lg max-w-xl'>
            Discover thousands of products across all categories — delivered
            fast, priced right.
          </p>
          <Link
            to='/products'
            className='bg-primary hover:bg-accent text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 mt-2'
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className='max-w-7xl mx-auto px-6 py-16'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold text-dark'>Shop by Category</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to={`/products?category=${cat.value}`}
              className={`${cat.bg} rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-200 cursor-pointer`}
            >
              <span className='text-4xl'>{cat.emoji}</span>
              <span className='text-sm font-semibold text-dark text-center'>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-2xl font-bold text-dark'>Featured Products</h2>
          <Link
            to='/products'
            className='text-sm font-medium text-primary hover:text-dark transition-colors duration-200'
          >
            View All →
          </Link>
        </div>

        {isLoading ? (
          <div className='flex items-center justify-center py-20'>
            <p className='text-muted'>Loading products...</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
