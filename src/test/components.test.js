import React from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getPokemonList, getPokemonDetails, getPokemonByName } from '../api/pokeapi';
import Pokemon from '../components/Pokemon';
import Homepage from '../pages/Homepage';
import store from '../redux/configureStore';
import { getPokemons } from '../redux/pokemon/pokemon';

jest.mock('../api/pokeapi');

const apiMockPokemonList = {
  results: [
    {
      name: 'Pikachu',
    },
    {
      name: 'Bulbasaur',
    },
    {
      name: 'Raichu',
    },
  ],
};

const apiMockPokemonDetail = {
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
  },
};

describe('Components Testing', () => {
  beforeEach(() => {
    getPokemonList.mockResolvedValue(apiMockPokemonList);
    getPokemonDetails.mockResolvedValue(apiMockPokemonDetail);
    getPokemonByName.mockImplementation(jest.requireActual('../api/pokeapi').getPokemonByName);
    store.dispatch(getPokemons());
  });

  it('Test <Pokemon /> should render a pokemon\'s data correctly', async () => {
    await act(async () => render(
      <Router>
        <Switch>
          <Route path="/">
            <Pokemon data={{ name: 'pikachu', url: undefined }} />
          </Route>
        </Switch>
      </Router>,
    ));
    await waitFor(() => expect(screen.getByText('Pikachu')).toBeInTheDocument());
  });

  it('Test <Homepage /> should render all fetched Pokemons correctly', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );
    await waitFor(() => expect(screen.getByText('Pikachu')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Bulbasaur')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Raichu')).toBeInTheDocument());
  });
});
