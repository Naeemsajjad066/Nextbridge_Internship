import { useState } from 'react'

const SearchBar = ({ onSearch, placeholder = 'Search movies...' }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  const handleClear = () => {
    setSearchValue('')
    if (onSearch) {
      onSearch('')
    }
  }

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
          <svg
            className='h-5 w-5 text-slate-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <input
          type='text'
          className='w-full pl-12 pr-12 py-4 bg-slate-800 border border-slate-600 rounded-xl text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-lg transition-all duration-200'
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
        />

        {searchValue && (
          <button
            type='button'
            onClick={handleClear}
            className='absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-300 transition-colors duration-200'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
