import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import Pokemon from '../components/Pokemon';
import styles from './Homepage.module.scss';

const Homepage = () => {
  let pokemons = useSelector((state) => state.pokemons);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  pokemons = pokemons.filter((p) => p.name.includes(search.toLowerCase()));
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(search);

  const handleSearch = (e) => {
    history.push(e.target.value ? `?search=${e.target.value}` : '');
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={styles.searchBox}>
        <FiSearch />
        <input onChange={handleSearch} type="text" value={searchValue} />
      </div>
      <div>
        <h3 className={styles.heading}>Pokemon A-Z</h3>
        <div className={styles.container}>
          {pokemons.map((data) => (
            <Pokemon key={data.name} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
