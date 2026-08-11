import { useNavigate } from 'react-router-dom'
import { removeToken } from '../utils/auth'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div className='min-h-[calc(100vh-65px)] bg-[#09090B] px-4 py-8 sm:px-6 sm:py-10'>
      <div className='mx-auto max-w-5xl'>
        {/* Header */}
        <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-[#F4F4F5]'>Dashboard</h1>
            <p className='mt-1 text-sm text-[#A1A1AA]'>
              Welcome back. You're successfully authenticated.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className='w-full rounded-lg border border-[#27272A] px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:border-[#EF4444] hover:text-[#EF4444] sm:w-auto'
          >
            Sign Out
          </button>
        </div>

        {/* Status card */}
        <div className='mb-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4 sm:p-6'>
          <div className='flex items-center gap-3'>
            <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#D4AF37]'>
              ✓
            </span>
            <div>
              <p className='text-sm font-semibold text-[#F4F4F5]'>
                Session Active
              </p>
              <p className='text-xs text-[#A1A1AA]'>
                Your authentication token is valid and stored securely.
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {[
            { label: 'Status', value: 'Authenticated', sub: 'Active session' },
            { label: 'Auth Method', value: 'JWT Token', sub: 'Local storage' },
            { label: 'Access Level', value: 'Standard', sub: 'Full access' },
          ].map((stat) => (
            <div
              key={stat.label}
              className='rounded-xl border border-[#27272A] bg-[#18181B] p-5 sm:p-6'
            >
              <p className='text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]'>
                {stat.label}
              </p>
              <p className='mt-2 text-xl font-bold text-[#F4F4F5]'>
                {stat.value}
              </p>
              <p className='mt-1 text-xs text-[#A1A1AA]'>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
