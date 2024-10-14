'use client'

import Image from "next/image";
import { useAtom } from "jotai";
import { hasPokemonAtom } from "@/store/pokedex";
import PokeballAsset from "@/assets/pokeball.svg";

type Props = {
  pokemonId: number
} & React.HTMLAttributes<HTMLDivElement>

export default function Pokeball({ pokemonId, ...props }: Props) {
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
