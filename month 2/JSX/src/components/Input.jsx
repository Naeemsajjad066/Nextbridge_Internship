import React, { useState } from 'react'

function Input({addUser}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (!name || !age) {
            setError("Please fill in all fields")
            return
        }

        addUser({ id: Date.now(), name, age })
        setName("")
        setAge("")
        setError("")
    }

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Add User</h2>
            <div className="flex flex-col gap-3">

                <div className="flex flex-col gap-1">
                    <label htmlFor='name' className="text-xs font-semibold text-slate-500">Name</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Enter your name'
                        value={name}
                        maxLength={50}
                        onChange={(e) => {
                            const val = e.target.value
                            if (/^[a-zA-Z\s]*$/.test(val)) setName(val)
                        }}
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="age" className="text-xs font-semibold text-slate-500">Age</label>
                    <input
                        type="number"
                        id='age'
                        placeholder='Enter your age'
                        value={age}
                        min={0}
                        max={999}
                        onChange={(e) => {
                            const val = e.target.value
                            if (val.length <= 3 && Number(val) >= 0) setAge(val)
                        }}
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {error && <p className="text-xs text-red-500">{error}</p>}

                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors mt-1"
                >
                    Add User
                </button>
            </div>
        </div>
    )
}

export default Input
