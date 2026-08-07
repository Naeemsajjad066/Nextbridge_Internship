function Input({
  name,
  label,
  type = 'text',
  value,
  onChange,
  onKeyDown,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-[#0B132B]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="border border-slate-300 rounded-md px-3 py-2 outline-none focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] text-sm"
      />
    </div>
  )
}

export default Input
