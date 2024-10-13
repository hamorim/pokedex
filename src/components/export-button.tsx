'use client'

import { FileDown } from 'lucide-react'
import { useAtomValue } from 'jotai';
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { pokedexAtom } from '@/store/pokedex';

export default function ExportButton() {
  const pokedex = useAtomValue(pokedexAtom);

  const exportToCsv = () => {
    const content = pokedex.map((pokemon) =>
      ([pokemon.id, pokemon.name].join(','))
    );
    const csvContent = "data:text/csv;charset=utf-8,".concat("id,name\n").concat(content.join("\n"));
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><Button variant='outline' className='mt-4' onClick={() => exportToCsv()}><FileDown /></Button></TooltipTrigger>
        <TooltipContent>
          <p>Export CSV</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
