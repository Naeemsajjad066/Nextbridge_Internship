const STATS_CONFIG = [
  { key: 'totalMovies', label: 'Total Movies' },
  { key: 'favoriteCount', label: 'Your Favorites' },
  { key: 'totalGenres', label: 'Genres' },
  { key: 'averageRating', label: 'Avg Rating' },
]

const StatsBar = ({ stats }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-800 border border-slate-700 rounded-2xl p-6'>
      {STATS_CONFIG.map(({ key, label }) => (
        <div key={key} className='text-center'>
          <div className='text-3xl font-bold text-amber-400 mb-1'>
            {stats[key]}
          </div>
          <div className='text-sm text-slate-400'>{label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsBar
