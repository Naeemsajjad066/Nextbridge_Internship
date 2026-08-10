function NotFound() {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
      <h1 className='text-6xl font-bold text-gray-800'>404</h1>

      <h2 className='mt-4 text-2xl font-semibold text-gray-700'>
        Page Not Found
      </h2>

      <p className='mt-2 text-gray-500'>
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  )
}

export default NotFound
