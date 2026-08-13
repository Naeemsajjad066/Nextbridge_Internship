import MovieCard from './MovieCard'

const MovieGrid = ({
  movies = [],
  loading = false,
  onToggleFavorite,
  favoriteMovies = [],
}) => {
  const isFavorite = (movieId) => {
    return favoriteMovies.some((movie) => movie.id === movieId)
  }

  const LoadingSkeleton = () => (
    <div className='bg-slate-800 rounded-xl overflow-hidden animate-pulse border border-slate-700'>
      <div className='aspect-[2/3] bg-slate-700' />
      <div className='p-4 space-y-3'>
        <div className='h-5 bg-slate-700 rounded w-3/4' />
        <div className='h-4 bg-slate-700 rounded w-1/2' />
        <div className='h-3 bg-slate-700 rounded w-full' />
      </div>
    </div>
  )

  const EmptyState = () => (
    <div className='col-span-full text-center py-16'>
      <svg
        className='w-16 h-16 mx-auto mb-4 text-slate-600'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path
          fillRule='evenodd'
          d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
          clipRule='evenodd'
        />
      </svg>
      <h3 className='text-xl font-semibold text-slate-50 mb-2'>
        No movies found
      </h3>
      <p className='text-slate-400'>
        We couldn't find any movies matching your criteria. Try adjusting your
        search or browse our collection.
      </p>
    </div>
  )

  if (loading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {[...Array(8)].map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div className='grid grid-cols-1'>
        <EmptyState />
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(movie.id)}
        />
      ))}
    </div>
  )
}

export default MovieGrid
