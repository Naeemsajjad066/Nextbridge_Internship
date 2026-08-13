const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-slate-900 text-slate-50 border-t border-slate-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <span className='text-2xl font-bold text-amber-400'>
                🎬 Cenovo
              </span>
            </div>
            <p className='text-slate-300 mb-4 max-w-md'>
              Discover and explore your favorite movies. Find ratings, reviews,
              and detailed information about the latest blockbusters and classic
              films.
            </p>
            <div className='flex space-x-4'>
              {/* Social Media Icons */}
              <a
                href='#'
                className='text-slate-400 hover:text-amber-400 transition-colors duration-300'
                aria-label='Facebook'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-slate-400 hover:text-amber-400 transition-colors duration-300'
                aria-label='Twitter'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-slate-400 hover:text-amber-400 transition-colors duration-300'
                aria-label='Instagram'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.418 3.323-1.418s2.448.543 3.323 1.418c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.406h-1.829c-.175-1.297-1.297-2.273-2.595-2.273s-2.42.976-2.595 2.273H7.431c-.928 0-1.664.736-1.664 1.664v5.446c0 .928.736 1.664 1.664 1.664h8.848c.928 0 1.664-.736 1.664-1.664V9.246c0-.928-.736-1.664-1.664-1.664z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-amber-400'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='/privacy'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-amber-400'>
              Categories
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/genre/action'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  href='/genre/comedy'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Comedy
                </a>
              </li>
              <li>
                <a
                  href='/genre/drama'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Drama
                </a>
              </li>
              <li>
                <a
                  href='/genre/sci-fi'
                  className='text-slate-300 hover:text-slate-50 transition-colors duration-300'
                >
                  Sci-Fi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-slate-700 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-slate-400 text-sm mb-4 md:mb-0'>
              © {currentYear} MovieApp. All rights reserved.
            </div>
            <div className='flex space-x-6 text-sm'>
              <a
                href='/terms'
                className='text-slate-400 hover:text-slate-50 transition-colors duration-300'
              >
                Terms of Service
              </a>
              <a
                href='/privacy'
                className='text-slate-400 hover:text-slate-50 transition-colors duration-300'
              >
                Privacy Policy
              </a>
              <a
                href='/cookies'
                className='text-slate-400 hover:text-slate-50 transition-colors duration-300'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
