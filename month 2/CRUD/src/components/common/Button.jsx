function Button({ children, onClick, color = 'bg-red-600', disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white rounded-lg transition-opacity
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
        ${color}`}
    >
      {children}
    </button>
  )
}

export default Button
