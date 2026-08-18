import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <div className='flex flex-col h-full'>
      <h2 className='text-lg sm:text-xl font-semibold text-white/90 mb-3 sm:mb-4 flex-shrink-0'>
        Tasks{' '}
        {todos.length > 0 && (
          <span className='text-sm sm:text-base text-white/60'>
            ({todos.length})
          </span>
        )}
      </h2>
      <div className='flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-2 sm:space-y-3'>
        {todos.length === 0 ? (
          <div className='flex items-center justify-center h-full'>
            <p className='text-white/40 italic text-sm sm:text-base text-center px-4'>
              No tasks yet. Add one to get started!
            </p>
          </div>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  )
}

export default TodoList
