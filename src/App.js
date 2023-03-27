import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=281&offset=281'

function App() {
  
  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    axios.get(URL)
    .then(response => {
      setPokemon(response.data.results)
      console.log(pokemon)
    })
  }, []);

  return (
    <>
    
      {/* {
        pokemon.map((poke, key) => {
          return (<p key={key}>{poke.name}</p>)
          })
      } */}
    </>
  );
}

export default App;
