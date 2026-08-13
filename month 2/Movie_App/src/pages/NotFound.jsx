import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500 opacity-5 blur-3xl'></div>
      <div className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-slate-600 opacity-20 blur-3xl'></div>

      <div className='relative text-center max-w-2xl mx-auto'>
        {/* 404 */}
        <div className='mb-6'>
          <div className='text-8xl md:text-9xl font-bold text-amber-400 mb-2'>
            404
          </div>
          <div className='text-6xl mb-4'>🎬</div>
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-slate-50 mb-4'>
          Page Not Found
        </h1>

        <p className='text-lg text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed'>
          Looks like this reel got lost. The page you're looking for might have
          been moved or doesn't exist.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            to='/'
            className='bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'
          >
            Back to Home
          </Link>
          <Link
            to='/login'
            className='bg-slate-800 text-slate-300 border border-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 hover:text-slate-50 transition-all duration-200'
          >
            Sign In
          </Link>
        </div>

        {/* Quick links */}
        <div className='mt-12 text-slate-400'>
          <p className='mb-4 text-sm uppercase tracking-widest'>
            Popular sections
          </p>
          <div className='flex flex-wrap justify-center gap-6 text-sm'>
            <Link
              to='/'
              className='hover:text-amber-400 transition-colors duration-200'
            >
              🏠 Home
            </Link>
            <Link
              to='/favorites'
              className='hover:text-amber-400 transition-colors duration-200'
            >
              ❤️ Favorites
            </Link>
            <Link
              to='/login'
              className='hover:text-amber-400 transition-colors duration-200'
            >
              🔐 Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
