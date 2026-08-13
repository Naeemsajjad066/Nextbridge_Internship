import { useState, useMemo } from 'react'
import {
  useMovies,
  useSearchMovies,
  useCategories,
  useFavorites,
} from './index'
import { getFeaturedMovie, getAverageRating, getAllGenres } from '../services'

/**
 * Custom hook that encapsulates all home page logic
 * Returns everything needed to render the home page
 */
export const useHomePage = () => {
  const { movies, loading: moviesLoading } = useMovies()
  const { searchResults, handleSearch } = useSearchMovies(movies)
  const { categories, filterByCategory } = useCategories()
  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  const [activeCategory, setActiveCategory] = useState('all')

  const displayedMovies = useMemo(
    () => filterByCategory(searchResults, activeCategory),
    [searchResults, activeCategory, filterByCategory]
  )

  const featuredMovie = useMemo(
    () => getFeaturedMovie(displayedMovies) || getFeaturedMovie(movies),
    [displayedMovies, movies]
  )

  const stats = useMemo(
    () => ({
      totalMovies: movies.length,
      totalGenres: getAllGenres(movies).length,
      averageRating: getAverageRating(movies),
      favoriteCount: favorites.length,
    }),
    [movies, favorites]
  )

  return {
    // Data
    movies,
    displayedMovies,
    featuredMovie,
    stats,
    categories,
    favorites,

    // Loading states
    moviesLoading,

    // State
    activeCategory,

    // Actions
    handleSearch,
    setActiveCategory,
    toggleFavorite,
    isFavorite,
  }
}
