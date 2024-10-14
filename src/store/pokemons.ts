import { atom } from "jotai";
import { filterAtom, sortAtom } from "@/store/app";
import { Pokemon } from "@/types";

const initialState: Pokemon[] = [];

export const pokemonsAtom = atom(initialState);

export const filteredPokemonsAtom = atom((get) => {
  const filter = get(filterAtom);
  const data = get(pokemonsAtom);
  const filteredData = data.filter(({ name }) => {
    return name.includes(filter);
  });
  return { filteredData };
});

export const sortedPokemonsAtom = atom((get) => {
  const sort = get(sortAtom);
  const { filteredData: data } = get(filteredPokemonsAtom);
  let sortedData = data.sort((a, b) => a.id - b.id);
  if (sort === "asc")
    sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "desc")
    sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
  return { sortedData };
});
