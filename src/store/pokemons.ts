import { atom } from "jotai";
import { Pokemon } from "@/types";

const initialState: Pokemon[] = [];

export const pokemonsAtom = atom(initialState);
export const countAtom = atom(0);
export const sortAtom = atom<"default" | "asc" | "desc">("default");
export const sortedPokemonsAtom = atom((get) => {
  const sort = get(sortAtom);
  const data = get(pokemonsAtom);
  let sortedData = data.sort((a, b) => a.id - b.id);
  if (sort === "asc")
    sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "desc")
    sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
  return { sortedData: sortedData };
});
