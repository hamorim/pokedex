'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDownAZ, ArrowDownNarrowWide, ArrowDownZA, FileDown } from 'lucide-react'
import { sortAtom } from '@/store/pokemons'
import { useAtom } from 'jotai'

export default function Filters() {
  const [sort, setSort] = useAtom(sortAtom)
  return (
    <div>
      {sort === 'default' && <Button variant='outline' onClick={() => setSort('asc')}><ArrowDownNarrowWide /></Button>}
      {sort === 'asc' && <Button variant='outline' onClick={() => setSort('desc')}><ArrowDownAZ /></Button>}
      {sort === 'desc' && <Button variant='outline' onClick={() => setSort('default')}><ArrowDownZA /></Button>}
      <Button variant='outline' className='ml-4'><FileDown /></Button>
    </div>
  )
}
