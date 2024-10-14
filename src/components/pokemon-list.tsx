'use client'

import { useHydrateAtoms } from 'jotai/utils';
import { useAtom } from 'jotai';
import { Pokemon } from '@/types';
import { pokemonsAtom, sortedPokemonsAtom } from '@/store/pokemons';
import { PokemonCard } from '@/components/pokemon-card';
import MessageCard from "@/components/message-card";

const COPY = {
  noResults: {
    title: "We can't find any Pokémon",
    description: "Please try again with a different filter",
  }
}

type Props = {
  data: Pokemon[];
}

export default function PokemonList({ data }: Props) {
  useHydrateAtoms([[pokemonsAtom, data]]);
  const [sortedPokemons] = useAtom(sortedPokemonsAtom)

  if (!sortedPokemons.sortedData.length) return <MessageCard {...COPY.noResults}/>;
  
  return (
    <>
      {
        sortedPokemons.sortedData.map((pokemon) => (
          <PokemonCard.Root key={pokemon.id} pokemon={pokemon} cardClassname="flex flex-col items-center">
            <PokemonCard.Captured pokemon={pokemon} />
          </PokemonCard.Root>
        ))
      }
    </>
  )
}
