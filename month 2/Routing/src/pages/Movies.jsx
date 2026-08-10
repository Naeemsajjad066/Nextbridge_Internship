import { Link, Outlet } from 'react-router-dom'

function Movies() {
  return (
    <div className='min-h-screen bg-slate-100'>
      <div className='bg-[#0B132B] text-white px-6 py-4'>
        <Link to='/movies' className='text-xl font-bold'>
          Movies
        </Link>
        <div className='flex gap-4 mt-2'>
          <Link to='all' className='text-sm text-slate-300 hover:text-white'>
            All Movies
          </Link>
          <Link
            to='popular'
            className='text-sm text-slate-300 hover:text-white'
          >
            Popular
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Movies
