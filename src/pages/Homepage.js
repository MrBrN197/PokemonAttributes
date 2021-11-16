/* eslint-disable */

import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
      const data = await resp.json();
      setPokemons(data.results);
    };
    getPokemon();
  }, []);

  return (
    <div>
      {pokemons.map((data) => (
        <Pokemon data={data}/>
      ))}
    </div>
  );
};

export default Homepage;
