import './App.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  const pokemonRef = useRef(null);
  const homeRef = useRef(null);
  const joinRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get(URL + '?limit=' + count + '&offset=0')
    .then(response => {
      console.log('changed')
      setPokemon(response.data.results)
    })
  }, [count]);

  return (
    <>
      <Router>
        <Navbar pokemonRef={pokemonRef} joinRef={joinRef} homeRef={homeRef}/>
        <HomeWrapper homeRef={homeRef}/>
        <Routes>
            <Route path='/' element={<Pokemons pokemons={pokemon} count={count} setCount={setCount} pokemonRef={pokemonRef}/>}></Route>
            <Route path='/pokemon' element={<Pokemon />}>
              <Route path=':pokemonId' element={<Pokemon />} />
            </Route>
        </Routes>
        <JoinWrapper joinRef={joinRef} />
      </Router>
      <Footer/>
    </>
  );
}


function HomeWrapper({ homeRef }) {
  const location = useLocation();
  return location.pathname === '/' && <Home homeRef={homeRef}/>;
}

function JoinWrapper({ joinRef }) {
  const location = useLocation();
  return location.pathname === '/' && <Join joinRef={joinRef}/>;
}

export default App;
