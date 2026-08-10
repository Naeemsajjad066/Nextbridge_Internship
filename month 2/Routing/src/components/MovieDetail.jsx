import { Link, useParams } from 'react-router-dom'
import movies from '../data/moviesData'

function MovieDetail() {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === Number(id))

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      <div className='bg-white border border-slate-200 rounded-lg p-6 w-80 shadow-sm'>
        <h1 className='text-xl font-bold text-[#0B132B]'>{movie.title}</h1>
        <p className='text-sm text-slate-500 mt-1'>
          {movie.genre} • {movie.year}
        </p>
        <div className='mt-4 flex flex-col gap-2 text-sm text-slate-600'>
          <p>
            Director: <span className='font-medium'>{movie.director}</span>
          </p>
          <p>
            Duration: <span className='font-medium'>{movie.duration} min</span>
          </p>
          <p>
            Rating: <span className='font-medium'>⭐ {movie.rating}</span>
          </p>
        </div>
        <Link
          to='/movies/all'
          className='inline-block mt-5 text-xs bg-[#0B132B] text-white px-3 py-1 rounded-md'
        >
          Back to Movies
        </Link>
      </div>
    </div>
  )
}

export default MovieDetail
