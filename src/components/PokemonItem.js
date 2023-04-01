import './styles/PokemonItem.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokemon from './Pokemon'

const PokemonItem = ({ item }) => {

  const [picture, setPicture] = useState('')
  const [number, setNumber] = useState(0)

  const getDetails = url => {
    axios.get(url)
    .then(response => {
        setPicture(response.data.sprites.other['official-artwork'].front_default)
        setNumber(response.data.id)
    })
  }
    
  useEffect(() => {
    getDetails(item.url)
  }, [])
  

  return (
    <Link style={{textDecoration: 'none'}} to={`/pokemon/${number}`} element={<Pokemon/>} >
    <div className='pokemon-card'>
        <img className='picture' src={picture} alt='pokemon'/>
        <h3 className='number'>#{makeDigits(number)}</h3>
        <span className='name'>{Capitalize(item.name)}</span>
    </div>
    </Link>
  )
}

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const makeDigits = number => {
  number = number.toString()
  var base = "0000"
  var digited = base.substring(0, base.length - number.length) + number
  return digited
}

export default PokemonItem