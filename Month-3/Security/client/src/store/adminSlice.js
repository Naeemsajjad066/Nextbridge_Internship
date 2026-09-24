import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    clearUsers: (state) => {
      state.users = []
    },
  },
})

export const { setUsers, clearUsers } = adminSlice.actions
export default adminSlice.reducer
