function Forecast({ weather }) {
  if (!weather) return null;

  const { forecast } = weather;
  const { forecastday } = forecast;
  
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-slate-800 sm:mb-4 sm:text-2xl">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {forecastday.map((day) => (
          <div
            key={day.date}
            className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow sm:px-5"
          >
            {/* Date */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-slate-800 sm:text-base">
                {day.date}
              </h3>
              <p className="truncate text-xs text-gray-500 sm:text-sm">
                {day.day.condition.text}
              </p>
            </div>

            {/* Weather Icon */}
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="mx-3 h-10 w-10 shrink-0 sm:mx-4 sm:h-12 sm:w-12"
            />

            {/* Temperature */}
            <div className="shrink-0 text-right">
              <p className="text-sm font-semibold text-slate-800 sm:text-base">
                {day.day.maxtemp_c}° / {day.day.mintemp_c}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;