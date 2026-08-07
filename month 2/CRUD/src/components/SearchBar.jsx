function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search students..."
        className="border border-slate-300 rounded-md px-3 py-2 outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] flex-1 text-sm min-w-0"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
