import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { filterAtom, sortAtom } from "@/store/app";
import { CardPokemon } from "@/types";

const initialState: Array<CardPokemon & { catched: number }> = [];

export const pokedexAtom = atomWithStorage("pokedex", initialState, undefined, {
  getOnInit: true,
});

export const hasPokemonAtom = atom((get) => (value: number) => {
  const pokemons = get(pokedexAtom);
  return pokemons.find(({ id }) => id === value);
});

export const filteredPokedexAtom = atom((get) => {
  const filter = get(filterAtom);
  const data = get(pokedexAtom);
  const filteredData = data.filter(({ name }) => {
    return name.includes(filter);
  });
  return { filteredData, totals: data.length };
});

export const sortedPokedexAtom = atom((get) => {
  const sort = get(sortAtom);
  const { filteredData: data } = get(filteredPokedexAtom);
  let sortedData = data.sort((a, b) => a.id - b.id);
  if (sort === "asc")
    sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "desc")
    sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
  return { sortedData };
});
