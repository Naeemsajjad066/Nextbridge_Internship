import { useUser } from '../context/UserContext'
import { useTheme } from '../context/ThemeContext'

function Card() {
  const user = useUser()
  const { theme } = useTheme()

  const isLight = theme === 'light'

  return (
    <div className='mx-auto max-w-4xl p-2 sm:p-6'>
      <div
        className={`overflow-hidden rounded-lg sm:rounded-2xl border shadow-sm transition ${
          isLight ? 'border-gray-200 bg-white' : 'border-gray-700 bg-gray-800'
        }`}
      >
        {user ? (
          <div className='p-4 sm:p-6'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4'>
              {/* Avatar */}
              <div
                className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center
                  rounded-full text-lg sm:text-xl font-bold ${
                    isLight ? 'bg-gray-100 text-gray-700' : 'bg-gray-700 text-gray-200'
                  }`}
              >
                {user.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              {/* User info */}
              <div className='text-center sm:text-left flex-1'>
                <h2
                  className={`text-lg sm:text-xl font-semibold ${
                    isLight ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {user.name}
                </h2>

                <p className={`text-xs sm:text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  {user.email}
                </p>
              </div>
            </div>

            {/* Role */}
            <div className='mt-4 sm:mt-6 text-center sm:text-left'>
              <span
                className={`inline-block rounded-full px-2 sm:px-3 py-1 text-xs
                  font-medium ${
                    isLight ? 'bg-gray-100 text-gray-700' : 'bg-gray-700 text-gray-300'
                  }`}
              >
                {user.role}
              </span>
            </div>

            {/* Theme info */}
            <div
              className={`mt-4 sm:mt-6 border-t pt-3 sm:pt-4 text-center sm:text-left ${
                isLight ? 'border-gray-200' : 'border-gray-700'
              }`}
            >
              <p className={`text-xs sm:text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Current theme: <span className='font-medium'>{theme}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className='px-4 sm:px-6 py-8 sm:py-12 text-center'>
            <div
              className={`mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center
                justify-center rounded-full text-lg sm:text-xl ${
                  isLight ? 'bg-gray-100 text-gray-400' : 'bg-gray-700 text-gray-500'
                }`}
            >
              ?
            </div>

            <h2
              className={`text-base sm:text-lg font-semibold ${
                isLight ? 'text-gray-900' : 'text-white'
              }`}
            >
              No User Data
            </h2>

            <p className={`mt-1 text-xs sm:text-sm ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              User information is not available.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
