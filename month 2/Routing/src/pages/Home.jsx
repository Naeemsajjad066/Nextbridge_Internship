import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-6'>
      <h1 className='text-3xl font-bold text-[#0B132B]'>Home</h1>
      <div className='flex gap-4'>
        <Link
          to='/movies'
          className='bg-[#0B132B] text-white px-4 py-2 rounded-md text-sm'
        >
          Movies
        </Link>
        <Link
          to='/about'
          className='border border-[#0B132B] text-[#0B132B] px-4 py-2 rounded-md text-sm'
        >
          About
        </Link>
      </div>
    </div>
  )
}

export default Home
