'use client'

import { useAtom } from 'jotai'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { layoutAtom } from '@/store/app'

export default function ViewToggle() {
  const [layout, setLayout] = useAtom(layoutAtom)
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            {layout === 'table' && <Button variant='outline' onClick={() => setLayout('grid')}><LayoutGrid /></Button>}
            {layout === 'grid' && <Button variant='outline' onClick={() => setLayout('table')}><LayoutList /></Button>}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle view layout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
