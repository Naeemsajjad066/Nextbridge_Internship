import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import CTASection from '../components/home/CTASection'

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)]'>
      <Navbar />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20'>
        <Hero />
        <Features />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default Home
