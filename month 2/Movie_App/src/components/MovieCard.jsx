import { useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../services/authService'

const MovieCard = ({ movie, onToggleFavorite, isFavorite = false }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const defaultPoster =
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80'

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = (e) => {
    if (e.target.src !== defaultPoster) {
      e.target.src = defaultPoster
      setImageError(false)
    } else {
      setImageError(true)
    }
    setImageLoading(false)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isLoggedIn()) {
      return
    }
    if (onToggleFavorite) {
      onToggleFavorite(movie)
    }
  }

  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : 'N/A'
  }

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A'
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className='group relative bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-700'>
      {/* Movie Poster */}
      <div className='relative aspect-[2/3] overflow-hidden'>
        {imageLoading && (
          <div className='absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-slate-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}

        {!imageError ? (
          <img
            src={movie.poster || defaultPoster}
            alt={movie.title}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center'>
            <div className='text-center text-slate-400 p-6'>
              <svg
                className='w-20 h-20 mx-auto mb-3 opacity-50'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z'
                  clipRule='evenodd'
                />
              </svg>
              <p className='text-sm font-medium'>{movie.title}</p>
              <p className='text-xs mt-1 opacity-75'>No image available</p>
            </div>
          </div>
        )}

        {/* Overlay with actions */}
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
          <div className='flex space-x-3'>
            <Link
              to={`/movie/${movie.id}`}
              className='bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200 transform hover:scale-105'
            >
              View Details
            </Link>
            {isLoggedIn() && (
              <button
                onClick={handleFavoriteClick}
                className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  isFavorite
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
                title={
                  isFavorite ? 'Remove from favorites' : 'Add to favorites'
                }
              >
                <svg
                  className='w-6 h-6'
                  fill={isFavorite ? 'currentColor' : 'none'}
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
              </button>
            )}
          </div>
        </div>

        {/* Rating Badge */}
        <div className='absolute top-3 right-3'>
          <div className='bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm font-medium flex items-center'>
            <svg
              className='w-4 h-4 text-yellow-400 mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            {formatRating(movie.rating)}
          </div>
        </div>

        {/* Year Badge */}
        <div className='absolute top-3 left-3'>
          <div className='bg-amber-500 text-slate-900 px-2 py-1 rounded-md text-sm font-medium'>
            {movie.year}
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className='p-4'>
        <Link to={`/movie/${movie.id}`} className='block'>
          <h3 className='font-bold text-lg text-slate-50 mb-2 line-clamp-1 hover:text-amber-400 transition-colors duration-200'>
            {movie.title}
          </h3>
        </Link>

        {/* Genres */}
        <div className='flex flex-wrap gap-1 mb-3'>
          {movie.genre?.slice(0, 2).map((genre, index) => (
            <span
              key={index}
              className='px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-medium border border-amber-500/30'
            >
              {genre}
            </span>
          ))}
          {movie.genre?.length > 2 && (
            <span className='px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-full font-medium border border-slate-600'>
              +{movie.genre.length - 2}
            </span>
          )}
        </div>

        {/* Movie Details */}
        <div className='flex items-center justify-between text-sm text-slate-400 mb-3'>
          <span className='flex items-center'>
            <svg
              className='w-4 h-4 mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                clipRule='evenodd'
              />
            </svg>
            {formatRuntime(movie.runtime)}
          </span>
          <span>{movie.language}</span>
        </div>

        {/* Description */}
        <p className='text-slate-300 text-sm line-clamp-3 leading-relaxed'>
          {movie.description}
        </p>

        {/* Director */}
        <div className='mt-3 pt-3 border-t border-slate-600'>
          <p className='text-sm text-slate-400'>
            <span className='font-medium'>Director:</span> {movie.director}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
