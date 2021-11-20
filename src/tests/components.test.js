import React from 'react';
import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { getPokemonList, getPokemonDetails, getPokemonByName } from '../api/pokeapi';
import store from '../redux/configureStore';
import { getPokemons } from '../redux/pokemon/pokemon';
import Pokemon from '../components/Pokemon';
import Homepage from '../pages/Homepage';
import Wrapper from './wrapper';
import NavBar from '../components/Navbar';
import PageNotFound from '../pages/PageNotFound';

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
      <Pokemon data={{ name: 'pikachu', url: undefined }} />,
      { wrapper: Wrapper },
    ));
    await waitFor(() => expect(screen.getByText('Pikachu')).toBeInTheDocument());
  });

  it('Test <Homepage /> should render all fetched Pokemons correctly', async () => {
    render(
      <Homepage />,
      {
        wrapper: Wrapper,
      },
    );
    await waitFor(() => expect(screen.getByText('Pikachu')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Bulbasaur')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Raichu')).toBeInTheDocument());
  });

  test('test <NavBar /> renders correctly', () => {
    render(
      <NavBar />,
      { wrapper: Wrapper },
    );
    expect(screen.getByText('Pokemon metrics')).toBeInTheDocument();
  });

  test('test <PageNotFound /> renders correctly', () => {
    render(
      <PageNotFound />,
      { wrapper: Wrapper },
    );
    expect(screen.getByText('This Page Doesn\'t exist')).toBeInTheDocument();
  });
});
