"use client";

import { useState } from "react";
import Confetti from "react-confetti-boom";
import { useSetAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { pokedexAtom } from "@/store/pokedex";
import { CardPokemon } from "@/types";

type Props = {
  pokemon: CardPokemon;
};

export default function CatchButton({
  pokemon,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const [isCatching, setIsCatching] = useState(false);
  const setPokedex = useSetAtom(pokedexAtom);
  const catchPokemon = () => {
    setPokedex((value) => [...value, { ...pokemon }]);
    setIsCatching(true);
  };
  return (
    <div {...props}>
      {isCatching && <Confetti mode="boom" particleCount={200} />}
      <Button onClick={catchPokemon}>Catch</Button>
    </div>
  );
}
