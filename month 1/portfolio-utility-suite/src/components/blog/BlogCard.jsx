import { Link } from 'react-router-dom'

export default function BlogCard({ article }) {
  const { id, title, subtitle, author, dateLabel, date, readTime, image, imageAlt, excerpt } = article

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-250 flex flex-col cursor-pointer">
      <Link to={`/blog/${id}`} className="flex flex-col flex-1 no-underline text-inherit">

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
          />
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mb-2.5">
            <span className="font-semibold text-slate-500">{author}</span>
            <span className="text-slate-300">·</span>
            <time dateTime={date} className="font-semibold text-teal-700">{dateLabel}</time>
            <span className="text-slate-300">·</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-slate-900 font-bold text-lg leading-snug mb-1.5">{title}</h2>

          {/* Subtitle */}
          <h3 className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2.5">{subtitle}</h3>

          {/* Excerpt */}
          <p className="text-slate-500 text-sm leading-relaxed flex-1">{excerpt}</p>
        </div>

      </Link>
    </article>
  )
}
