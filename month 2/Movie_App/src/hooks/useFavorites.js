import { useState, useEffect } from 'react'
import { isLoggedIn } from '../services/authService'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoggedIn()) {
      const saved = JSON.parse(localStorage.getItem('favoriteMovies') || '[]')
      setFavorites(saved)
    } else {
      setFavorites([])
    }
    setLoading(false)
  }, [])

  const addFavorite = (movie) => {
    if (!isLoggedIn()) return

    const exists = favorites.some((fav) => fav.id === movie.id)
    if (!exists) {
      const updated = [...favorites, movie]
      setFavorites(updated)
      localStorage.setItem('favoriteMovies', JSON.stringify(updated))
    }
  }

  const removeFavorite = (movieId) => {
    if (!isLoggedIn()) return

    const updated = favorites.filter((fav) => fav.id !== movieId)
    setFavorites(updated)
    localStorage.setItem('favoriteMovies', JSON.stringify(updated))
  }

  const toggleFavorite = (movie) => {
    if (!isLoggedIn()) return

    const exists = favorites.some((fav) => fav.id === movie.id)
    if (exists) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  const isFavorite = (movieId) => {
    if (!isLoggedIn()) return false
    return favorites.some((fav) => fav.id === movieId)
  }

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length,
  }
}
