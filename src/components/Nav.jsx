import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Nav() {

  const [isDark, setIsDark] = useState(false);

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


  const darkMode = () => {
    document.body.classList.toggle('dark-mode'); setIsDark(!isDark)
  }

  return (
    <nav style={navStyle}>
      <NavLink to={'/'} end>
        <h1 style={darkModeText}>EZ Shopping</h1>
      </NavLink>
      <div style={navLinkWrapper}>

        <NavLink to={'/user'} end>
          <button style={{ ...darkModeText, ...navButtons }}>
            <span class="material-icons">face</span>
            <p>User</p>
          </button>
        </NavLink>


        <NavLink to={'/cart'} end >
          <button style={{ ...darkModeText, ...navButtons }}>
            <span class="material-icons">
              shopping_cart
            </span>
            <p>Cart</p>
          </button>
        </NavLink>

        <button onClick={darkMode} style={{ ...darkModeText, ...navButtons }}>
          <span class="material-icons">
          {isDark ? "dark_mode" : "light_mode"}
          </span>
          <p>
            {isDark ? "Dark mode" : "Light mode"}
          </p>
          </button>
      </div>
    </nav>
  )
}

export default Nav