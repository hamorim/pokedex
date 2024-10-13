'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Page() {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center p-12'>
      <h1 className='text-2xl tracking-tighter'>This is offline fallback page</h1>
      <h2 className='text-md'>When offline, any page route will fallback to this page</h2>
      <Button onClick={() => router.back()} className='mt-4 p-4 text-md'>Back</Button>
    </div>
  )
}
