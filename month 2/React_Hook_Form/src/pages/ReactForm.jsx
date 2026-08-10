import { useForm } from 'react-hook-form'

function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function Submitform(data) {
    console.log(data)
  }

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(Submitform)}
        className='bg-white p-6 rounded-lg border border-slate-200 w-80 flex flex-col gap-4'
      >
        <h2 className='text-xl font-bold text-[#0B132B]'>React Hook Form</h2>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-[#0B132B]'>Name</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Must include 3 or more characters',
              },
            })}
            placeholder='Enter your name'
            className='border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]'
          />
          {errors.name && (
            <p className='text-red-500 text-sm'>{errors.name.message}</p>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-sm font-medium text-[#0B132B]'>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter valid Email',
              },
            })}
            placeholder='Enter your email'
            className='border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#0B132B]'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='bg-[#0B132B] text-white py-2 rounded-md text-sm hover:opacity-90'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ReactForm
