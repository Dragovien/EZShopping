import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import User from './pages/UserPage'
import Cart from './pages/CartPage'
import Products from './pages/ProductsPage'
import './index.css'
import { Provider } from 'react-redux'
import store from './stores/globalStore'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Products/>
      </Router>
    </Provider>
  </React.StrictMode>,
)
