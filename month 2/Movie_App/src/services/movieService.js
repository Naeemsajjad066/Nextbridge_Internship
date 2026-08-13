/**
 * Movie Service - Core movie operations and utilities
 */

const API_URL = 'https://mocki.io/v1/0fd3ae98-cb21-4f84-a0ae-686eeba87156'

// Fetch all movies from API
export const fetchAllMovies = async () => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }

    const data = await response.json()
    return data.movies || []
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

// Get a single movie by ID
export const getMovieById = async (id) => {
  try {
    const movies = await fetchAllMovies()
    const movie = movies.find((m) => m.id === parseInt(id))

    if (!movie) {
      throw new Error('Movie not found')
    }

    return movie
  } catch (error) {
    console.error('Error fetching movie:', error)
    throw error
  }
}

// Get featured movie (first from list or from array)
export const getFeaturedMovie = (movies) => {
  if (!movies || movies.length === 0) {
    return null
  }
  return movies[0]
}

// Search movies by query
export const searchMovies = (movies, query) => {
  if (!query || !query.trim()) {
    return movies
  }

  const lowerQuery = query.toLowerCase()

  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.director.toLowerCase().includes(lowerQuery) ||
      movie.description.toLowerCase().includes(lowerQuery) ||
      (movie.cast &&
        movie.cast.some((actor) => actor.toLowerCase().includes(lowerQuery)))
  )
}

// Filter movies by category/genre
export const filterByCategory = (movies, categoryId) => {
  if (categoryId === 'all' || !categoryId) {
    return movies
  }

  return movies.filter(
    (movie) =>
      movie.genre &&
      movie.genre.some((genre) => genre.toLowerCase() === categoryId)
  )
}

// Get all unique genres from movies
export const getAllGenres = (movies) => {
  if (!movies || movies.length === 0) {
    return []
  }

  return [...new Set(movies.flatMap((m) => m.genre || []))]
}

// Get average rating from movies
export const getAverageRating = (movies) => {
  if (!movies || movies.length === 0) {
    return 0
  }

  const total = movies.reduce((sum, m) => sum + (m.rating || 0), 0)
  return Math.round((total / movies.length) * 10) / 10
}

// Format movie duration
export const formatRuntime = (minutes) => {
  if (!minutes) return 'N/A'
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

// Format movie release date
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

// Get movies sorted by rating (highest first)
export const sortByRating = (movies) => {
  return [...movies].sort((a, b) => (b.rating || 0) - (a.rating || 0))
}

// Get movies sorted by year (newest first)
export const sortByYear = (movies) => {
  return [...movies].sort((a, b) => (b.year || 0) - (a.year || 0))
}

// Validate movie object
export const isValidMovie = (movie) => {
  return (
    movie &&
    typeof movie.id === 'number' &&
    typeof movie.title === 'string' &&
    typeof movie.rating === 'number'
  )
}

// Get movie statistics
export const getMovieStats = (movies) => {
  if (!movies || movies.length === 0) {
    return {
      totalMovies: 0,
      totalGenres: 0,
      averageRating: 0,
      highestRated: null,
      lowestRated: null,
    }
  }

  const sorted = sortByRating(movies)

  return {
    totalMovies: movies.length,
    totalGenres: getAllGenres(movies).length,
    averageRating: getAverageRating(movies),
    highestRated: sorted[0],
    lowestRated: sorted[sorted.length - 1],
  }
}
