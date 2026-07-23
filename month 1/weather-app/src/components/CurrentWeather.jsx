function CurrentWeather({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div className="h-full rounded-xl bg-blue-50 p-4 shadow-md sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
            {weather.location.name}
          </h2>

          <p className="text-xs text-gray-600 sm:text-sm">
            {weather.location.region}, {weather.location.country},
          </p>
        </div>

        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
      </div>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:mt-6 sm:text-5xl">
        {weather.current.temp_c}°C
      </h1>

      <p className="mt-2 text-base text-gray-700 sm:text-lg">
        {weather.current.condition.text}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
        <div className="rounded-lg bg-white p-3 text-center shadow sm:p-4">
          <p className="text-xs text-gray-500 sm:text-sm">Humidity</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-800 sm:text-xl">
            {weather.current.humidity}%
          </h3>
        </div>

        <div className="rounded-lg bg-white p-3 text-center shadow sm:p-4">
          <p className="text-xs text-gray-500 sm:text-sm">Wind</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-800 sm:text-xl">
            {weather.current.wind_kph} km/h
          </h3>
        </div>

        <div className="rounded-lg bg-white p-3 text-center shadow sm:p-4">
          <p className="text-xs text-gray-500 sm:text-sm">Rain Chances</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-800 sm:text-xl">
            {weather.current.chance_of_rain}%
          </h3>
        </div>
        <div className="rounded-lg bg-white p-3 text-center shadow sm:p-4">
          <p className="text-xs text-gray-500 sm:text-sm">Snow Chances</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-800 sm:text-xl">
            {weather.current.chance_of_snow}%
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;