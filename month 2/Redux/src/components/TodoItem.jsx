import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../features/todos/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  function handleClick() {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTodo(todo.id))
    }
  }
  return (
    <div className='flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-200 group'>
      <div className='flex-1 flex items-center gap-2 sm:gap-3 min-w-0'>
        <div
          onClick={() => dispatch(toggleTodo(todo.id))}
          className='cursor-pointer flex-shrink-0'
        >
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              todo.completed
                ? 'bg-emerald-500/90 border-emerald-400/50 shadow-lg shadow-emerald-500/20'
                : 'border-white/30 hover:border-blue-400/50 hover:bg-white/5'
            }`}
          >
            {todo.completed && (
              <svg
                className='w-3 h-3 sm:w-4 sm:h-4 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            )}
          </div>
        </div>
        <span
          onClick={handleClick}
          className={`flex-1 cursor-pointer transition-all duration-200 text-sm sm:text-base leading-relaxed break-words ${
            todo.completed ? 'line-through text-white/30' : 'text-white/90'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleClick}
        className='px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm cursor-pointer bg-red-500/80 backdrop-blur-sm text-white font-medium rounded sm:rounded-lg border border-red-400/30 hover:bg-red-600/90 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:shadow-lg hover:shadow-red-500/20 flex-shrink-0'
      >
        <span className='hidden sm:inline'>Delete</span>
        <span className='sm:hidden'>Del</span>
      </button>
    </div>
  )
}

export default TodoItem
