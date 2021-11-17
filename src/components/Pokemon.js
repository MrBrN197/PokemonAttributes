import { useEffect, useState } from 'react';
import styles from './Pokemon.module.scss';
import Loading from './Loader';

const Pokemon = ({
  /* eslint-disable-next-line */
  data,
}) => {
  /* eslint-disable-next-line */
  const { url, name } = data;

  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const resp = await fetch(url);
      const respData = await resp.json();
      setImage(respData.sprites.front_default);
    };
    fetchPokemonDetails();
  }, [url]);

  return (
    <Loading className={styles.pokemon} loading={!loaded}>
      <div>
        {image && <img src={image} onLoad={() => setLoaded(true)} alt={name} />}
      </div>
    </Loading>
  );
};

export default Pokemon;
