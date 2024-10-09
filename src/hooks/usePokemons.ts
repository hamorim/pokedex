import { type Pokemon } from "@/types";

const assestMap = new Map();

function assestUrl(url: string): string {
  if (assestMap.has(url)) return assestMap.get(url);
  // Match and extract the last number from the URL
  const match = url.match(/\/(\d+)\/$/);
  // If no match is found, return the placeholder URL
  if (!(match && match[1])) return "https://placehold.co/215x215";
  // Pad the number with leading zeroes to ensure 3 digits
  const assestId = match[1].padStart(3, "0");
  // Constructed URL for the Pokémon asset
  const assestUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${assestId}.png`;
  // Store URL for the Pokémon asset
  assestMap.set(url, assestUrl);
  // Return URL for the Pokémon asset
  return assestUrl;
}

export async function usePokemons(): Promise<{ pokemons: Pokemon[] }> {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const response = await fetch(API_URL);
  const data = await response.json();
  const pokemons = data.results.map((item: Pokemon, index: number) => ({
    ...item,
    image: assestUrl(item.url),
    id: index + 1,
  }));
  return { pokemons };
}

export async function usePokemon(id: string): Promise<{ pokemon: Pokemon }> {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const response = await fetch(API_URL);
  const data = await response.json();
  const pokemon = {
    image: assestUrl(API_URL),
    name: data.name,
    id: data.id,
    stats: data.stats.map(
      (stat: { base_stat: number; stat: { name: string } }) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })
    ),
    types: data.types.map((item: any) => item.type.name)
  } as Pokemon;
  return { pokemon };
}

export async function useSpecie(id: string): Promise<{ about: string }> {
  const API_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const response = await fetch(API_URL);
  const data = await response.json();
  const result = data.flavor_text_entries.find((data: any)=> data.language.name === 'en' && data.version.name === 'red')
  return { about: result.flavor_text };
}
