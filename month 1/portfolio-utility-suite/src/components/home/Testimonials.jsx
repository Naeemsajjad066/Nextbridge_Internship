import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'

const testimonials = [
  {
    quote:
      '"This platform made building responsive websites so much easier. The clean design and smooth experience are amazing."',
    name: 'Naeem Sajjad',
    role: 'Frontend Developer',
    avatar: user1,
  },
  {
    quote:
      '"The responsive layouts saved us hours of development time. Highly recommended! You can contact without any fear."',
    name: 'Waseem Haider',
    role: 'UI Designer',
    avatar: user2,
  },
  {
    quote:
      '"A modern interface with excellent performance. It helped our team launch much faster."',
    name: 'Husnain Khalid',
    role: 'Project Manager',
    avatar: user3,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="w-[min(90%,1200px)] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">What Our Customers Say</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Trusted by developers and businesses around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors"
            >
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-slate-900 font-semibold text-sm">{t.name}</h3>
                  <span className="text-slate-400 text-xs">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
