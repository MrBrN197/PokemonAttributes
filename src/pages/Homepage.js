/* eslint-disable */

import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import styles from './Homepage.module.css';

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
      const data = await resp.json();
      setPokemons(data.results);
    };
    getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      {pokemons.map((data) => (
        <Pokemon data={data}/>
      ))}
    </div>
  );
};

export default Homepage;
