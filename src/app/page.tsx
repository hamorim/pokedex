import Image from "next/image";
import { Card } from "@/components/ui/card";
import { usePokemons } from "@/hooks/usePokemons";
import { Pokemon } from "@/types";

export default async function Home() {
  const { pokemons } = await usePokemons();

  return (
    <div className="flex flex-wrap gap-6">
      {pokemons.map((p: Pokemon) => (
        <Card key={p.url} className="p-8">
          <h1 className="text-xl capitalize">{p.name}</h1>
          <Image src={p.image} alt={p.name} width={215} height={215} />
        </Card>
      ))}
    </div>
  );
}
