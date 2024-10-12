'use client'

import { FileDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pokedexAtom } from '@/store/pokedex';
import { useAtomValue } from 'jotai';

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
    <Button variant='outline' className='mt-4' onClick={() => exportToCsv()}><FileDown /></Button>
  )
}
