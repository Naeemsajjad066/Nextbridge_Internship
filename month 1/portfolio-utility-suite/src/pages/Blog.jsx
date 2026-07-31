import { useState } from 'react'
import BlogCard from '../components/blog/BlogCard'
import { articles } from '../data/articles'

const PAGE_SIZE = 6

export default function Blog() {
  const [visible, setVisible] = useState(PAGE_SIZE)

  const shown = articles.slice(0, visible)
  const hasMore = visible < articles.length

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center py-16 px-5">
        <div className="max-w-xl mx-auto">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Tech Insights</h1>
          <p className="text-slate-400 text-lg">Latest articles on Web Development and Programming</p>
        </div>
      </header>

      {/* Grid */}
      <main className="w-[92%] max-w-[1200px] mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {shown.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="px-10 py-3.5 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-7 text-slate-400 text-sm border-t border-slate-200 mt-5">
        © 2026 Tech Insights · All rights reserved
      </footer>

    </div>
  )
}
