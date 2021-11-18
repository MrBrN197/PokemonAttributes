/* eslint-disable */
import Pokemon from '../components/Pokemon';
import styles from './Homepage.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Homepage = () => {
  let pokemons = useSelector((state) => state.pokemons);

  const location  = useLocation();
  console.log(location)
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  pokemons = pokemons.filter( p => p.name.includes(search))

  return (
    <div className={styles.container}>
      {pokemons.map((data) => (
        <Link key={data.name} to={`pokemon/${data.name}`}>
          <Pokemon data={data}/>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
