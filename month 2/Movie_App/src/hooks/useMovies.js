import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

// Fetch all movies from API
export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }

        const data = await response.json()
        setMovies(data.movies || [])
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to load movies')
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return { movies, loading, error }
}

// Search movies
export const useSearchMovies = (movies) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(movies)

  // Update searchResults when movies change
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(movies)
    }
  }, [movies, searchQuery])

  const handleSearch = (query) => {
    setSearchQuery(query)

    if (!query.trim()) {
      setSearchResults(movies)
      return
    }

    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()) ||
        movie.cast.some((actor) =>
          actor.toLowerCase().includes(query.toLowerCase())
        )
    )

    setSearchResults(results)
  }

  return { searchResults, searchQuery, handleSearch }
}

// Get single movie by ID
export const useMovieById = (id) => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }

        const data = await response.json()
        const found = data.movies?.find((m) => m.id === parseInt(id))

        if (found) {
          setMovie(found)
          setError(null)
        } else {
          setError('Movie not found')
        }
      } catch (err) {
        setError(err.message || 'Failed to load movie')
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchMovie()
  }, [id])

  return { movie, loading, error }
}

// Category filtering
export const useCategories = () => {
  const categories = [
    { id: 'all', name: 'All Movies' },
    { id: 'action', name: 'Action' },
    { id: 'drama', name: 'Drama' },
    { id: 'sci-fi', name: 'Sci-Fi' },
    { id: 'crime', name: 'Crime' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'animation', name: 'Animation' },
  ]

  const filterByCategory = (movies, categoryId) => {
    if (categoryId === 'all') return movies
    return movies.filter((movie) =>
      movie.genre.some((genre) => genre.toLowerCase() === categoryId)
    )
  }

  return { categories, filterByCategory }
}
