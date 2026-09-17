function Input({
  type = 'text',
  id,
  name,
  placeholder,
  icon: Icon,
  rightIcon: RightIcon,
  onRightIconClick,
  error,
  className = '',
  ...props
}) {
  return (
    <div>
      <div className='relative'>
        {Icon && (
          <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
            <Icon className='w-4 h-4 text-[var(--color-text-muted)]' />
          </div>
        )}

        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-11' : 'pl-4'} ${RightIcon ? 'pr-11' : 'pr-4'} py-3 bg-[var(--color-input-bg)] border ${error ? 'border-[var(--color-error)]' : 'border-[var(--color-input-border)]'} rounded-xl text-[var(--color-text-dark)] text-sm outline-none focus:border-[var(--color-button-bg)] transition-colors ${className}`}
          {...props}
        />

        {RightIcon && (
          <button
            type='button'
            onClick={onRightIconClick}
            className='absolute inset-y-0 right-0 pr-4 flex items-center'
          >
            <RightIcon className='w-4 h-4 text-[var(--color-text-muted)]' />
          </button>
        )}
      </div>

      {error && (
        <p className='mt-1 text-xs text-[var(--color-error)] pl-1'>{error}</p>
      )}
    </div>
  )
}

export default Input
