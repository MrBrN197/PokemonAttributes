import { useEffect, useState } from 'react';

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
      // console.log(respData.sprites.front_default);
      setImage(respData.sprites.front_default);
    };
    fetchPokemonDetails();
  }, [url]);

  return (
    <>
      {image && <img src={image} alt="" />}
    </>
  );
};

export default Pokemon;
