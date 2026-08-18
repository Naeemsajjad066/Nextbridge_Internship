import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen bg-slate-900 relative pt-12 sm:pt-14'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900'></div>
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4'>
          Welcome Home
        </h1>
        <p className='text-white/50 mb-6 sm:mb-8 text-sm sm:text-base max-w-md'>
          Manage your tasks with ease.
        </p>
        <Link
          to='/todo'
          className='px-6 sm:px-8 py-3 text-sm sm:text-base bg-blue-500/90 backdrop-blur-sm text-white font-medium rounded-lg sm:rounded-xl border border-blue-400/30 hover:bg-blue-600/90 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20'
        >
          Go to Todo App
        </Link>
      </div>
    </div>
  )
}

export default Home
