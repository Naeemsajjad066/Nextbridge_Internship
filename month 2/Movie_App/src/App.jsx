import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='movie/:id' element={<MovieDetails />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
