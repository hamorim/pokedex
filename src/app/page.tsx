import { usePokemons } from "@/hooks/usePokemons";
import PokemonList from "@/components/pokemon-list";
import Filters from "@/components/filters";

export default async function Page() {
  const { pokemons } = await usePokemons();

  return (
    <div className="flex flex-col items-start ">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold tracking-tighter mb-6 text-slate-700 dark:text-slate-300">
          Pokémons
        </h1>
        <Filters/>
      </div>
      <div className="flex flex-wrap gap-6">
        <PokemonList data={pokemons}/>
      </div>
    </div>
  );
}
