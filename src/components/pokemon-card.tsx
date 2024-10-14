import Image from "next/image";
import dynamic from "next/dynamic";
import { CardPokemon } from "@/types";
import { MotionCard } from "@/components/motion-card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Pokeball = dynamic(() => import("@/components/pokeball"), {
  ssr: false,
  loading: () => (
    <Skeleton className="size-[36px] rounded-full absolute top-2 right-2" />
  ),
});

type Props = {
  pokemon: CardPokemon;
  children?: React.ReactNode;
  cardClassname?: string;
};

function Captured({ pokemon: { id }}: Props) {
  return <Pokeball className="absolute top-2 right-2" pokemonId={id} />;
}

function Card({ pokemon: { id, name, image }, children, cardClassname }: Props) {
  return (
    <Link href={`/pokemon/${id}`}>
      <MotionCard className={cardClassname}>
        <div className="flex flex-col items-center">
          <div className="relative z-10">
            <Image src={image} alt={name} width={215} height={215} />
            <div className="w-[180px] h-[180px] dark:bg-slate-800 bg-slate-200/60 rounded-full absolute inset-0 -z-10"></div>
          </div>
          <h1 className="text-xl capitalize font-medium">{name}</h1>
        </div>
        {children}
      </MotionCard>
    </Link>
  );
}

const PokemonCard = {
  Root: Card,
  Captured: Captured,
};

export { PokemonCard };
