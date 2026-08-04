import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'Naeem', age: 22 })

  // batching & wrong way to handle increment
  function handleIncrement() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  // correct way to write 3 times decrement
  function handleDecrement() {
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
    setCount(prev => prev - 1)
  }

  // wrong way to change username
  function handleWrongUsername() {
    user.name = 'Ali'
    console.log(user)
  }

  // right way to change username
  function handleRightUsername() {
    setUser({ ...user, name: 'Ali' })
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10 font-sans">

      {/* Counter */}
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm mx-auto mb-8 text-center">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Counter</h2>
        <p className="text-5xl font-bold text-slate-800 mb-6">{count}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleIncrement}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Decrement ×3
          </button>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm mx-auto">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">User Management</h2>

        {/* Wrong way */}
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs font-semibold text-red-500 uppercase mb-2">Wrong Way</p>
          <p className="text-lg font-bold text-slate-800 mb-3">{user.name}</p>
          <button
            onClick={handleWrongUsername}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Change Username
          </button>
        </div>

        {/* Right way */}
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-xs font-semibold text-green-600 uppercase mb-2">Right Way</p>
          <p className="text-lg font-bold text-slate-800 mb-3">{user.name}</p>
          <button
            onClick={handleRightUsername}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Change Username
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
