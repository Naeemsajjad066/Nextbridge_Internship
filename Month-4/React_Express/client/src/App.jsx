import { useEffect } from "react"
import { useState } from "react"
import api from "./Services/api"

function App() {
const [message,setMessage]=useState("loading...")

  useEffect(()=>{
    api.get('/api/health').then((response)=>setMessage(response.data.message)).
    catch((error)=>{
      console.error(error)
      setMessage("Failed to connect with backend")
    })
  },[])
  return (
    <div><h1>{message}</h1></div>
  )
}

export default App