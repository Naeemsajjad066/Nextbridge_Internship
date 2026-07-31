import heroImg from '../../assets/hero.png'

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white border-b border-slate-200">
      <div className="w-[min(90%,1200px)] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-4">
            Build Better Websites Faster
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Create beautiful, responsive websites with clean HTML and CSS.
            Learn modern web development with practical examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#features"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow-md shadow-blue-200 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#testimonials"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-[45%] hidden md:block">
          <img
            src={heroImg}
            alt="Developer building a website"
            className="w-full h-auto rounded-xl shadow-2xl border border-slate-200"
          />
        </div>

      </div>
    </section>
  )
}
