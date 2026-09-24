import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminPanel from './pages/AdminPanel'
import NotFound from './pages/NotFound'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyEmail'
import CheckEmail from './pages/CheckEmail'
import authService from './services/auth.service'
import { setUser, clearUser } from './store'

function App() {
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = localStorage.getItem('accessToken')
      if (!token) {
        setAuthLoading(false)
        return
      }

      try {
        const data = await authService.getCurrentUser()
        dispatch(
          setUser({
            user: data.data.user,
            accessToken: token,
          })
        )
      } catch (err) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        dispatch(clearUser())
        console.log(err.message)
      } finally {
        setAuthLoading(false)
      }
    }

    fetchCurrentUser()
  }, [dispatch])

  if (authLoading) return null

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/admin'
        element={
          isAuthenticated && user?.role === 'admin'
            ? <AdminPanel />
            : <Navigate to='/' />
        }
      />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/check-email' element={<CheckEmail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
