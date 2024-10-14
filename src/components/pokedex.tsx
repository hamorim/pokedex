"use client";

import { useAtomValue } from "jotai";
import { PokemonCard } from "@/components/pokemon-card";
import { cn } from "@/lib/utils";
import { filteredPokedexAtom } from "@/store/pokedex";
import { layoutAtom } from "@/store/app";

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
  const layout = useAtomValue(layoutAtom)
  const layoutTable = layout === 'table'
  const layoutGrid = layout === 'grid'

  if (!totals) return <EmptyDex />;
  if (totals && !pokedex.length) return <NoResults />;

  return (
    <section className={
      cn(
        { "flex flex-wrap gap-6 justify-center md:justify-start": layoutGrid },
        { "grid gap-8 grid-rows-2 grid-cols-1": layoutTable }
      )}>
      {pokedex.map((pokemon) => (
        <PokemonCard.Root
          key={pokemon.id}
          pokemon={pokemon}
          cardClassname={
            cn(
              { "flex flex-col items-center": layoutGrid },
              { "flex flex-col md:flex-row items-center md:items-center justify-between": layoutTable })
          } >
          {layoutTable &&
            <h1 className="text-8xl md:text-[160px] text-slate-900/90">
              {`#${pokemon.id.toString().padStart(3, '0')}`}
            </h1>
          }
        </PokemonCard.Root>
      ))}
    </section>
  );
}
