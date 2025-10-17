import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Fabiana from './pages/Fabiana.jsx'
import Nicolas from './pages/Nicolas.jsx'
import Plans from './pages/Plans.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/fabiana', element: <Fabiana /> },
  { path: '/nicolas', element: <Nicolas /> },
  { path: '/planes', element: <Plans /> },
  // Fallback to Home
  { path: '*', element: <Home /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
