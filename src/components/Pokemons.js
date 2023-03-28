import React from 'react'
import './styles/Pokemons.css'
import Pokemon from './Pokemon'

const Pokemons = ({ pokemons, count, setCount }) => {

    return (
        <div className='pokemons-container'>
            <div className='pokemons-header'>
                <p>POKÉMON</p>
            </div>
            {
                pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} item={pokemon}/>
                    )
                })
            }
            <button onClick={() => {setCount(count+25)}}>Load more</button>
        </div>
    )
}

export default Pokemons