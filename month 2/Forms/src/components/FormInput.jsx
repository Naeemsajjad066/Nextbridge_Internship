
function FormInput({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    ...rest
}) {
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={id}
                className="text-sm font-medium text-gray-600"
            >
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-500 transition"
                {...rest}
            />

            {error && (
                <p className="text-red-500 text-xs">
                    {error}
                </p>
            )}
        </div>
    )
}

export default FormInput