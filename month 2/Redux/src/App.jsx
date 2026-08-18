import { Route, Routes } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateAsyncThunk from './pages/CreateAsyncThunk'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/createAsyncThunk' element={<CreateAsyncThunk />} />
      </Routes>
    </>
  )
}

export default App
