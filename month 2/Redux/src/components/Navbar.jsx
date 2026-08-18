import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()

  const linkClass = (path) =>
    `px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
      pathname === path
        ? 'bg-white/20 text-white'
        : 'text-white/60 hover:text-white hover:bg-white/10'
    }`

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10'>
      <div className='max-w-6xl mx-auto px-2 sm:px-4 h-12 sm:h-14 flex items-center justify-between'>
        <span className='text-white font-semibold tracking-wide text-sm sm:text-base'>
          Redux Toolkit
        </span>
        <div className='flex items-center gap-1 sm:gap-2'>
          <Link to='/' className={linkClass('/')}>
            Home
          </Link>
          <Link to='/todo' className={linkClass('/todo')}>
            Todo
          </Link>
          <Link
            to='/createAsyncThunk'
            className={linkClass('/createAsyncThunk')}
          >
            <span className='hidden sm:inline'>AsyncTodos</span>
            <span className='sm:hidden'>Async</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
