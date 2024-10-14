"use client";

import { useAtomValue } from "jotai";
import { PokemonCard } from "@/components/pokemon-card";
import { filteredPokedexAtom } from "@/store/pokedex";

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

const NoResults = () => {
  return (
    <div className="w-full flex items-center justify-center rounded-lg border border-dashed shadow-sm bg-muted/60">
      <div className="flex flex-col items-center gap-2 text-center p-48">
        <h3 className="text-2xl font-bold tracking-tight">
          We can&apos;t find any Pokémon
        </h3>
        <p className="text-sm text-muted-foreground">
          Please try again with a different filter
        </p>
      </div>
    </div>
  );
};

export default function Pokedex() {
  const { filteredData: pokedex, totals } = useAtomValue(filteredPokedexAtom);
  if (!totals) return <EmptyDex />;
  if (totals && !pokedex.length) return <NoResults />;
  return (
    <>
      {pokedex.map((pokemon) => (
        <PokemonCard.Root key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
}
