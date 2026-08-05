import React from 'react'
import UseEffectDemo from '../components/UseEffectDemo'
import UseRefDemo from '../components/UseRefDemo'
import useToggle from '../hooks/useToggle'

function Home() {

  //custom hook
  const {isOpen,toggle}=useToggle()

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Page Header */}
      <div className="max-w-xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">React Hooks Demo</h1>
        <p className="text-gray-500 text-sm mt-1">Exploring useEffect, useRef, and custom hooks</p>
      </div>

      {/* Components */}
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <UseEffectDemo/>
        <UseRefDemo/>

        {/* useToggle Demo */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">useToggle (Custom Hook)</h2>
          <button
            onClick={toggle}
            className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"}`}
          >
            {isOpen ? "Hide Message" : "Show Message"}
          </button>
          {isOpen && (
            <p className="mt-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm">
              Hey Coder, how are you? 
            </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home