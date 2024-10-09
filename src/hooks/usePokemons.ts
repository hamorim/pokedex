import { type Pokemon } from "@/types";

function assestUrl(url: string): string {
  // Match and extract the last number from the URL
  const match = url.match(/\/(\d+)\/$/);
  // If no match is found, return the placeholder URL
  if (!(match && match[1])) return "https://placehold.co/215x215"
  // Pad the number with leading zeroes to ensure 3 digits
  const assestId = match[1].padStart(3, "0")
  // Return the constructed URL for the Pokémon asset
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${assestId}.png`;
}

export async function usePokemons() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
  const response = await fetch(API_URL);
  const data = await response.json();
  const pokemons = data.results.map((item: Pokemon) => ({
    ...item,
    image: assestUrl(item.url),
  }));
  return {pokemons};
}
