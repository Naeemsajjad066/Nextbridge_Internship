import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './components/Layout'
import Cart from './pages/Cart'
import { lazy, Suspense } from 'react'
const Checkout = lazy(() => import('./pages/Checkout'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/login' element={<Login />} />

        {/* Protected + Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route
              path='/checkout'
              element={
                <Suspense fallback={<p>Loading checkout...</p>}>
                  <Checkout />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
