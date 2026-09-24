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

const verifyEmail = async (token) => {
  return await apiClient.get(`/users/verify-email?token=${token}`)
}

const resendVerificationEmail = async (email) => {
  return await apiClient.post('/users/resend-verification', { email })
}

const authService = {
  login,
  signup,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  verifyEmail,
  resendVerificationEmail,
}

export default authService
