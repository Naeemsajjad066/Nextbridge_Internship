import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function useStudents() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        console.log(response.data)
        setTimeout(() => setLoading(false), 3000)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  return {
    users,
    error,
    loading,
  }
}

export default useStudents
