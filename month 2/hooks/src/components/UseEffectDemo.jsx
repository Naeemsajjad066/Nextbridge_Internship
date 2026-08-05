import React, { useEffect,useState } from 'react'

function UseEffectDemo() {

    const [status,setStatus]=useState(false)

    //Without Dependency Array
    useEffect(()=>{
        console.log("No Dependency Array: Component Rendered")
    })

    //With Empty Dependency Array
    useEffect(()=>{
        console.log("Empty Dependency Array: Component Rendered")
    },[])

    //With Dependency Array + Cleanup Function
    useEffect(()=>{
        console.log(`Dependency Array: Rendered due to status → ${status}`)
        return ()=>{
            console.log(`Cleanup: status was ${status} before re-run`)
        }
    },[status])

    function handleStatus(){
        setStatus(!status)
    }

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-4 max-w-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">useEffect Demo</h2>
      <p className="text-sm text-gray-500 mb-4">
        Status: <span className={`font-bold ${status ? "text-green-500" : "text-red-500"}`}>{status ? "True" : "False"}</span>
      </p>
      <p className='text-xs mb-2 text-slate-400'>Check Console for better understanding...</p>
      <button
        onClick={handleStatus}
        className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition"
      >
        Change Status
      </button>
    </div>
  )
}

export default UseEffectDemo