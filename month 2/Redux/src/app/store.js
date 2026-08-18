import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
import asyncTodoReducer from '../features/asyncTodos/asyncTodosSlice'
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    asyncTodos: asyncTodoReducer,
  },
})
