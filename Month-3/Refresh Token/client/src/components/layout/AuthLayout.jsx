function AuthLayout({ children }) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-bg-gradient-start)] to-[var(--color-bg-gradient-end)] p-4 sm:p-6'>
      {children}
    </div>
  )
}

export default AuthLayout
