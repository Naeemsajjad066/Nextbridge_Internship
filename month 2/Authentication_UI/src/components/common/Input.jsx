function Input({ label, type = 'text', error, ...props }) {
  return (
    <div className='flex flex-col gap-1.5'>
      <label className='text-xs font-semibold uppercase tracking-widest text-[#A1A1AA]'>
        {label}
      </label>
      <input
        type={type}
        {...props}
        className={`rounded-lg border bg-[#09090B] px-3 py-2.5 text-sm text-[#F4F4F5] placeholder-[#3f3f46] outline-none transition-all duration-200
          ${
            error
              ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
              : 'border-[#27272A] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
          }`}
      />
      {error && (
        <p className='flex items-center gap-1 text-xs text-[#EF4444]'>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

export default Input
