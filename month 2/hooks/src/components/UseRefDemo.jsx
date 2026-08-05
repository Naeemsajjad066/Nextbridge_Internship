import React, { useEffect, useRef, useState } from 'react'

function UseRefDemo() {

    const [state,setState]=useState(false)
    const count = useRef(0)
    const inputRef = useRef(null)

    count.current++
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div className="bg-white rounded-xl shadow p-6 mb-4 max-w-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">useRef Demo</h2>
            <input
                ref={inputRef}
                className="border border-gray-300 focus:border-indigo-500 outline-none rounded-lg px-3 py-2 text-sm w-full mb-3"
                placeholder="Auto focused input"
            />
            <p className="text-sm text-gray-600 mb-3">
                Render Count: <span className="font-bold text-indigo-600">{count.current}</span>
            </p>
            <button
                onClick={()=>setState(!state)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition"
            >
                Change State (force re-render)
            </button>
        </div>
    )
}

export default UseRefDemo