import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)] flex items-center justify-center px-4'>
      <div className='text-center'>

        {/* 404 big number */}
        <div className='relative inline-block mb-6'>
          <span className='text-[10rem] font-black leading-none text-[var(--color-button-bg)]/10 select-none'>
            404
          </span>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-20 h-20 bg-gradient-to-br from-[var(--color-button-bg)] to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl'>
              <svg
                className='w-10 h-10 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <h1 className='text-3xl font-bold text-[var(--color-text-dark)] mb-2'>
          Page not found
        </h1>
        <p className='text-[var(--color-text-muted)] mb-8 max-w-sm mx-auto'>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className='flex items-center justify-center gap-3'>
          <Link
            to='/'
            className='px-5 py-2.5 bg-[var(--color-button-bg)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity'
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='px-5 py-2.5 bg-[var(--color-icon-bg)] text-[var(--color-text-dark)] font-medium rounded-xl hover:bg-[var(--color-input-border)] transition-colors'
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound
