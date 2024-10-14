'use client'

import { FileDown } from 'lucide-react'
import { useAtomValue } from 'jotai';
import { pokedexAtom } from '@/store/pokedex';
import { type Action, ActionButton } from '@/components/button/action';

const useExport = (): { action: Action } => {
  const pokedex = useAtomValue(pokedexAtom);

  const action = () => {
    const content = pokedex.map((pokemon) =>
      ([pokemon.id, pokemon.name].join(','))
    );
    const csvContent = "data:text/csv;charset=utf-8,".concat("id,name\n").concat(content.join("\n"));
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

  return { action }
}

export default function ExportButton() {
  const { action } = useExport();
  return (
    <ActionButton.Root tooltip='Export CSV' >
      <ActionButton.Action action={action} Icon={FileDown} />
    </ActionButton.Root>
  )
}
