import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { usePokemon, useSpecie } from "@/hooks/usePokemons";
import Image from "next/image";

const colors: { [key: string]: string } = {
  bug: "#8BD674",
  dark: "#6F6E78",
  dragon: "#7383B9",
  electric: "#F2CB55",
  fairy: "#EBA8C3",
  fighting: "#EB4971",
  fire: "#FFA756",
  flying: "#83A2E3",
  ghost: "#8571BE",
  grass: "#8BBE8A",
  ground: "#F78551",
  ice: "#91D8DF",
  normal: "#B5B9C4",
  poison: "#9F6E97",
  psychic: "#FF6568",
  rock: "#D4C294",
  steel: "#4C91B2",
  water: "#58ABF6",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { pokemon } = await usePokemon(params.id);
  const { about } = await useSpecie(params.id);

  return (
    <Card className="p-12">
      <div className="flex">
        <div className="relative z-20">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={280}
            height={280}
          />
          <div className="w-[200px] h-[200px] dark:bg-slate-800 bg-slate-200/60 rounded-full absolute inset-0 -z-10"></div>
        </div>
        <div className="flex flex-col gap-4 max-w-prose">
          <h1 className="text-2xl capitalize font-semibold tracking-tight">
            {pokemon.name}
          </h1>
          <p>{about}</p>
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <Badge
                className="capitalize p-2"
                style={{ backgroundColor: colors[type] }}
                key={type}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
