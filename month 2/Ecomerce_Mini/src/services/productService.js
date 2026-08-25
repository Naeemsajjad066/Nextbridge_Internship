import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`)
  return response.data
}

export const fetchFeaturedProducts = async () => {
  const response = await axios.get(`${API_URL}/products?limit=8`)
  return response.data
}

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`)
  return response.data
}
