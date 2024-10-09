import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
          <App />
    </RouterProvider>
  </StrictMode>,
)
