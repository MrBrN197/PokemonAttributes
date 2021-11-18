import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pokemon from '../components/Pokemon';
import styles from './Homepage.module.scss';

const Homepage = () => {
  let pokemons = useSelector((state) => state.pokemons);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  pokemons = pokemons.filter((p) => p.name.includes(search));
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(search);

  const handleSearch = (e) => {
    history.push(e.target.value ? `?search=${e.target.value}` : '');
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input onChange={handleSearch} type="text" value={searchValue} />
      <div className={styles.container}>
        {pokemons.map((data) => (
          <Link key={data.name} to={`pokemon/${data.name}`}>
            <Pokemon data={data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Homepage;
