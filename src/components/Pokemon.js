import { useEffect, useState } from 'react';
import styles from './Pokemon.module.scss';
import Loading from './Loader';

const Pokemon = ({
  /* eslint-disable-next-line */
  data,
}) => {
  /* eslint-disable-next-line */
  const { url, name } = data;

  const [imageLoaded, setImageLoaded] = useState(false);
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
    <Loading
      className={styles.pokemon}
      loading={!imageLoaded}
      render={() => (
        <>
          {image && <img src={image} alt={name} onLoad={() => setImageLoaded(true)} />}
        </>
      )}
    />
  );
};

export default Pokemon;
