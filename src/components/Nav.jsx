import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { toggleDarkMode } from '../stores/slices/userSlice'


function Nav() {

  const cartItems = useSelector((state) => state.shop.userCart).length

  const isDark = useSelector((state) => state.user.darkMode)
  const currentUser = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: isDark ? '#343434' : 'orange',
  }

  const darkModeText = {
    color: isDark ? '#959595' : 'black',
    margin: "1.5rem 1rem"
  }

  const navButtons = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.5rem',
    backgroundColor: 'transparent'
  }

  const navLinkWrapper = {
    display: 'flex',
    rowGap: '1rem',
  }

  return (
    <nav style={navStyle}>
      <NavLink to={'/'} end>
        <h1 style={darkModeText}>EZ Shopping</h1>
      </NavLink>
      <div style={navLinkWrapper}>

        <NavLink to={'/user'} end>
          <button style={{ ...darkModeText, ...navButtons }}>
            <span className="material-icons">face</span>
            <p>{currentUser.firstName ? currentUser.firstName + ' ' + currentUser.lastName : 'User'}</p>
          </button>
        </NavLink>


        <NavLink to={'/cart'} end >
          <button style={{ ...darkModeText, ...navButtons }}>
            <span className="material-icons">
              shopping_cart
            </span>
            {
              cartItems === 0 && <p>Cart </p>
            }
            {
              cartItems > 0 && <p> <b>{cartItems}</b> {cartItems > 1 ? 'items' : 'item'} </p>
            }
          </button>
        </NavLink>

        <button onClick={() => dispatch(toggleDarkMode())
        } style={{ ...darkModeText, ...navButtons }}>
          <span className="material-icons">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
          <p>
            {isDark ? "Light mode" : "Dark mode"}
          </p>
        </button>
      </div>
    </nav>
  )
}

export default Nav