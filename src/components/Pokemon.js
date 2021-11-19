import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pokemon.module.scss';
import Loading from './Loader';
import { getPokemonDetails } from '../api/pokeapi';

const Pokemon = ({
  data,
}) => {
  const { url, name } = data;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const respData = await getPokemonDetails(url);
      setImage(respData.sprites.front_default);
    };
    fetchPokemonDetails();
  }, [url]);

  return (
    <Link className={styles.container} key={name} to={`pokemon/${name}`}>
      <div className={styles.details}>
        <h4>{name[0].toUpperCase() + name.slice(1)}</h4>
      </div>
      <Loading
        className={styles.pokemon}
        loading={!imageLoaded}
        render={() => (
          <>
            {image && <img src={image} alt={name} onLoad={() => setImageLoaded(true)} />}
          </>
        )}
      />
    </Link>
  );
};

export default Pokemon;
