function Button({ children, variant = 'primary', ...props }) {
  const base =
    'w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#18181B] disabled:cursor-not-allowed disabled:opacity-40'

  const variants = {
    primary:
      'bg-[#D4AF37] text-[#09090B] hover:bg-[#c9a430] focus:ring-[#D4AF37]',
    ghost:
      'bg-transparent border border-[#27272A] text-[#A1A1AA] hover:border-[#D4AF37] hover:text-[#F4F4F5] focus:ring-[#27272A]',
  }

  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default Button
