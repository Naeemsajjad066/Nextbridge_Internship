export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-center border-t border-slate-200"
    >
      <div className="w-[min(90%,1200px)] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Build Your Next Project?
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto leading-relaxed mb-8">
          Join thousands of developers creating fast, responsive, and modern websites.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
}
