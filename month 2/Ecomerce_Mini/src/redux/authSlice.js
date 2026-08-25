import { createSlice } from '@reduxjs/toolkit'
import { getToken } from '../services/authService'

const token = getToken()

const initialState = {
  token: token,
  isAuthenticated: !!token,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      ;((state.token = action.payload), (state.isAuthenticated = true))
    },
    logout: (state) => {
      ;((state.token = null), (state.isAuthenticated = false))
    },
  },
})

export const { logout, login } = authSlice.actions
export default authSlice.reducer
