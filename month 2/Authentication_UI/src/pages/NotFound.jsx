import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='relative flex min-h-[calc(100vh-65px)] flex-col items-center justify-center overflow-hidden bg-[#09090B] px-4 text-center sm:px-6'>
      {/* Ambient glow */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] opacity-[0.04] blur-3xl sm:h-[500px] sm:w-[500px]' />
      </div>

      {/* 404 number */}
      <p className='relative select-none text-[8rem] font-black leading-none tracking-tighter text-[#D4AF37] opacity-10 sm:text-[10rem] md:text-[14rem]'>
        404
      </p>

      {/* Content */}
      <div className='relative -mt-12 sm:-mt-16'>
        <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#D4AF37]' />
          Page not found
        </div>

        <h1 className='mb-3 text-2xl font-bold tracking-tight text-[#F4F4F5] sm:text-3xl md:text-4xl'>
          This page doesn't exist
        </h1>
        <p className='mb-8 max-w-sm text-sm leading-relaxed text-[#A1A1AA]'>
          The URL you visited doesn't match any page. It may have been moved,
          deleted, or you may have mistyped it.
        </p>

        <div className='flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center'>
          <Link
            to='/'
            className='w-full rounded-xl bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-[#c9a430] hover:shadow-lg hover:shadow-[#D4AF37]/20 sm:w-auto'
          >
            Back to Home
          </Link>
          <Link
            to='/dashboard'
            className='w-full rounded-xl border border-[#27272A] px-6 py-2.5 text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:border-[#F4F4F5] hover:text-[#F4F4F5] sm:w-auto'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
