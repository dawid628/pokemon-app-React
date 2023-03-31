import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; //, Routes, Route, useLocation
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import Footer from './components/Footer';


const URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
  
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(25)
  
  useEffect(() => {
    axios.get(URL + '?limit=' + count + '&offset=0')
    .then(response => {
      console.log('changed')
      setPokemon(response.data.results)
    })
  }, [count]);

  return (
    <>
      <Router>
        <Navbar/>
        <Home/>
        <Pokemons pokemons={pokemon} count={count} setCount={setCount}/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
