import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

const products = [
  {
    id: 1,
    name: 'Wireless Keyboard',
    price: 3000,
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    price: 1500,
  },
  {
    id: 3,
    name: 'Bluetooth Headphones',
    price: 5000,
  },
  {
    id: 4,
    name: 'USB Cable',
    price: 800,
  },
]

function ProductList() {
  const { dispatch } = useCart()
  const { theme } = useTheme()

  function addToCart(product) {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    })
  }

  return (
    <div
      className={`rounded-lg border p-3 sm:p-5 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
      }`}
    >
      <h2
        className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}
      >
        Products
      </h2>

      <div className='grid gap-2 sm:gap-3'>
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded border transition-all duration-200 hover:shadow-md gap-2 sm:gap-0 ${
              theme === 'light'
                ? 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
            }`}
          >
            <div className='flex-1'>
              <h3
                className={`font-semibold text-sm sm:text-base ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}
              >
                {product.name}
              </h3>
              <p
                className={`text-xs sm:text-sm font-bold ${
                  theme === 'light' ? 'text-green-600' : 'text-green-400'
                }`}
              >
                Rs. {product.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className={`px-3 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto ${
                theme === 'light'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
