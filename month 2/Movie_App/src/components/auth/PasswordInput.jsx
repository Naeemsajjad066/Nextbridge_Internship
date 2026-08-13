import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '../icons'

const PasswordInput = ({ label, id, placeholder, error, register }) => {
  const [showPassword, setShowPassword] = useState(false)

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
          type={showPassword ? 'text' : 'password'}
          id={id}
          className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200'
          placeholder={placeholder}
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-300 transition-colors duration-200'
        >
          {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
        </button>
      </div>
      {error && <p className='mt-2 text-sm text-red-400'>{error}</p>}
    </div>
  )
}

export default PasswordInput
