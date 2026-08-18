import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
  'asyncTodos/fetchTodos',
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    return response.data
  }
)

const initialState = {
  todos: [],
  loading: false,
  error: null,
}

const asyncTodoSlice = createSlice({
  name: 'asyncTodos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        ;((state.loading = true), (state.error = null))
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})
export default asyncTodoSlice.reducer
