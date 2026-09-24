import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { clearUser } from '../store'
import { apiClient } from '../api/api-client'

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = async () => {
    try {
      await apiClient.post('/users/logout', {})
    } catch (err) {
      console.error('Logout request failed:', err)
    }
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')

    dispatch(clearUser())

    toast.success('Logged out successfully!')
    navigate('/login')
  }

  return { logout }
}
