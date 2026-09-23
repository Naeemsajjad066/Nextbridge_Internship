function Card({ children, className = '', variant = 'default', ...props }) {
  const variants = {
    default: 'bg-[var(--color-card-bg)]/80 backdrop-blur-sm',
    feature:
      'bg-[var(--color-card-bg)]/60 backdrop-blur-sm border border-[var(--color-input-border)]',
  }

  return (
    <div
      className={`${variants[variant]} rounded-[var(--radius-lg)] shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
