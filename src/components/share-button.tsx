'use client'

import { Share } from 'lucide-react'
import { useAtomValue } from 'jotai';
import { pokedexAtom } from '@/store/pokedex';
import { useToast } from "@/hooks/use-toast"
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><Button variant='outline' className='mt-4' onClick={() => createShareLink()}><Share /></Button></TooltipTrigger>
        <TooltipContent>
          <p>Share pokedex</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
