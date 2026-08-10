import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import AllMovies from './components/AllMovies'
import Popular from './components/Popular'
import MovieDetail from './components/MovieDetail'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />}>
          <Route index element={<AllMovies />} />
          <Route path='all' element={<AllMovies />} />
          <Route path='popular' element={<Popular />} />
        </Route>
        <Route path='movies/:id' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
