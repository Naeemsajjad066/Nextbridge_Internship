import Card from '../ui/Card'

function AuthCard({ children, icon: Icon, title, subtitle }) {
  return (
    <Card className='w-full max-w-md overflow-y-auto p-6 sm:p-8'>
      {/* Icon */}
      {Icon && (
        <div className='flex justify-center mb-4'>
          <div className='w-14 h-14 bg-[var(--color-icon-bg)] rounded-2xl flex items-center justify-center shadow-md'>
            <Icon className='w-7 h-7 text-[var(--color-text-dark)]' />
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <h1 className='text-xl font-semibold text-[var(--color-text-dark)] text-center mb-2'>
          {title}
        </h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className='text-xs text-[var(--color-text-muted)] text-center mb-6'>
          {subtitle}
        </p>
      )}

      {/* Content */}
      {children}
    </Card>
  )
}

export default AuthCard
