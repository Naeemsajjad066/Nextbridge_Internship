/**
 * Export all services from a central point
 */

export * from './movieService'
export * from './favoriteService'
export * from './authService'
export {
  getFeaturedMovie,
  getAverageRating,
  getAllGenres,
} from './movieService'
