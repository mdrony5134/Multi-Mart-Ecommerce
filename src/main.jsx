import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductProvider.jsx'
import { FilterProductProvider } from './context/FilterProductProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProductProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FilterProductProvider>
    </ProductProvider>
  </React.StrictMode>,
)
