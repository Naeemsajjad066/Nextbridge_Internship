export function FormField({ label, id, registration, error, ...props }) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id} className='text-sm font-medium text-dark'>
        {label}
      </label>
      <input
        id={id}
        className={`border rounded-lg px-3 py-2.5 text-sm text-dark bg-background outline-none transition-colors
          ${error ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-primary'}`}
        {...registration}
        {...props}
      />
      {error && <p className='text-xs text-red-500'>{error.message}</p>}
    </div>
  )
}

export function SectionHeader({ icon: Icon, title }) {
  return (
    <div className='flex items-center gap-2 mb-4'>
      <Icon size={18} className='text-primary' />
      <h2 className='text-base font-semibold text-dark'>{title}</h2>
    </div>
  )
}
