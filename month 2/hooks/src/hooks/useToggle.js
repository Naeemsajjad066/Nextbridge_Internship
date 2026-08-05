import  { useState } from 'react'

function useToggle(initialValue=false) {
    const [isOpen,setIsOpen]=useState(initialValue)

    function toggle(){
        setIsOpen(prev=>!prev)
    }
  return (
    {
        isOpen,toggle
    }
  )
}

export default useToggle