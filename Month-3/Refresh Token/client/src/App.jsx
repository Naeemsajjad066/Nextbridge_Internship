import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import authService from './services/auth.service'
import { setUser, clearUser } from './store'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = localStorage.getItem('accessToken')
      if (!token) return

      try {
        const data = await authService.getCurrentUser()
        dispatch(
          setUser({
            user: data.data.user,
            accessToken: token,
          })
        )
      } catch (error) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        dispatch(clearUser())
      }
    }

    fetchCurrentUser()
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App
