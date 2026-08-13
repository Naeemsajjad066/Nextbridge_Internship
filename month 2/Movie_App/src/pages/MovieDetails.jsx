import { useParams, Link } from 'react-router-dom'
import { useMovieById, useFavorites } from '../hooks'
import { isLoggedIn } from '../services/authService'

const MovieDetails = () => {
  const { id } = useParams()
  const { movie, loading, error } = useMovieById(id)
  const { isFavorite, toggleFavorite } = useFavorites()

  if (loading) {
    return (
      <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='animate-spin rounded-full h-12 w-12 border-2 border-slate-700 border-t-amber-400'></div>
          <p className='text-slate-400 text-sm'>Loading movie...</p>
        </div>
      </div>
    )
  }

  if (error || !movie) {
    return (
      <div className='min-h-screen bg-slate-900 flex items-center justify-center px-4'>
        <div className='text-center'>
          <div className='text-5xl mb-4'>🎬</div>
          <h1 className='text-2xl font-bold text-slate-50 mb-2'>
            {error || 'Movie not found'}
          </h1>
          <p className='text-slate-400 mb-6'>
            We couldn't find what you were looking for.
          </p>
          <Link
            to='/'
            className='bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200'
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const isFav = isLoggedIn() ? isFavorite(movie.id) : false

  const handleFavoriteClick = () => {
    if (!isLoggedIn()) {
      return
    }
    toggleFavorite(movie)
  }

  const defaultBackdrop =
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80'

  return (
    <div className='min-h-screen bg-slate-900'>
      {/* Professional Responsive Hero Section */}
      <section className='relative w-full bg-slate-900'>
        {/* Backdrop image container - Fixed positioning issues */}
        <div className='absolute inset-0 w-full h-full'>
          <img
            src={movie.backdrop || defaultBackdrop}
            alt={movie.title}
            className='w-full h-full object-cover object-center'
            onError={(e) => {
              e.target.src = defaultBackdrop
            }}
          />
          {/* Responsive gradient overlays */}
          <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/85 to-slate-900/60' />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-slate-900/30' />
        </div>

        {/* Content Container - Proper responsive spacing */}
        <div className='relative w-full min-h-[calc(100vh-64px)] flex items-center justify-start py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-28 lg:px-12 xl:px-16'>
          <div className='w-full max-w-7xl mx-auto'>
            {/* Responsive Layout Grid */}
            <div className='grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center md:items-start'>
              {/* Movie Poster - Properly sized for all screens */}
              <div className='flex justify-center md:justify-start'>
                <div className='relative group'>
                  <img
                    src={
                      movie.poster ||
                      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'
                    }
                    alt={movie.title}
                    className='w-48 h-72 xs:w-52 xs:h-80 sm:w-56 sm:h-84 md:w-64 md:h-96 lg:w-72 lg:h-[432px] xl:w-80 xl:h-[480px] object-cover rounded-2xl shadow-2xl border-2 border-white/10 transition-transform duration-300 group-hover:scale-[1.02]'
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'
                    }}
                  />
                  <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none' />
                </div>
              </div>

              {/* Movie Information - Responsive text and spacing */}
              <div className='flex flex-col space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left max-w-3xl mx-auto md:mx-0'>
                {/* Meta Badges - Matching home page */}
                <div className='flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3'>
                  <span className='inline-flex items-center px-3 py-1 bg-amber-500 text-slate-900 rounded-full text-sm font-semibold'>
                    {movie.year}
                  </span>
                  <div className='inline-flex items-center gap-1 px-3 py-1 bg-black/40 backdrop-blur-sm border border-slate-600 rounded-full text-white text-sm'>
                    <svg
                      className='w-4 h-4 text-amber-400 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <span className='font-medium'>{movie.rating}</span>
                  </div>
                  <span className='inline-flex items-center px-3 py-1 bg-black/40 backdrop-blur-sm text-slate-300 rounded-full text-sm border border-slate-600 whitespace-nowrap'>
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </span>
                  <span className='inline-flex items-center px-3 py-1 bg-black/40 backdrop-blur-sm text-slate-300 rounded-full text-sm border border-slate-600'>
                    {movie.language}
                  </span>
                </div>

                {/* Movie Title - Matching home page sizing */}
                <div className='space-y-2'>
                  <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight break-words'>
                    {movie.title}
                  </h1>
                </div>

                {/* Genres - Matching home page pills */}
                <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                  {movie.genre.map((genre, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-200 rounded-full text-sm'
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Matching home page sizing */}
                <div className='flex flex-wrap gap-3 items-center justify-center md:justify-start pt-2 pb-safe'>
                  {isLoggedIn() && (
                    <button
                      onClick={handleFavoriteClick}
                      className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                        isFav
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-amber-500 hover:bg-amber-600 text-slate-900'
                      }`}
                    >
                      <svg
                        className='w-5 h-5 flex-shrink-0'
                        fill={isFav ? 'currentColor' : 'none'}
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                      </svg>
                      <span>{isFav ? 'Saved' : 'Save'}</span>
                    </button>
                  )}
                  <a
                    href={movie.trailer}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-slate-50 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105'
                  >
                    <svg
                      className='w-5 h-5 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth gradient transition */}
        <div className='absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent pointer-events-none' />
      </section>

      {/* Details Body - Responsive layout */}
      <div className='w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Left Column — Overview & Cast */}
            <div className='lg:col-span-2 space-y-8 lg:space-y-10'>
              {/* Overview Section */}
              <div>
                <h2 className='text-2xl font-bold text-slate-50 mb-4'>
                  Overview
                </h2>
                <p className='text-slate-300 text-base md:text-lg leading-relaxed'>
                  {movie.description}
                </p>
              </div>

              {/* Cast Section */}
              <div>
                <h2 className='text-2xl font-bold text-slate-50 mb-4'>Cast</h2>
                <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                  {movie.cast.map((actor, i) => (
                    <div
                      key={i}
                      className='flex items-center gap-3 p-3 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-all duration-200'
                    >
                      <div className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-sm font-bold flex-shrink-0'>
                        {actor.charAt(0)}
                      </div>
                      <span className='text-slate-300 text-sm truncate'>
                        {actor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Movie Info */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                <div className='bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-5'>
                  <h3 className='text-lg font-semibold text-slate-50 pb-3 border-b border-slate-700'>
                    Movie Info
                  </h3>

                  {[
                    { label: 'Director', value: movie.director },
                    { label: 'Release Date', value: movie.releaseDate },
                    { label: 'Runtime', value: `${movie.runtime} min` },
                    { label: 'Language', value: movie.language },
                    { label: 'Country', value: movie.country },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt className='text-xs font-medium text-slate-400 uppercase tracking-wider mb-1'>
                        {label}
                      </dt>
                      <dd className='text-slate-200 text-sm'>{value}</dd>
                    </div>
                  ))}

                  {/* Genres */}
                  <div className='pt-2'>
                    <dt className='text-xs font-medium text-slate-400 uppercase tracking-wider mb-2'>
                      Genres
                    </dt>
                    <div className='flex flex-wrap gap-2'>
                      {movie.genre.map((g, i) => (
                        <span
                          key={i}
                          className='px-2 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-medium'
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back Button */}
                <Link
                  to='/'
                  className='flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200'
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                  Back to Movies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
