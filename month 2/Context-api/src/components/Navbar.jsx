import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { state } = useCart()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinkClass = (path) => `
        cursor-pointer transition-all duration-200 hover:scale-105 px-2 sm:px-3 py-2 rounded text-xs sm:text-sm relative
        ${
          isActive(path)
            ? theme === 'light'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-blue-900/50 text-blue-300'
            : theme === 'light'
              ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }
    `

  return (
    <nav
      className={`border-b transition-colors duration-200 ${
        theme === 'light'
          ? 'bg-white border-gray-200 shadow-sm'
          : 'bg-gray-900 border-gray-700 shadow-lg'
      }`}
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-4 py-2 sm:py-3'>
        <Link
          to='/'
          className={`text-sm sm:text-lg font-bold transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
          Context Store
        </Link>

        <div className='flex items-center gap-2 sm:gap-6'>
          <div className='flex items-center gap-1 text-xs sm:text-sm font-medium'>
            <Link to='/' className={navLinkClass('/')}>
              Home
            </Link>

            <Link to='/products' className={navLinkClass('/products')}>
              <span className='hidden sm:inline'>Products</span>
              <span className='sm:hidden'>Shop</span>
            </Link>

            <Link to='/cart' className={navLinkClass('/cart')}>
              <span className='flex items-center gap-1 sm:gap-2'>
                <span className='hidden sm:inline'>Cart</span>
                <span className='sm:hidden'>Cart</span>
                {state.cart.length > 0 && (
                  <span
                    className={`inline-flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 text-xs font-bold rounded-full ${
                      theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-400 text-gray-900'
                    }`}
                  >
                    {state.cart.length}
                  </span>
                )}
              </span>
            </Link>

            <Link to='/about' className={navLinkClass('/about')}>
              About
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            className={`flex items-center gap-1 sm:gap-2 rounded px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
              theme === 'light'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-100 text-gray-900 hover:bg-white'
            }`}
          >
            <span className='hidden sm:inline'>{theme === 'light' ? 'Dark' : 'Light'}</span>
            <span className='sm:hidden'>{theme === 'light' ? 'D' : 'L'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
