import reducer, { GET_POKEMONS } from './pokemon';

describe('test the reducer function for the store', () => {
  test(' reducer returns new state ', () => {
    const newState = [1, 2, 3];
    const result = reducer(undefined, { type: GET_POKEMONS, payload: newState });
    expect(result[0]).toBe(1);
    expect(result[1]).toBe(2);
    expect(result[2]).toBe(3);
  });

  test(' reducer returns empty array ', () => {
    const result = reducer(undefined, { type: undefined, payload: undefined });
    expect(result).toEqual([]);
  });
});
