import React, {useState, useEffect} from 'react'
import './styles/Pokemon.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineHeart, AiOutlineColumnHeight } from "react-icons/ai";
import { TbSword, TbSwords, TbShoe, TbWeight } from "react-icons/tb";
import { BiShieldAlt2, BiError } from "react-icons/bi";
import { BsShieldExclamation } from "react-icons/bs";
import Tooltip from './Tooltip';

const getIcon = name => {
  switch(name) 
  {
    case 'hp':
      return <AiOutlineHeart style={{color: 'red'}}/>;
    case 'attack':
      return <TbSword style={{color: '#91b1b8'}}/>;
    case 'defense':
      return <BiShieldAlt2 style={{color: '#7e8780'}}/>;
    case 'special-attack':
      return <TbSwords style={{color: '#078f25'}}/>;
    case 'special-defense':
      return <BsShieldExclamation style={{color: '#078f25'}}/>;
    case 'speed':
      return <TbShoe style={{color: '#7a3e22'}}/>;
    default: return <BiError/>;
  }
}

const Pokemon = (props) => {

  const [pokemon, setPokemon] = useState([])
  
  const params = useParams()
  const URL = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
  
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(URL).then((response) => {
      console.log(response.data)
      setPokemon(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    pokemon && (
    <div className='pokemon-view'>
        {/* <p>{pokemon.name && Capitalize(pokemon.name)}</p> */}    
      <img className='pokemon-picture' src={pokemon.sprites && pokemon.sprites.other['official-artwork'].front_default} alt='pokemon'/>
      <div className='pokemon-stats'>
        <ul>Types:
          {
            pokemon.types && pokemon.types.map(({type}, index) => (
                <li className={type.name} key={index}> {type.name}</li>
            ))
          }
        </ul>
        <ul>Stats:
          {
            pokemon.stats && pokemon.stats.map(({base_stat, stat}, index) => (
              <li key={index}>
                <Tooltip children={stat.name} txt={getIcon(stat.name)}/>
                <span key={index}> {base_stat}</span>
              </li>
            ))
          }
        </ul>
          {
            <ul>Body size:  
              <li ><Tooltip children='height' txt=<AiOutlineColumnHeight/> /> {pokemon.height} ft</li>
              <li><Tooltip children='weight' txt=<TbWeight/> /> {pokemon.weight} lbs</li>
            </ul>
          }
      </div>
    </div>)
  )
}

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default Pokemon