"use client";

import { useState } from "react";
import Confetti from "react-confetti-boom";
import { useAtom, useSetAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { hasPokemonAtom, pokedexAtom } from "@/store/pokedex";
import { CardPokemon } from "@/types";
import Image from "next/image";
import PokeballAsset from "@/assets/pokeball.svg";
import { cn } from "@/lib/utils";

type Props = {
  pokemon: CardPokemon;
};

export default function CatchButton({
  pokemon,
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const [isCatching, setIsCatching] = useState(false);
  const setPokedex = useSetAtom(pokedexAtom);
  const [hasPokemon] = useAtom(hasPokemonAtom);
  const myPokemon = hasPokemon(pokemon.id);
  const catchedOn = myPokemon ? new Date(myPokemon.catched).toLocaleString('en-US', {
    dateStyle: 'full',
  }) : ''

  const catchPokemon = () => {
    setPokedex((value) => [...value, { ...pokemon, catched: Date.now() }]);
    setIsCatching(true);
  };

  const component = !myPokemon ?
    <Button onClick={catchPokemon}>Catch</Button> :
    <>
      <Image src={PokeballAsset} width={32} height={32} alt="Pokeball" className="inline-block mr-2" />
      <span className="w-full text-slate-600 dark:text-slate-300">{`on ${catchedOn}`}</span>
    </>

  return (
    <div className={cn("w-full", className)} {...props}>
      {isCatching && <Confetti mode="boom" particleCount={200} />}
      {component}
    </div>
  );
}
