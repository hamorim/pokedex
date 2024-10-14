import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const PokedexActions = dynamic(() => import("@/components/podekex-actions"), {
  ssr: false
});
const Pokedex = dynamic(() => import("@/components/pokedex"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
    </div>
  ),
});

export default async function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-md md:text-2xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
          My Pokédex
        </h1>
        <PokedexActions />
      </div>
      <Pokedex />
    </div>
  );
}
