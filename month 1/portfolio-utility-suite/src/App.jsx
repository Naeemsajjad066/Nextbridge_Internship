import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ArticlePage from './pages/ArticlePage'
import Utilities from './pages/Utilities'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </>
  )
}
