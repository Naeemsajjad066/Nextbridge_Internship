import { Navigate } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import { useFavorites } from '../hooks'
import { isLoggedIn } from '../services/authService'

const Favorites = () => {
  const { favorites, toggleFavorite, loading } = useFavorites()

  if (!isLoggedIn()) {
    return <Navigate to='/login' replace />
  }
  return (
    <div className='min-h-screen bg-slate-900 py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-slate-50 mb-3'>
            Your Favorites
          </h1>
          <p className='text-slate-400 max-w-xl mx-auto'>
            Your personal collection of saved movies. All in one place.
          </p>
          {!loading && favorites.length > 0 && (
            <div className='mt-4 inline-flex items-center px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm'>
              <span className='w-2 h-2 rounded-full bg-amber-400 mr-2'></span>
              {favorites.length} {favorites.length === 1 ? 'movie' : 'movies'}{' '}
              saved
            </div>
          )}
        </div>

        {/* Movies Grid */}
        <MovieGrid
          movies={favorites}
          loading={loading}
          onToggleFavorite={toggleFavorite}
          favoriteMovies={favorites}
        />
      </div>
    </div>
  )
}

export default Favorites
