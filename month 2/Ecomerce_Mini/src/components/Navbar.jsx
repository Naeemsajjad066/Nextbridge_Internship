import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'
import { logoutUser } from '../services/authService'
import { Menu, X, ShoppingCart } from 'lucide-react'

// Defined outside Navbar so it's a stable reference across renders
function CartIcon({ cartCount, size = 22 }) {
  return (
    <NavLink
      to='/cart'
      className={({ isActive }) =>
        `relative transition-colors duration-200 ${
          isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
        }`
      }
    >
      <ShoppingCart size={size} />
      {cartCount > 0 && (
        <span className='absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none'>
          {cartCount > 99 ? '99+' : cartCount}
        </span>
      )}
    </NavLink>
  )
}

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const handleLogout = () => {
    logoutUser()
    dispatch(logout())
    navigate('/login')
  }

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
    }`

  return (
    <nav className='bg-dark shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <NavLink
          to='/'
          className='text-xl font-bold text-primary tracking-tight'
        >
          E-Commerce
        </NavLink>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex items-center gap-8'>
          <NavLink to='/' end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to='/products' className={navLinkClass}>
            Products
          </NavLink>
        </div>

        {/* Desktop Right Side */}
        <div className='hidden md:flex items-center gap-6'>
          <CartIcon cartCount={cartCount} size={22} />
          <div className='w-px h-5 bg-gray-600' />
          <button
            onClick={handleLogout}
            className='flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-red-400 border border-gray-600 hover:border-red-400 px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
              <polyline points='16 17 21 12 16 7' />
              <line x1='21' y1='12' x2='9' y2='12' />
            </svg>
            Logout
          </button>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className='flex md:hidden items-center gap-4'>
          <CartIcon cartCount={cartCount} size={22} />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className='text-gray-300 hover:text-primary transition-colors cursor-pointer'
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden bg-dark border-t border-gray-700 px-6 py-4 flex flex-col gap-4'>
          <NavLink
            to='/'
            end
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to='/products'
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>

          <button
            onClick={() => {
              handleLogout()
              setMenuOpen(false)
            }}
            className='text-left text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer'
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
