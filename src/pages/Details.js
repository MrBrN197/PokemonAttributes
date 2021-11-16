import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <img src={details.data.sprites.front_default} alt={name} />
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
      <ul>
        {details.data.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}
            :
            {' '}
            {stat.base_stat}
          </li>
        ))}
      </ul>
      <ul>
        {details.data.types.map((type) => (
          <li key={type.slot}>
            <span>{type.type.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
