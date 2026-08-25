import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Products', to: '/products' },
    { label: "Men's Clothing", to: "/products?category=men's clothing" },
    { label: "Women's Clothing", to: "/products?category=women's clothing" },
    { label: 'Electronics', to: '/products?category=electronics' },
    { label: 'Jewelery', to: '/products?category=jewelery' },
  ],
  Support: [
    { label: 'FAQ', to: '#' },
    { label: 'Shipping Policy', to: '#' },
    { label: 'Returns & Refunds', to: '#' },
    { label: 'Track Order', to: '#' },
  ],
  Company: [
    { label: 'About Us', to: '#' },
    { label: 'Careers', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
  ],
}

function Footer() {
  return (
    <footer className='bg-dark text-gray-400 mt-auto'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Brand */}
        <div className='flex flex-col gap-4'>
          <Link to='/' className='text-xl font-bold text-primary'>
            E-Commerce
          </Link>
          <p className='text-sm leading-relaxed'>
            Your one-stop shop for quality products at unbeatable prices. Fast
            shipping, easy returns.
          </p>
          {/* Social Icons */}
          <div className='flex items-center gap-4 mt-2'>
            {/* Twitter/X */}
            <a
              href='#'
              className='hover:text-primary transition-colors duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href='#'
              className='hover:text-primary transition-colors duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                <circle cx='12' cy='12' r='4' />
                <circle cx='17.5' cy='6.5' r='0.5' fill='currentColor' />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href='#'
              className='hover:text-primary transition-colors duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className='flex flex-col gap-4'>
            <h4 className='text-white font-semibold text-sm uppercase tracking-wider'>
              {title}
            </h4>
            <ul className='flex flex-col gap-2'>
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className='text-sm hover:text-primary transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2'>
          <p className='text-xs'>
            © {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
          <div className='flex items-center gap-3 text-xs'>
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
