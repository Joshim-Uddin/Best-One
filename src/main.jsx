import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <Routes />
    </AuthProviders>
  </React.StrictMode>,
)
