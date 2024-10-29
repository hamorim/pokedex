"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hasPokemonAtom, pokedexAtom } from "@/store/pokedex";
import { CardPokemon } from "@/types";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";

type Props = {
  pokemon: CardPokemon;
};

export default function ReleaseButton({
  pokemon,
  className,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const setPokedex = useSetAtom(pokedexAtom);
  const [hasPokemon] = useAtom(hasPokemonAtom);
  const pokedexPokemon = hasPokemon(pokemon.id);
  const [dialogOpened, setDialogOpened] = useState(false);

  const releasePokemon = () => {
    setPokedex((value) => [...value.filter(({ id }) => id !== pokemon.id)]);
  };

  if (!pokedexPokemon) return null

  return (
    <div className={cn("w-full", className)} {...props}>
      <AlertDialog open={dialogOpened} onOpenChange={() => setDialogOpened((value) => !value)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your Pokemon from the Pokedex.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button className="px-4 py-6 text-lg transition ease-in" variant={"outline"}>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={() => releasePokemon()} className="px-4 py-6 text-lg transition ease-in" variant={"destructive"}>Confirm</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button onClick={() => setDialogOpened(true)} className="px-4 py-6 text-lg transition ease-in" variant={"destructive"}>Release</Button>
    </div>
  );
}