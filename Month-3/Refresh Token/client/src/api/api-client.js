import { API_URL } from '../config/api'

const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token)
}

const refreshToken = async () => {
  console.log('Attempting to refresh token...')
  const response = await fetch(`${API_URL}/users/refresh`, {
    method: 'POST',
    credentials: 'include',
  })

  const data = await response.json()
  console.log('Refresh response:', data)

  if (response.ok) {
    setAccessToken(data.data.accessToken)
    console.log('New access token saved')
    return data.data.accessToken
  }

  console.log('Refresh failed')
  throw new Error('Refresh token expired')
}

const request = async (endpoint, options = {}) => {
  const token = getAccessToken()

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  let response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  })

  if (response.status === 401) {
    console.log('Got 401, attempting refresh...')
    try {
      const newToken = await refreshToken()
      headers.Authorization = `Bearer ${newToken}`

      console.log('Retrying original request with new token')
      response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
        credentials: 'include',
      })
      console.log('Retry response status:', response.status)
    } catch (error) {
      console.log('Refresh error:', error.message)
      throw new Error('Session expired', { cause: error })
    }
  }

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}

export const apiClient = {
  get: (endpoint, options) =>
    request(endpoint, {
      ...options,
      method: 'GET',
    }),

  post: (endpoint, body, options) =>
    request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    }),

  put: (endpoint, body, options) =>
    request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    }),

  delete: (endpoint, options) =>
    request(endpoint, {
      ...options,
      method: 'DELETE',
    }),
}
