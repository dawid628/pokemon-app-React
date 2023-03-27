import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
      <Router>
        <Navbar/>
        <Home/>
        {/* Pokemons */}
      </Router>
    </>
  );
}

export default App;
