import { usePokemons } from "@/hooks/usePokemons";

import PokemonCard from "@/components/pokemon-card";

export default async function Home() {
  const { pokemons } = await usePokemons();

  return (
    <div className="flex items-center justify-center flex-wrap gap-6">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
}
