import { useState, useEffect } from 'react'
import {
  getUser,
  isLoggedIn,
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
} from '../services/authService'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in when app starts
  useEffect(() => {
    const savedUser = getUser()
    if (savedUser && isLoggedIn()) {
      setUser(savedUser)
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const result = await apiLogin(email, password)
    if (result.success) {
      setUser(result.user)
    }
    return result
  }

  const register = async (name, email, password) => {
    const result = await apiRegister(name, email, password)
    if (result.success) {
      setUser(result.user)
    }
    return result
  }

  const logout = () => {
    const result = apiLogout()
    setUser(null)
    return result
  }

  return {
    user,
    loading,
    login,
    register,
    logout,
    isLoggedIn: !!user,
  }
}
