'use client'

import Image from "next/image";
import PokeballAsset from "@/assets/pokeball.svg";
import { useAtom } from "jotai";
import { hasPokemonAtom } from "@/store/pokedex";

export default function Pokeball({
  pokemonId,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { pokemonId: number }) {
  const [hasPokemon] = useAtom(hasPokemonAtom);
  if (!hasPokemon(pokemonId)) return null;
  return (
    <Image
      src={PokeballAsset}
      width={36}
      height={36}
      alt="Pokeball"
      {...props}
    />
  );
}
