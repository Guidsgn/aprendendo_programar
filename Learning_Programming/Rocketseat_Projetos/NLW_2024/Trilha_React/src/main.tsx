import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

// Componentes & Propiedades

// Componente podem ser comparados a elementos dentro do HTML

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
