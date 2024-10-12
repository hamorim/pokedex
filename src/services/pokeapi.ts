import { Pokemon } from "@/types";

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

export async function getPokemon(id: string): Promise<{ pokemon: Pokemon }> {
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
    types: data.types.map((item: { type: { name: string } }) => item.type.name),
  } as Pokemon;
  return { pokemon };
}
