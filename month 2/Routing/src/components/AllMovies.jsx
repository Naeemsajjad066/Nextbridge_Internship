import { Link } from 'react-router-dom'
import movies from '../data/moviesData'

function AllMovies() {
  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='bg-white border border-slate-200 rounded-lg p-4 shadow-sm'
        >
          <h2 className='font-bold text-[#0B132B] text-base'>{movie.title}</h2>
          <p className='text-sm text-slate-500'>
            {movie.genre} • {movie.year}
          </p>
          <p className='text-sm text-slate-600 mt-1'>
            Director: {movie.director}
          </p>
          <p className='text-sm text-slate-600'>
            Duration: {movie.duration} min
          </p>
          <p className='text-sm font-medium text-[#0B132B] mt-2'>
            ⭐ {movie.rating}
          </p>
          <Link
            to={`/movies/${movie.id}`}
            className='inline-block mt-3 text-xs bg-[#0B132B] text-white px-3 py-1 rounded-md'
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AllMovies
