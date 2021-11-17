import { useEffect, useState } from 'react';
import styles from './Pokemon.module.scss';

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
    <div className={styles.pokemon}>
      {image && <img src={image} alt="" />}
    </div>
  );
};

export default Pokemon;
