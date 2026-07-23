import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forcast'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'


function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchWeather(e) {
    e.preventDefault()
    if (city.trim() === "") {
      alert("Dont Go Empty..")
      return
    }
    if (!/^[a-zA-Z\s]+$/.test(city.trim())) {
    alert("Please enter a valid city name.");
    return;
  }

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`

    try {
      setLoading(true)
      setError(null)     
      setWeather(null) 

      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        setError(data.error?.message || "Something went wrong. Please try again.")
        return
      }

      setWeather(data)
    } catch (error) {
      console.log(error)
      setError("Network error. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-slate-100 px-3 py-6 sm:px-4 sm:py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:p-8">
        <h1 className="mb-4 text-center text-2xl font-bold tracking-tight text-slate-800 sm:mb-6 sm:text-3xl">
          Weather Forecast
        </h1>

        <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="mt-4 grid items-start gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-2">
            <CurrentWeather weather={weather} />
            <Forecast weather={weather} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
