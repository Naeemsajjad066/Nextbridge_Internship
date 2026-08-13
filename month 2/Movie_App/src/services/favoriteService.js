/**
 * Favorite Service - Manage user's favorite movies
 */

const STORAGE_KEY = 'favoriteMovies'

// Get all favorites from localStorage
export const getFavorites = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error getting favorites:', error)
    return []
  }
}

// Save favorites to localStorage
export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    return true
  } catch (error) {
    console.error('Error saving favorites:', error)
    return false
  }
}

// Add movie to favorites
export const addFavorite = (movie) => {
  if (!movie || !movie.id) {
    console.error('Invalid movie object')
    return false
  }

  const favorites = getFavorites()

  if (favorites.some((fav) => fav.id === movie.id)) {
    console.warn('Movie already in favorites')
    return false
  }

  favorites.push(movie)
  return saveFavorites(favorites)
}

// Remove movie from favorites
export const removeFavorite = (movieId) => {
  if (!movieId) {
    console.error('Invalid movie ID')
    return false
  }

  const favorites = getFavorites()
  const filtered = favorites.filter((fav) => fav.id !== movieId)

  return saveFavorites(filtered)
}

// Toggle favorite (add if not exists, remove if exists)
export const toggleFavorite = (movie) => {
  if (!movie || !movie.id) {
    console.error('Invalid movie object')
    return false
  }

  if (isFavorite(movie.id)) {
    return removeFavorite(movie.id)
  } else {
    return addFavorite(movie)
  }
}

// Check if movie is in favorites
export const isFavorite = (movieId) => {
  const favorites = getFavorites()
  return favorites.some((fav) => fav.id === movieId)
}

// Get favorites count
export const getFavoritesCount = () => {
  return getFavorites().length
}

// Clear all favorites
export const clearFavorites = () => {
  return saveFavorites([])
}

// Get favorite by ID
export const getFavoriteById = (movieId) => {
  const favorites = getFavorites()
  return favorites.find((fav) => fav.id === movieId) || null
}

// Search within favorites
export const searchFavorites = (query) => {
  const favorites = getFavorites()

  if (!query || !query.trim()) {
    return favorites
  }

  const lowerQuery = query.toLowerCase()

  return favorites.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.director.toLowerCase().includes(lowerQuery) ||
      (movie.cast &&
        movie.cast.some((actor) => actor.toLowerCase().includes(lowerQuery)))
  )
}
