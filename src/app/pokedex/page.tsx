"use client";

import PokemonCard from "@/components/pokemon-card";
import { pokedexAtom } from "@/store/pokedex";
import { useAtomValue } from "jotai";

export default function Page() {
  const pokedex = useAtomValue(pokedexAtom);

  return (
    <div className="flex items-center flex-wrap gap-6">
      {pokedex.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
}
