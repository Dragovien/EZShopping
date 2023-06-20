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

        <NavLink to={'/user'} end>
          <button>
            User
          </button>
        </NavLink>


        <NavLink to={'/cart'} end >
          <button>
            Cart
          </button>
        </NavLink>

        <button onClick={() => { document.body.classList.toggle('dark-mode') }}>Light Mode</button>
      </div>
    </nav>
  )
}

export default Nav