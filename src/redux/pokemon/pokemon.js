const GET_POKEMONS = 'pokemonBrowser/pokemon/GET_POKEMONS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload;
    default:
      return state;
  }
};

export const getPokemons = () => async (dispatch) => {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
  const data = await resp.json();
  dispatch({
    type: GET_POKEMONS,
    payload: data.results,
  });
};

export default reducer;
