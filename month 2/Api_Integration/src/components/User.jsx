function User({ user }) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className='bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden'>
      {/* Top accent bar */}
      <div className='h-1 bg-[#0B132B] w-full' />

      <div className='p-5'>
        {/* Avatar + Name */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 rounded-full bg-[#0B132B] flex items-center justify-center shrink-0'>
            <span className='text-white text-sm font-bold'>{initials}</span>
          </div>
          <div>
            <h2 className='font-bold text-[#0B132B] text-sm leading-tight'>
              {user.name}
            </h2>
            <p className='text-xs text-slate-400'>@{user.username}</p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-100 mb-4' />

        {/* Info */}
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 text-sm text-slate-600'>
            <span className='text-slate-400 w-4'>✉</span>
            <span className='truncate'>{user.email}</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-slate-600'>
            <span className='text-slate-400 w-4'>⌂</span>
            <span>
              {user.address.street}, {user.address.city}
            </span>
          </div>
        </div>

        {/* Footer badge */}
        <div className='mt-4 pt-3 border-t border-slate-100'>
          <span className='text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full'>
            {user.company.name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default User
