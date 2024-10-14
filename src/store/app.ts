import { atom } from "jotai";

export const sortAtom = atom<"default" | "asc" | "desc">("default");
export const filterAtom = atom("");
