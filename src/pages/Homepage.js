/* eslint-disable */
import Pokemon from '../components/Pokemon';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const pokemons = useSelector((state) => state.pokemons);

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
