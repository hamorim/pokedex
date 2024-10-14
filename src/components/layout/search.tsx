'use client'

import { useAtom } from "jotai";
import { Search as SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { filterAtom } from "@/store/app";

export default function Search() {
  const [filter, setFilter] = useAtom(filterAtom)
  return (
    <form className="ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>
    </form>
  )
}
