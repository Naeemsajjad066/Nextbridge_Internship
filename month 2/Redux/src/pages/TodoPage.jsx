import { useDispatch, useSelector } from 'react-redux'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { clearCompleted } from '../features/todos/todoSlice'

function TodoPage() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  return (
    <div className='min-h-screen bg-slate-900 flex flex-col relative pt-12 sm:pt-14'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900'></div>
      <div className='flex-1 flex items-center justify-center p-2 sm:p-4 relative z-10'>
        <div className='w-full max-w-sm sm:max-w-lg h-[75vh] sm:h-[70vh] flex flex-col'>
          <div className='backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 p-3 sm:p-5 flex flex-col h-full'>
            <h1 className='text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-white'>
              Todo Application
            </h1>
            <TodoForm />
            <div className='flex-1 min-h-0'>
              <TodoList />
            </div>
            <button
              disabled={!todos.some((todo) => todo.completed)}
              onClick={() => dispatch(clearCompleted())}
              className='w-full mt-2 sm:mt-3 px-3 sm:px-4 py-2 text-sm sm:text-base bg-red-500/90 backdrop-blur-sm text-white font-medium rounded-lg border border-red-400/30 hover:bg-red-600/90 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500/90 disabled:hover:shadow-none'
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoPage
