'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Page() {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center p-4 text-center'>
      <h1 className='text-2xl tracking-tighter mb-1'>What happend trainer?</h1>
      <h2 className='text-md'>I&apos;m sorry, but you are offline. You need to figure out your connection.</h2>
      <h2 className='text-md'>Meanwhile maybe we can show fill things for you. Let&apos;s try again.</h2>
      <Button onClick={() => router.back()} className='mt-12 p-6 text-md'>Back</Button>
    </div>
  )
}
