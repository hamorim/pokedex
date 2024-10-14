import dynamic from "next/dynamic";
import { getPokemons } from "@/services/pokeapi";
import PokemonList from "@/components/pokemon-list";
const SortButton = dynamic(() => import("@/components/button/sort"), {
  ssr: false
});

export default async function Page() {
  const { pokemons } = await getPokemons();

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between w-full mb-6">
        <h1 className="text-2xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
          Pokémons
        </h1>
        <SortButton />
      </div>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start w-full">
        <PokemonList data={pokemons} />
      </div>
    </div>
  );
}
