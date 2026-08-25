import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../services/productService'
import ProductCard from '../components/ProductCard'

function Products() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <p className='text-muted text-lg'>Loading products...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <p className='text-red-500 text-lg'>Failed to load products.</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto px-6 py-10'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-dark'>All Products</h1>
          <p className='text-muted mt-1'>{products.length} items available</p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
