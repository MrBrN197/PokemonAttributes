import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.scss';

const Details = () => {
  const { name } = useParams();
  const [details, setDetails] = useState({ loading: true });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const respData = await resp.json();
        setDetails({ loading: false, data: respData });
        console.log(respData);
      } catch {
        setDetails({ loading: false, error: true });
      }
    };
    fetchPokemonDetails();
  }, [name]);

  if (details.error) return <h3>Pokemon Not Found</h3>;
  if (details.loading) return <h3>Loading...</h3>;

  return (
    <div className={styles.container}>
      <img src={details.data.sprites.front_default} alt={name} />
      <ul className={styles.types}>
        {details.data.types.map((type) => (
          <li key={type.slot}>
            <span>{type.type.name}</span>
          </li>
        ))}
      </ul>
      <div className={styles.attrs}>
        <p>
          Weight:
          {' '}
          {details.data.weight}
        </p>
        <p>
          Experience:
          {' '}
          {details.data.base_experience}
        </p>
      </div>
      <ul className={styles.stats}>
        {details.data.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}
            :
            {' '}
            {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
