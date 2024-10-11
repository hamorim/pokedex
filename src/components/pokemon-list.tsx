'use client'

import { useHydrateAtoms } from 'jotai/utils';
import { Pokemon } from '@/types';
import { pokemonsAtom, sortedPokemonsAtom } from '@/store/pokemons';
import { PokemonCard } from '@/components/pokemon-card';
import { useAtom } from 'jotai';

type Props = {
  data: Pokemon[];
}

export default function PokemonList({ data }: Props) {
  useHydrateAtoms([
    [pokemonsAtom, data],
  ]);
  const [sortedPokemons] = useAtom(sortedPokemonsAtom)
  return (
    <>
      {
        sortedPokemons.sortedData.map((pokemon) => (
          <PokemonCard.Root key={pokemon.id} pokemon={pokemon}>
            <PokemonCard.Captured pokemon={pokemon} />
          </PokemonCard.Root>
        ))
      }
    </>
  )
}
