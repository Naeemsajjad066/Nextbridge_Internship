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

const forgotPassword = async (email) => {
  return await apiClient.post('/users/forgot-password', { email })
}

const resetPassword = async (token, newPassword) => {
  return await apiClient.post('/users/reset-password', { token, newPassword })
}

const authService = {
  login,
  signup,
  getCurrentUser,
  forgotPassword,
  resetPassword,
}

export default authService
