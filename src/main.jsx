import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Pages/Routes/Routes.jsx'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
