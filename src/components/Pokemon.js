import { useEffect, useState } from 'react';
import styles from './Pokemon.module.scss';
import Loading from './Loader';

const Pokemon = ({
  /* eslint-disable-next-line */
  data,
}) => {
  /* eslint-disable-next-line */
  const { url } = data;

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
    <Loading className={styles.pokemon} loading={!image}>
      <div>
        {image && <img src={image} alt="" />}
      </div>
    </Loading>
  );
};

export default Pokemon;
