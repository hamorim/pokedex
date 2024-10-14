import { atom } from "jotai";

export const sortAtom = atom<"default" | "asc" | "desc">("default");
export const layoutAtom = atom<"table" | "grid">("grid");
export const filterAtom = atom("");
