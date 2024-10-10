import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CardPokemon } from "@/types";

const initialState: Array<CardPokemon> = [];

export const pokedexAtom = atomWithStorage("pokedex", initialState, undefined, {
  getOnInit: true,
});

export const hasPokemonAtom = atom((get) => (value: number) => {
  const pokemons = get(pokedexAtom);
  return pokemons.find(({ id }) => id === value);
});
