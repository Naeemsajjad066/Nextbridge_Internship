import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './store'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 3000,
            style: {
              background: '#0f172a',
              color: '#ffffff',
              borderRadius: '0.75rem',
              fontSize: '0.875rem',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4f46e5',
                secondary: '#ffffff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
