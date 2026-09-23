import { createSlice } from '@reduxjs/toolkit'

const loadFromStorage = () => {
  try {
    const accessToken = localStorage.getItem('accessToken')
    const userStr = localStorage.getItem('user')

    if (accessToken && userStr) {
      return {
        user: JSON.parse(userStr),
        accessToken,
        isAuthenticated: true,
      }
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error)
  }

  return {
    user: null,
    accessToken: null,
    isAuthenticated: false,
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: loadFromStorage(),
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.isAuthenticated = true
    },

    clearUser: (state) => {
      state.user = null
      state.accessToken = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer
