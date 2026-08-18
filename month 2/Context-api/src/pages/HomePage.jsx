import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function HomePage() {
  const { theme } = useTheme()
  const { state } = useCart()

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-4xl mx-auto p-2 sm:p-4 space-y-4 sm:space-y-6'>
        <Card />

        {/* Quick Action Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
          <Link to='/products' className='group'>
            <div
              className={`p-4 sm:p-6 rounded-lg border transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 hover:border-blue-300'
                  : 'bg-gray-800 border-gray-700 hover:border-blue-600'
              }`}
            >
              <div className='text-center'>
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Browse Products
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  Explore our collection of tech products
                </p>
                <div
                  className={`mt-2 sm:mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${
                    theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`}
                >
                  Shop Now
                  <span className='group-hover:translate-x-1 transition-transform'>→</span>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/cart' className='group'>
            <div
              className={`p-4 sm:p-6 rounded-lg border transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 hover:border-green-300'
                  : 'bg-gray-800 border-gray-700 hover:border-green-600'
              }`}
            >
              <div className='text-center'>
                <div className='relative inline-block'>
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    My Cart
                  </h3>
                  {state.cart.length > 0 && (
                    <span
                      className={`absolute -top-1 -right-4 sm:-right-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full text-xs font-bold flex items-center justify-center ${
                        theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-400 text-gray-900'
                      }`}
                    >
                      {state.cart.length}
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  {state.cart.length === 0
                    ? 'Your cart is empty'
                    : `${state.cart.length} item${state.cart.length !== 1 ? 's' : ''} in cart`}
                </p>
                <div
                  className={`mt-2 sm:mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${
                    theme === 'light' ? 'text-green-600' : 'text-green-400'
                  }`}
                >
                  View Cart
                  <span className='group-hover:translate-x-1 transition-transform'>→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Cart Summary */}
        {state.cart.length > 0 && (
          <div
            className={`rounded-lg border p-3 sm:p-4 ${
              theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
            }`}
          >
            <h3
              className={`text-base sm:text-lg font-bold mb-3 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Quick Cart Summary
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              <div
                className={`text-center p-2 sm:p-3 rounded ${
                  theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`text-lg sm:text-xl font-bold ${
                    theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                  }`}
                >
                  {state.cart.length}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  Items
                </div>
              </div>
              <div
                className={`text-center p-2 sm:p-3 rounded ${
                  theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`text-lg sm:text-xl font-bold ${
                    theme === 'light' ? 'text-green-600' : 'text-green-400'
                  }`}
                >
                  Rs. {state.cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  Total
                </div>
              </div>
              <div className='flex items-center justify-center sm:col-span-1 col-span-full'>
                <Link
                  to='/cart'
                  className={`px-3 sm:px-4 py-2 rounded font-medium transition-all duration-200 hover:scale-105 text-sm w-full sm:w-auto text-center ${
                    theme === 'light'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
