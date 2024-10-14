"use client";

import Image from "next/image";
import Confetti from "react-confetti-boom";
import { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { cn } from "@/lib/utils";
import { CardPokemon } from "@/types";
import { hasPokemonAtom, pokedexAtom } from "@/store/pokedex";
import { Button } from "@/components/ui/button";
import PokeballAsset from "@/assets/pokeball.svg";

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
    <Button onClick={catchPokemon} className="px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600 transition ease-in">Catch</Button> :
    <>
      <Image src={PokeballAsset} width={42} height={42} alt="Pokeball" className="inline-block mr-2" />
      <span className="w-full text-slate-600/90 dark:text-slate-300">{`on ${catchedOn}`}</span>
    </>

  return (
    <div className={cn("w-full", className)} {...props}>
      {isCatching && <Confetti mode="boom" particleCount={200} />}
      {component}
    </div>
  );
}
