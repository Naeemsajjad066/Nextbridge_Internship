import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { clearUser } from '../store'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    // Clear from localStorage
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')

    // Clear from Redux store
    dispatch(clearUser())

    toast.success('Logged out successfully!')
    navigate('/login')
  }

  return { logout }
}
