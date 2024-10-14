'use client'

import { useAtom } from 'jotai'
import { ArrowDownAZ, ArrowDownNarrowWide, ArrowDownZA } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sortAtom } from '@/store/app'

export default function SortButton() {
  const [sort, setSort] = useAtom(sortAtom)
  return (
    <div className='mr-8'>
      {sort === 'default' && <Button variant='outline' onClick={() => setSort('asc')}><ArrowDownNarrowWide /></Button>}
      {sort === 'asc' && <Button variant='outline' onClick={() => setSort('desc')}><ArrowDownAZ /></Button>}
      {sort === 'desc' && <Button variant='outline' onClick={() => setSort('default')}><ArrowDownZA /></Button>}
    </div>
  )
}
