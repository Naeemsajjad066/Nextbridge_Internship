import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'font-medium rounded-xl transition-opacity shadow-md'

  // Add cursor-pointer for buttons with onClick
  const cursorClass = onClick ? 'cursor-pointer' : ''

  const variants = {
    primary:
      'bg-[var(--color-button-bg)] text-[var(--color-button-text)] hover:opacity-90',
    secondary:
      'bg-[var(--color-icon-bg)] text-[var(--color-text-dark)] border border-[var(--color-input-border)] hover:bg-[var(--color-input-bg)]',
    ghost: 'text-[var(--color-text-dark)] hover:text-[var(--color-button-bg)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${cursorClass} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
