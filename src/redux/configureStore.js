import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './pokemon/pokemon';

const reducer = combineReducers({
  pokemons: pokemonReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
