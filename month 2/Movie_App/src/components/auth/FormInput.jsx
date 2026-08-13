const FormInput = ({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  icon: Icon,
  register,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-slate-300 mb-2'
      >
        {label}
      </label>
      <div className='relative'>
        <input
          {...register}
          type={type}
          id={id}
          className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200'
          placeholder={placeholder}
          {...props}
        />
        {Icon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <Icon className='h-5 w-5 text-slate-400' />
          </div>
        )}
      </div>
      {error && <p className='mt-2 text-sm text-red-400'>{error}</p>}
    </div>
  )
}

export default FormInput
