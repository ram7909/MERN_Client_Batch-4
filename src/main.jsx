import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductState from './context/ProductState.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductState>
    <App />
  </ProductState>,
)
