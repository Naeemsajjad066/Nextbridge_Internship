function Error({ error }) {
  return (
    <div className='flex items-center justify-center py-24'>
      <div className='bg-white border border-red-100 rounded-xl p-8 text-center shadow-sm max-w-sm w-full'>
        <div className='w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4'>
          <span className='text-red-500 text-xl'>✕</span>
        </div>
        <h3 className='font-bold text-slate-700 mb-1'>Something went wrong</h3>
        <p className='text-slate-400 text-sm'>{error}</p>
      </div>
    </div>
  )
}

export default Error
