import movies from '../data/moviesData'

const popular = movies.filter((movie) => movie.rating >= 8.8)

function Popular() {
  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {popular.map((movie) => (
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
          <p className='text-sm font-medium text-[#0B132B] mt-2'>
            ⭐ {movie.rating}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Popular
