'use client'

import { useSearchParams } from "next/navigation";
import { decode } from "@/lib/hash";
import { useEffect, useState } from "react";
import { getPokemons } from "@/services/pokeapi";
import { Pokemon } from "@/types";
import { PokemonCard } from "@/components/pokemon-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  const searchParams = useSearchParams()
  const hash = searchParams.get('code')
  const sharedPokemons = decode(hash!);
  const [data, setData] = useState<Pokemon[]>([])

  useEffect(() => {
    if (sharedPokemons.length && !data.length) {
      (async () => {
        const { pokemons } = await getPokemons();
        const filteredPokemons = pokemons.filter((pokemon) => sharedPokemons.includes(pokemon.id))
        setData(filteredPokemons)
      })()
    }
  }, [sharedPokemons, data])

  if (!data.length) return (<div className="px-4 py-8 md:p-8">
    <Skeleton className="h-12 rounded-xl mb-8" />
    <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
      <Skeleton className="h-[300px] w-[272px] rounded-xl" />
      <Skeleton className="h-[300px] w-[272px] rounded-xl" />
      <Skeleton className="h-[300px] w-[272px] rounded-xl" />
      <Skeleton className="h-[300px] w-[272px] rounded-xl" />
    </div>
  </div>)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
      Hey Trainer! 👋 <span className="text-slate-500">Here’s My Collection of Captured Pokémon!</span>
        </h1>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {data.map((pokemon) => (
          <PokemonCard.Root key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
