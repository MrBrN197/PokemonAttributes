import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';
import Loading from '../components/Loader';
import { getPokemonByName } from '../api/pokeapi';

const Details = () => {
  const { name } = useParams();
  const [details, setDetails] = useState({ loading: true });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const respData = await getPokemonByName(name);
        setDetails({ loading: false, data: respData });
      } catch {
        setDetails({ loading: false, error: true });
      }
    };
    fetchPokemonDetails();
  }, [name]);

  if (details.error) return <h3 style={{ color: 'black' }}>Pokemon Not Found</h3>;
  // if (details.loading) return <h3 style={{ color: 'black' }}>Loading...</h3>;

  return (
    <div className={styles.container}>
      <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
      <Loading
        className={styles.image}
        loading={!imageLoaded}
        render={() => (
          <>
            {!details.loading && (
            <img
              src={details?.data?.sprites?.front_default}
              onLoad={() => setImageLoaded(true)}
              alt={name}
            />
            )}
          </>
        )}
      />
      <ul className={styles.types}>
        {!details.loading && details.data.types.map((type) => (
          <li key={type.slot}>
            <span>{type.type.name}</span>
          </li>
        ))}
      </ul>
      <div className={styles.attrs}>
        <p>
          Weight:
          {' '}
          {!details.loading && details.data.weight}
        </p>
        <p>
          Experience:
          {' '}
          {!details.loading && details.data.base_experience}
        </p>
      </div>
      <ul className={styles.stats}>
        <span className={styles.heading}>Stats</span>
        <div>
          {!details.loading && details.data.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}</span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Details;
