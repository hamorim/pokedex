import { CardPokemon } from "@/types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Pokedex = Array<CardPokemon>;

export const pokedexAtom = atomWithStorage<Pokedex>("pokedex", [], undefined, {
  getOnInit: true,
});

export const isCatchedAtom = atom(
  (get) => (value: number) => {
    const pokemons = get(pokedexAtom);
    return pokemons.find(({id})=> id === value);
  }
);

