function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
        {title}
      </p>
      <p className="text-3xl font-bold text-slate-800">
        {value}
      </p>
    </div>
  )
}

export default StatCard;