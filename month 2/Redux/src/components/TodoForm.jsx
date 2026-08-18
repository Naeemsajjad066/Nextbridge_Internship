import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schemas/todoText'

function TodoForm() {
  const dispatch = useDispatch()

  function onSubmit(data) {
    dispatch(addTodo(data.text))
    reset()
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      text: '',
    },
  })

  return (
    <div className='mb-4 sm:mb-6'>
      <h2 className='text-lg sm:text-xl font-semibold text-white/90 mb-3 sm:mb-4'>
        Add New Task
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-start'>
          <div className='flex-1'>
            <input
              type='text'
              placeholder='What needs to be done?'
              {...register('text')}
              className={`w-full px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base bg-white/10 backdrop-blur-md border rounded-lg sm:rounded-xl focus:bg-white/15 focus:outline-none transition-all duration-200 text-white placeholder-white/40 ${
                errors.text
                  ? 'border-red-400/50 focus:border-red-400/70'
                  : 'border-white/20 focus:border-blue-400/50'
              }`}
            />
            <div className='h-6 sm:h-7'>
              {errors.text && (
                <p className='mt-1 text-xs sm:text-sm text-red-400 animate-fade-in'>
                  {errors.text.message}
                </p>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base cursor-pointer bg-blue-500/90 backdrop-blur-sm text-white font-medium rounded-lg sm:rounded-xl border border-blue-400/30 hover:bg-blue-600/90 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 h-10 sm:h-12 flex-shrink-0'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
