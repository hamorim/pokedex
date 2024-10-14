import React from 'react'

type Props = {
  title: string;
  description: string;
}

export default function MessageCard({title, description}: Props) {
  return (
    <div className="w-full flex items-center justify-center rounded-lg border border-dashed shadow-sm bg-muted/60">
      <div className="flex flex-col items-center gap-2 text-center p-48">
        <h3 className="text-2xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
