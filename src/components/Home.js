import React from 'react'
import './styles/Home.css'

const Home = ({ homeRef }) => {
  return (
    <div ref={homeRef} className='home'>
      <div className='home-header'>
          <h2>PokéSphere<img src={process.env.PUBLIC_URL + '/images/pokeball.png'} alt='pokeball'/></h2>
          <p>Gotta catch 'em all!</p>
        </div>
    </div>
  )
}

export default Home
