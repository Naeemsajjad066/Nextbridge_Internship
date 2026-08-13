import { Link } from 'react-router-dom'
import { isLoggedIn } from '../../services/authService'

const HeroSkeleton = () => (
  <div className='relative h-[500px] lg:h-[600px] bg-slate-800 animate-pulse'>
    <div className='absolute inset-0 flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl space-y-4'>
          <div className='h-6 w-32 bg-slate-700 rounded-full' />
          <div className='h-14 w-96 bg-slate-700 rounded-lg' />
          <div className='h-4 w-full bg-slate-700 rounded' />
          <div className='h-4 w-3/4 bg-slate-700 rounded' />
          <div className='flex gap-3 pt-2'>
            <div className='h-12 w-36 bg-slate-700 rounded-lg' />
            <div className='h-12 w-44 bg-slate-700 rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const HeroSection = ({ movie, loading, onToggleFavorite, isFavorite }) => {
  if (loading) return <HeroSkeleton />
  if (!movie) return null

  const isAlreadyFavorite = isLoggedIn() ? isFavorite(movie.id) : false

  const handleFavoriteClick = () => {
    if (!isLoggedIn()) {
      return
    }
    onToggleFavorite(movie)
  }

  return (
    <section className='relative h-[500px] lg:h-[600px] overflow-hidden'>
      {/* Backdrop image */}
      <img
        src={movie.backdrop}
        alt={movie.title}
        className='absolute inset-0 w-full h-full object-cover'
      />
      {/* Gradient overlays */}
      <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent' />

      {/* Content */}
      <div className='relative h-full flex items-center'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl'>
            {/* Badges */}
            <div className='flex items-center gap-3 mb-4'>
              <span className='bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold'>
                Featured
              </span>
              <span className='flex items-center gap-1 bg-black/40 backdrop-blur-sm text-slate-50 px-3 py-1 rounded-full text-sm border border-slate-600'>
                <svg
                  className='w-4 h-4 text-amber-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                {movie.rating}
              </span>
              <span className='bg-black/40 backdrop-blur-sm text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600'>
                {movie.year}
              </span>
            </div>

            {/* Title */}
            <h1 className='text-4xl md:text-6xl font-bold text-slate-50 mb-4 leading-tight'>
              {movie.title}
            </h1>

            {/* Description */}
            <p className='text-slate-300 text-base md:text-lg mb-5 line-clamp-2 leading-relaxed'>
              {movie.description}
            </p>

            {/* Genre tags */}
            <div className='flex flex-wrap gap-2 mb-7'>
              {movie.genre?.slice(0, 3).map((genre) => (
                <span
                  key={genre}
                  className='px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-200 border border-white/20 rounded-full text-sm'
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className='flex flex-wrap gap-3'>
              <Link
                to={`/movie/${movie.id}`}
                className='inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-7 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' />
                </svg>
                Watch Now
              </Link>
              {isLoggedIn() && (
                <button
                  onClick={handleFavoriteClick}
                  className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold border transition-all duration-200 hover:scale-105 ${
                    isAlreadyFavorite
                      ? 'bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30'
                      : 'bg-white/10 backdrop-blur-sm border-white/20 text-slate-50 hover:bg-white/20'
                  }`}
                >
                  <svg
                    className='w-5 h-5'
                    fill={isAlreadyFavorite ? 'currentColor' : 'none'}
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
                  {isAlreadyFavorite ? 'Saved' : 'Add to Favorites'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
