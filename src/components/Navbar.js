import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ pokemonRef, joinRef, homeRef }) => {

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePokemonClick = () => {
    pokemonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinClick = () => {
    joinRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/pokemon-brand.png"} alt="brand"></img>
        </Link>
      </div>
      <div className="navbar-items">
      <Link style={{ textDecoration: "none" }} onClick={handleHomeClick}>
          <h2>Home</h2>
        </Link>
        <Link style={{ textDecoration: "none" }} onClick={handlePokemonClick}>
          <h2>Pokemon</h2>
        </Link>
        <Link style={{ textDecoration: "none" }} onClick={handleJoinClick}>
          <h2>Join</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
