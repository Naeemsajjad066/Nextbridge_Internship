import { useUser } from '../context/UserContext'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'

function AboutPage() {
  const user = useUser()
  const { theme } = useTheme()
  const { state } = useCart()

  const stats = [
    { label: 'User Name', value: user?.name || 'Guest' },
    { label: 'User Role', value: user?.role || 'Visitor' },
    { label: 'Cart Items', value: state.cart.length },
    { label: 'Current Theme', value: theme },
  ]

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-3xl mx-auto p-4 space-y-5'>
        <div
          className={`rounded-lg border p-5 text-center ${
            theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
          }`}
        >
          <h1
            className={`text-2xl font-bold mb-3 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}
          >
            About This App
          </h1>
          <p className={`text-sm mb-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            A demonstration of React Context API with multiple contexts working together
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-3 rounded border ${
                  theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-700 border-gray-600'
                }`}
              >
                <h3
                  className={`font-medium text-xs uppercase tracking-wide mb-1 ${
                    theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  {stat.label}
                </h3>
                <p
                  className={`text-sm font-bold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
