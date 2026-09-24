import { apiClient } from '../api/api-client'
const getUsers = async () => {
  return await apiClient.get('/admin')
}

const adminService = {
  getUsers,
}

export default adminService
