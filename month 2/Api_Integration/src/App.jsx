import Home from './pages/Home'

const App = () => {
  return (
    <div className='min-h-screen bg-[#F0F4F8]'>
      {/* Navbar */}
      <header className='bg-[#0B132B] text-white px-8 py-4 flex items-center justify-between shadow-lg'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>AI</span>
          </div>
          <h1 className='text-lg font-bold tracking-wide'>API Integration</h1>
        </div>
        <span className='text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full'>
          jsonplaceholder.typicode.com
        </span>
      </header>

      <main className='max-w-6xl mx-auto px-6 py-10'>
        <Home />
      </main>
    </div>
  )
}

export default App
