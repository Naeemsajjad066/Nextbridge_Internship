import Navbar from '../components/Navbar'
import Cart from '../components/Cart'

function CartPage() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto p-6'>
        <Cart />
      </div>
    </div>
  )
}

export default CartPage
