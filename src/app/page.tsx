import { usePokemons } from "@/hooks/usePokemons";
import { PokemonCard } from "@/components/pokemon-card";

export default async function Page() {
  const { pokemons } = await usePokemons();

  return (
    <div className="flex items-center flex-wrap gap-6">
      {pokemons.map((pokemon) => (
        <PokemonCard.Root key={pokemon.id} pokemon={pokemon}>
          <PokemonCard.Captured pokemon={pokemon}/>
        </PokemonCard.Root>
      ))}
    </div>
  );
}
