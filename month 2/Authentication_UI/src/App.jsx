import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'
import { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const hideNavbar = ['/login', '/register'].includes(location.pathname)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-[#09090B]'>
        <div className='h-8 w-8 animate-spin rounded-full border-2 border-[#27272A] border-t-[#D4AF37]' />
      </div>
    )
  }
  return (
    <div className='min-h-screen bg-[#09090B] text-[#F4F4F5]'>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </div>
  )
}

export default App
