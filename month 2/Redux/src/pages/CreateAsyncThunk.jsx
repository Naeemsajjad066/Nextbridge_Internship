import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../features/asyncTodos/asyncTodosSlice'

function CreateAsyncThunk() {
  const dispatch = useDispatch()
  const { loading, todos, error } = useSelector((state) => state.asyncTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  if (loading) {
    return (
      <div className='min-h-screen bg-slate-900 relative flex items-center justify-center pt-12 sm:pt-14'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900'></div>
        <div className='relative z-10 text-white text-lg sm:text-xl'>
          Loading todos...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen bg-slate-900 relative flex items-center justify-center pt-12 sm:pt-14'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900'></div>
        <div className='relative z-10 text-red-400 text-lg sm:text-xl text-center px-4'>
          Error: {error}
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-slate-900 relative pt-12 sm:pt-14'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900'></div>
      <div className='relative z-10 py-4 sm:py-20 px-2 sm:px-4'>
        <div className='max-w-lg sm:max-w-2xl mx-auto'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-8'>
            Async Todos
          </h1>
          <div className='space-y-2 max-h-[70vh] overflow-y-auto'>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className='p-2 sm:p-3 bg-white/10 rounded-lg text-white/90 text-sm sm:text-base'
              >
                {todo.id}. {todo.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAsyncThunk
