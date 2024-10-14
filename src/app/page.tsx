import { getPokemons } from "@/services/pokeapi";
import PokemonList from "@/components/pokemon-list";
import Filters from "@/components/filters";

export default async function Page() {
  const { pokemons } = await getPokemons();

  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-between w-full mb-6">
        <h1 className="text-2xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
          Pokémons
        </h1>
        <Filters />
      </div>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        <PokemonList data={pokemons} />
      </div>
    </div>
  );
}
