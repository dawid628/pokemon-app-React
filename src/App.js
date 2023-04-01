import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; //, Routes, Route, useLocation
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import Footer from './components/Footer';
import Pokemon from './components/Pokemon';
import Join from './components/Join';


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
        <HomeWrapper/>
        <Routes>
            <Route path='/' element={<Pokemons pokemons={pokemon} count={count} setCount={setCount}/>}></Route>
            <Route path='/pokemon' element={<Pokemon />}>
              <Route path=':pokemonId' element={<Pokemon />} />
            </Route>
        </Routes>
      </Router>
      <Join/>
      <Footer/>
    </>
  );
}


function HomeWrapper() {
  const location = useLocation();
  return location.pathname === '/' && <Home/>;
}

export default App;
