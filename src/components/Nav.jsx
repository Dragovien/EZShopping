import { NavLink } from 'react-router-dom';

function Nav() {

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'orange'
  }

  const navLinkWrapper = {
    display: 'flex',
    rowGap: '1rem',
  }

  return (
    <nav style={navStyle}>
      <NavLink to={'/'} end>
        <h2>EZ Shopping</h2>
      </NavLink>
      <div style={navLinkWrapper}>
        <button>
          <NavLink to={'/user'} end>
            User
          </NavLink>
        </button>
        <button>
          <NavLink to={'/cart'} end >
            Cart
          </NavLink>
        </button>
        <button>Light Mode</button>
      </div>
    </nav>
  )
}

export default Nav