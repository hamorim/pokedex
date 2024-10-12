import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="px-4 py-8 md:p-8">
      <Skeleton className="h-12 rounded-xl mb-8" />
      <div className='flex flex-wrap gap-6 justify-center md:justify-start'>
        <Skeleton className="h-[300px] w-[272px] rounded-xl" />
        <Skeleton className="h-[300px] w-[272px] rounded-xl" />
        <Skeleton className="h-[300px] w-[272px] rounded-xl" />
        <Skeleton className="h-[300px] w-[272px] rounded-xl" />
      </div>
    </div>
  )
}
