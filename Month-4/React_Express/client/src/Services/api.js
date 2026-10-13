
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

api.interceptors.request.use((config)=>{
    console.log("sending request",config.method,config.url)
    return config
},
(error)=>Promise.reject(error))


api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status)
    return response
  },
  (error) => {
    if (error.response) {
      console.error(
        'API error:',
        error.response.status,
        error.response.data
      )
    } else if (error.request) {
      console.error('No response received from the server')
    } else {
      console.error('Request setup error:', error.message)
    }

    return Promise.reject(error)
  }
)


export default api