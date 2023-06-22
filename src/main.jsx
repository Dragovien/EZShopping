import React from 'react'
import ReactDOM from 'react-dom/client'
import User from './pages/UserPage'
import Cart from './pages/CartPage'
import Nav from './components/Nav'
import Products from './pages/ProductsPage'
import './index.css'
import { Provider } from 'react-redux'
import store from './stores/globalStore'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

if(JSON.parse(localStorage.getItem('darkMode'))) {
  document.body.classList.toggle('dark-mode')
} 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
