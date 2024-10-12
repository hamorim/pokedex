import ExportButton from "@/components/export-button";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileDown } from "lucide-react";
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

export default async function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tighter text-slate-700 dark:text-slate-300">
          My Pokédex
        </h1>
        <ExportButton />
      </div>
      <section className="flex flex-wrap gap-6 justify-center md:justify-start">
        <Pokedex />
      </section>
    </div>
  );
}
