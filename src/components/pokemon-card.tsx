"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Pokemon } from "@/types";
import { Card } from "@/components/ui/card";

const MotionCard = motion.create(Card);

type Props = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: Props) {
  const { name, url, image } = pokemon;
  return (
    <MotionCard
      key={url}
      className="p-8 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
    >
      <h1 className="text-xl capitalize">{name}</h1>
      <Image src={image} alt={name} width={215} height={215} />
    </MotionCard>
  );
}
