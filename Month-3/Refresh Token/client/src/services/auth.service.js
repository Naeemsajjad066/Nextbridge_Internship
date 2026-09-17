import { apiClient } from '../api/api-client'

const login = async (email, password) => {
  return await apiClient.post('/users/login', { email, password })
}

const signup = async (name, email, password) => {
  return await apiClient.post('/users/signup', { name, email, password })
}

const getCurrentUser = async () => {
  return await apiClient.get('/users/me')
}

const authService = {
  login,
  signup,
  getCurrentUser,
}

export default authService
