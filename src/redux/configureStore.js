import { createStore, combineReducers } from 'redux';
import pokemonReducer from './pokemon/pokemon';

const reducer = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(reducer);
export default store;
