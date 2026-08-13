// Simple localStorage helpers
const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const getUser = () => {
  const data = localStorage.getItem(USER_KEY)
  return data ? JSON.parse(data) : null
}

export const saveAuth = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export const isLoggedIn = () => {
  return !!getToken() && !!getUser()
}

// Mock login - replace with real API later
export const login = async (email, password) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (email === 'admin@movieapp.com' && password === 'admin123') {
    const user = {
      id: 1,
      email: email,
      name: 'Naeem',
      role: 'admin',
    }
    const token = `token_${Date.now()}`

    saveAuth(token, user)
    return { success: true, user, message: 'Login successful' }
  }

  return { success: false, message: 'Invalid email or password' }
}

export const register = async (name, email) => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  const user = {
    id: Date.now(),
    email,
    name,
    role: 'user',
  }
  const token = `token_${Date.now()}`

  saveAuth(token, user)
  return { success: true, user, message: 'Registration successful' }
}

// Simple logout
export const logout = () => {
  clearAuth()
  return { success: true, message: 'Logged out successfully' }
}
