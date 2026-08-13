export { default as HeroSection } from './HeroSection'
export { default as CategoryTabs } from './CategoryTabs'
export { default as StatsBar } from './StatsBar'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'

import {
  useMovies,
  useSearchMovies,
  useCategories,
  useFavorites,
} from '../hooks'
import { getFeaturedMovie, getAverageRating, getAllGenres } from '../services'

export {
  SearchBar,
  MovieGrid,
  useMovies,
  useSearchMovies,
  useCategories,
  useFavorites,
  getFeaturedMovie,
  getAllGenres,
  getAverageRating,
}
