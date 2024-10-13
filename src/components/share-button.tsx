'use client'

import { Share } from 'lucide-react'
import { useAtomValue } from 'jotai';
import { Button } from '@/components/ui/button'
import { pokedexAtom } from '@/store/pokedex';
import { useToast } from "@/hooks/use-toast"
import { encode } from '@/lib/hash';

export default function ShareButton() {
  const pokedex = useAtomValue(pokedexAtom);
  const { toast } = useToast()

  const createShareLink = () => {
    const content = pokedex.map((pokemon) => pokemon.id);
    const hash = encode(content)
    navigator.clipboard.writeText(`http://localhost:3000/pokedex/share?code=${encodeURI(hash)}`);
    toast({
      title: "Your Pokédex link has been copied to your clipboard",
      description: "You can share with your friends and colleagues",
    })
  }

  return (
    <Button variant='outline' className='mt-4' onClick={() => createShareLink()}><Share /></Button>
  )
}
