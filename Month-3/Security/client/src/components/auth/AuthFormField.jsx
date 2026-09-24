import Input from '../ui/Input'

function AuthFormField({ label, ...inputProps }) {
  return (
    <div className='mb-3'>
      {label && (
        <label
          htmlFor={inputProps.id}
          className='block text-[var(--color-text-dark)] text-sm mb-1.5'
        >
          {label}
        </label>
      )}
      <Input {...inputProps} />
    </div>
  )
}

export default AuthFormField
