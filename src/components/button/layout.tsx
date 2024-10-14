'use client'

import { useAtom } from 'jotai'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { layoutAtom } from '@/store/app'
import { ActionButton } from '@/components/button/action';

export default function LayoutButton() {
  const [layout, setLayout] = useAtom(layoutAtom)
  return (
    <ActionButton.Root tooltip='Toggle layout'>
      <section>
        {layout === 'table' && <Button variant='outline' onClick={() => setLayout('grid')}><LayoutGrid /></Button>}
        {layout === 'grid' && <Button variant='outline' onClick={() => setLayout('table')}><LayoutList /></Button>}
      </section>
    </ActionButton.Root>
  )
}
