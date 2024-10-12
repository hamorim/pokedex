import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="px-4 py-8 md:p-8">
      <Skeleton className="h-[600px] rounded-xl" />
    </div>
  )
}
