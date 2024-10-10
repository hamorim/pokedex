"use client";

import { useAtom } from "jotai";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { CardPokemon } from "@/types";
import { Card } from "@/components/ui/card";
import { isCatchedAtom } from "@/store/pokedex";
import Pokeball from '@/assets/pokeball.svg'

const MotionCard = motion.create(Card);

type Props = {
  pokemon: CardPokemon;
};

export default function PokemonCard({ pokemon }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCatched] = useAtom(isCatchedAtom);
  const { id, name, url, image } = pokemon;
  const showPokeball = isCatched(id) && pathname !== '/pokedex'; 
  return (
    <MotionCard
      key={url}
      onClick={() => router.push(`/pokemon/${id}`)}
      className="p-8 cursor-pointer flex flex-col items-center relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
    >
      <div className="relative z-10">
        <Image src={image} alt={name} width={215} height={215} className="" />
        <div className="w-[180px] h-[180px] dark:bg-slate-800 bg-slate-200/60 rounded-full absolute inset-0 -z-10"></div>
      </div>
      <h1 className="text-xl capitalize font-medium">{name}</h1>
      {showPokeball ? <Image src={Pokeball} width={36} height={36} alt="Pokeball" className="absolute top-2 right-2"/> : null}
    </MotionCard>
  );
}
