import { gql, useQuery } from '@apollo/react-hooks';
import { useMemo } from 'react';
import { Pokemon } from './useGetPokemons';

export type PokemonDetails = {
  id: string;
  number: number;
  name: string;
  weight: {
    minimum: number;
    maximum: number;
  };
  height: {
    minimum: number;
    maximum: number;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};

export const GET_POKEMON_DETAILS = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = (pkmnId: string) => {
  console.log('getting details');
  const { data, ...queryRes } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      id: pkmnId,
    },
  });

  const pokemonDetails: PokemonDetails = useMemo(() => data?.pokemon, [data]);

  return {
    pokemonDetails,
    ...queryRes,
  };
};
