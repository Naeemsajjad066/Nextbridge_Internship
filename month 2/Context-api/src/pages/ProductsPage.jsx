import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

function ProductsPage() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto p-6'>
        <ProductList />
      </div>
    </div>
  )
}

export default ProductsPage
