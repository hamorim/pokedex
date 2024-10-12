import dynamic from "next/dynamic";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { getPokemon } from "@/services/pokeapi";
import { useSpecie } from "@/hooks/usePokemons";

const CatchButton = dynamic(() => import("@/components/catch-button"), {
  ssr: false
});

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

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { pokemon } = await getPokemon(params.id);
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  return {
    title: `Pokedex | ${pokemonName}`,
    description: "Guiding light on your path to Pokemon mastery",
  }
}


export default async function Page({ params }: Props) {
  const { pokemon } = await getPokemon(params.id);
  const { about } = await useSpecie(params.id);


  return (
    <Card className="px-4 py-8 md:p-8">
      <div className="grid md:grid-cols-3 md:grid-rows-2 max-w-4xl">
        <div className="relative z-20 col-span-2 md:col-span-1">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={280}
            height={280}
          />
          <div className="size-[200px] dark:bg-slate-800 bg-slate-200/60 rounded-full absolute inset-0 -z-10"></div>
        </div>

        <div className="flex flex-col gap-4 max-w-prose row-span-2 col-span-2">
          <h1 className="text-4xl capitalize font-semibold tracking-tight">
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
          <div>
            {pokemon.stats.map((stat) => (
              <div
                className="flex flex-col gap-1 justify-between"
                key={stat.name}
              >
                <div className="flex justify-between">
                  <p className="capitalize font-medium">{stat.name}</p>
                  <p className="text-slate-700 dark:text-slate-300">
                    {stat.value}
                  </p>
                </div>
                <Progress
                  value={stat.value}
                  className={cn("h-4 mb-4", {
                    "[&>*]:bg-red-500/80": stat.value > 0,
                    "[&>*]:bg-orange-500/80": stat.value > 45,
                    "[&>*]:bg-green-500/80": stat.value > 70,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
        <CatchButton pokemon={pokemon} className="col-span-2 md:col-span-1 mt-4" />
      </div>
    </Card>
  );
}
