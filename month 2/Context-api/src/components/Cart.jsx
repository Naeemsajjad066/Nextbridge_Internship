import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

function Cart() {
  const { state, dispatch } = useCart()
  const { theme } = useTheme()

  const total = state.cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div
      className={`rounded-lg border p-5 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
      }`}
    >
      <div className='flex items-center justify-between mb-4'>
        <h2 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Shopping Cart
        </h2>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-blue-900 text-blue-300'
          }`}
        >
          {state.cart.length} items
        </span>
      </div>

      {state.cart.length === 0 ? (
        <div className='text-center py-6'>
          <p className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <div className='space-y-3 mb-4'>
            {state.cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`flex items-center justify-between p-3 rounded border transition-all duration-200 ${
                  theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-700 border-gray-600'
                }`}
              >
                <div>
                  <h4
                    className={`font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p
                    className={`text-sm ${theme === 'light' ? 'text-green-600' : 'text-green-400'}`}
                  >
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: 'DELETE_ITEM',
                      payload: item.id,
                    })
                  }
                  className={`px-2 py-1 rounded text-xs transition-all duration-200 hover:scale-105 active:scale-95 ${
                    theme === 'light'
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                  }`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            className={`border-t pt-3 ${theme === 'light' ? 'border-gray-200' : 'border-gray-600'}`}
          >
            <div
              className={`flex items-center justify-between mb-3 text-base font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              <span>Total:</span>
              <span className={`${theme === 'light' ? 'text-green-600' : 'text-green-400'}`}>
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              disabled={state.cart.length === 0}
              className={`w-full py-2 rounded font-medium transition-all duration-200 hover:scale-[1.02] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed ${
                theme === 'light'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
