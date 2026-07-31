export default function Loader() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 py-12">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      <p className="text-sm text-gray-500">Fetching weather data...</p>
    </div>
  )
}
