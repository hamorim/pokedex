"use client";

import { useAtomValue } from "jotai";
import { PokemonCard } from "@/components/pokemon-card";
import { pokedexAtom } from "@/store/pokedex";

const EmptyDex = () => {
  return (
    <div className="w-full flex items-center justify-center rounded-lg border border-dashed shadow-sm bg-muted/60">
      <div className="flex flex-col items-center gap-2 text-center p-48">
        <h3 className="text-2xl font-bold tracking-tight">
          You haven&apos;t captured any Pokémon
        </h3>
        <p className="text-sm text-muted-foreground">
          Don&apos;t be shy, start capturing some Pokémons!
        </p>
      </div>
    </div>
  );
};

export default function Pokedex() {
  const pokedex = useAtomValue(pokedexAtom);
  if (!pokedex.length) return <EmptyDex />;
  return (
    <>
      {pokedex.map((pokemon) => (
        <PokemonCard.Root key={pokemon.url} pokemon={pokemon} />
      ))}
    </>
  );
}
