"use client";

import { useAtomValue } from "jotai";
import { cn } from "@/lib/utils";
import { filteredPokedexAtom } from "@/store/pokedex";
import { layoutAtom } from "@/store/app";
import { PokemonCard } from "@/components/pokemon-card";
import MessageCard from "@/components/message-card";

const COPY = {
  empty: {
    title: "You haven't captured any Pokémon",
    description: "Don't be shy, start capturing some Pokémons!",
  },
  noResults: {
    title: "We can't find any Pokémon",
    description: "Please try again with a different filter",
  }
}

const pokemonNumber = (id: number) => `#${id.toString().padStart(3, '0')}`

export default function Pokedex() {
  const { filteredData: pokedex, totals } = useAtomValue(filteredPokedexAtom);
  const layout = useAtomValue(layoutAtom)
  const layoutTable = layout === 'table'
  const layoutGrid = layout === 'grid'

  if (!totals) return <MessageCard {...COPY.empty} />;
  if (totals && !pokedex.length) return <MessageCard {...COPY.noResults}/>;

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
            <h1 className="text-8xl md:text-[160px] dark:text-slate-900/90 text-slate-300/60">
              {pokemonNumber(pokemon.id)}
            </h1>
          }
        </PokemonCard.Root>
      ))}
    </section>
  );
}
