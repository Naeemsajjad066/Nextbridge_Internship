const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? 'bg-amber-500 text-slate-900 scale-105 shadow-lg shadow-amber-500/20'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-50 border border-slate-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
