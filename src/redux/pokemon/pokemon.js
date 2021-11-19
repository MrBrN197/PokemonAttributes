import { getPokemonList } from '../../api/pokeapi';

export const GET_POKEMONS = 'pokemonBrowser/pokemon/GET_POKEMONS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload;
    default:
      return state;
  }
};

export const getPokemons = () => async (dispatch) => {
  const data = await getPokemonList();
  dispatch({
    type: GET_POKEMONS,
    payload: data?.results || [],
  });
};

export default reducer;
