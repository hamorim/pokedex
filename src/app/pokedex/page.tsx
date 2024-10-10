import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const Pokedex = dynamic(() => import("@/components/pokedex"), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
      <Skeleton className="w-[281px] h-[300px]" />
    </>
  ),
});

export default function Page() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold tracking-tighter mb-6 text-slate-700">
        My Pokédex
      </h1>
      <section className="w-full flex flex-wrap gap-6">
        <Pokedex />
      </section>
    </div>
  );
}
