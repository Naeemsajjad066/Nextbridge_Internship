import React from 'react'

function Button({children}) {
  return (
    <button className=' cursor-pointer bg-amber-500 text-white w-28 h-8'>
        {children}
    </button>
  )
}

export default Button