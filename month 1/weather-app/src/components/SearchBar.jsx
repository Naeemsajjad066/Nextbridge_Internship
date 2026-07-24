
function SearchBar({city,setCity,searchWeather}) {
    return (
    <form onSubmit={searchWeather} className='flex gap-2 sm:gap-3'>
            <input
              type="text"
              placeholder='Enter City...'
              value={city}
              maxLength={50}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
            />
            <button
              type='submit'
              className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 sm:px-6 sm:py-3"
            >
              Search
            </button>
          </form>
    )
}

export default SearchBar