"use client";

import React from "react";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { isCatchedAtom } from "@/store/pokedex";
import PokeballAsset from "@/assets/pokeball.svg";

export default function Pokeball({ id }: { id: number }) {
  const pathname = usePathname();
  const [isCatched] = useAtom(isCatchedAtom);
  const showPokeball = isCatched(id) && pathname !== "/pokedex";
  if (!showPokeball) return null;
  return (
    <Image
      src={PokeballAsset}
      width={36}
      height={36}
      alt="Pokeball"
      className="absolute top-2 right-2"
    />
  );
}
