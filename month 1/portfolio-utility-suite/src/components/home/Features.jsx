const features = [
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Optimized layouts and lightweight code ensure a smooth experience.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Looks great on mobile, tablet, and desktop devices.',
  },
  {
    icon: '🛡️',
    title: 'Secure',
    description: 'Built with modern development practices and clean code.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-slate-50">
      <div className="w-[min(90%,1200px)] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Why Choose Us?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Everything you need to build beautiful, fast, and responsive websites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-50 transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-slate-900 font-semibold text-base mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
