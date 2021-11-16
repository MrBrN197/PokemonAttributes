/* eslint-disable */
import { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Homepage = () => {
  // const [pokemons, setPokemons] = useState([]);
  const pokemons = useSelector((state) => state.pokemons);

  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
  //     const data = await resp.json();
  //     setPokemons(data.results);
  //   };
  //   getPokemon();
  // }, []);

  return (
    <div className={styles.container}>
      {pokemons.map((data) => (
        <Link to={`pokemon/${data.name}`}>
          <Pokemon data={data}/>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
