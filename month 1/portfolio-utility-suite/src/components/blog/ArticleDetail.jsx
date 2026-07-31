import { Link } from 'react-router-dom'

export default function ArticleDetail({ article }) {
  const { title, author, dateLabel, date, readTime, heroImage, imageAlt, sections } = article

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Back nav */}
      <nav className="bg-slate-800 px-10 py-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-800 hover:bg-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
        >
          ← Back to Blog
        </Link>
      </nav>

      {/* Hero image */}
      <div className="w-full h-[420px] overflow-hidden relative">
        <img
          src={heroImage}
          alt={imageAlt}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
      </div>

      {/* Article body */}
      <div className="max-w-[780px] mx-auto px-6 py-12 pb-20">

        <h1 className="text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-4">{title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 pb-6 border-b border-slate-200">
          <span className="font-semibold text-slate-500">{author}</span>
          <span className="text-slate-300">·</span>
          <time dateTime={date} className="font-semibold text-teal-700">{dateLabel}</time>
          <span className="text-slate-300">·</span>
          <span>{readTime}</span>
        </div>

        {/* Sections */}
        {sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="text-2xl font-bold text-slate-800 mt-9 mb-3">{section.heading}</h2>
            )}
            {section.subheading && (
              <h3 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mt-7 mb-2.5">
                {section.subheading}
              </h3>
            )}
            {section.content?.map((para, j) => (
              <p key={j} className="text-slate-500 text-base leading-relaxed mb-5">{para}</p>
            ))}
            {section.code && (
              <pre className="bg-slate-900 text-slate-200 px-6 py-5 rounded-xl text-sm overflow-x-auto my-6 leading-relaxed">
                {section.code}
              </pre>
            )}
            {section.afterCode && (
              <p className="text-slate-500 text-base leading-relaxed mb-5">{section.afterCode}</p>
            )}
            {section.blockquote && (
              <blockquote className="border-l-4 border-blue-600 bg-blue-50 px-5 py-4 rounded-r-lg my-6 text-blue-800 italic">
                {section.blockquote}
              </blockquote>
            )}
          </div>
        ))}

      </div>

      {/* Footer */}
      <footer className="text-center py-7 text-slate-400 text-sm border-t border-slate-200">
        © 2026 Tech Insights · All rights reserved
      </footer>

    </div>
  )
}
