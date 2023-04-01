import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="navbar-logo">
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/pokemon-brand.png'} alt="brand"></img>
            </Link>
          </div>
          <div className='navbar-items'>
            <Link style={{textDecoration: 'none'}}>
              <h2>Home</h2>
            </Link>
            <Link style={{textDecoration: 'none'}}>
              <h2>Pokemon</h2>
            </Link>
            <Link style={{textDecoration: 'none'}}>
              <h2>Join</h2>
            </Link>
            {/* QUIZ??? */}
        </div>
      </div>
  )
}

export default Navbar
