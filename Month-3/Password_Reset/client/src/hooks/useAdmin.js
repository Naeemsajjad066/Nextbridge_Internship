import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import adminService from '../services/adminService'
import { setUsers } from '../store'

export const useAdmin = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.admin)
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async () => {
    setIsLoading(true)
    try {
      const data = await adminService.getUsers()
      dispatch(setUsers(data.data))
    } catch (error) {
      toast.error(error.message || 'Failed to fetch users')
    } finally {
      setIsLoading(false)
    }
  }

  return { users, isLoading, fetchUsers }
}
