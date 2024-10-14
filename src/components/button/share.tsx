'use client'

import { useAtomValue } from 'jotai';
import { Share } from 'lucide-react'
import { pokedexAtom } from '@/store/pokedex';
import { useToast } from "@/hooks/use-toast"
import { encode } from '@/lib/hash';
import { type Action, ActionButton } from '@/components/button/action';

const useShare = (): { action: Action } => {
  const pokedex = useAtomValue(pokedexAtom);
  const { toast } = useToast()

  const action = () => {
    const content = pokedex.map((pokemon) => pokemon.id);
    const hash = encode(content)
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/pokedex/share?code=${encodeURI(hash)}`);
    toast({
      title: "Your Pokédex link has been copied to your clipboard",
      description: "You can share with your friends and colleagues",
    })
  }

  return { action }
}

export default function ShareButton() {
  const { action } = useShare();
  return (
    <ActionButton.Root tooltip='Share pokedex link'>
      <ActionButton.Action action={action} Icon={Share} />
    </ActionButton.Root>
  )
}
