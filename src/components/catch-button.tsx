"use client";

import PokeballAsset from "@/assets/pokeball.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hasPokemonAtom, pokedexAtom } from "@/store/pokedex";
import { CardPokemon } from "@/types";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import Confetti from "react-confetti-boom";

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
  const pokedexPokemon = hasPokemon(pokemon.id);
  const catchedOn = pokedexPokemon ? new Date(pokedexPokemon.catched).toLocaleString('en-US', {
    dateStyle: 'full',
  }) : ''

  const catchPokemon = () => {
    setPokedex((value) => [...value, { ...pokemon, catched: Date.now() }]);
    setIsCatching(true);
  };

  return (
    <div className={cn("", className)} {...props}>
      {isCatching && <Confetti mode="boom" particleCount={200} />}
      {!pokedexPokemon && <Button onClick={catchPokemon} className="px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600 transition ease-in">Catch</Button>}
      {pokedexPokemon && (
        <>
          <Image src={PokeballAsset} width={36} height={36} alt="Pokeball" className="inline-block mr-2" />
          <span className="w-full text-slate-600/90 dark:text-slate-300 text-sm">{`on ${catchedOn}`}</span>
        </>
      )}
    </div>
  );
}
