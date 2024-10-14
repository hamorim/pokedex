'use client'

import { useState } from 'react';
import { ChartPie } from 'lucide-react'
import { useAtomValue } from 'jotai';
import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { type Action, ActionButton } from '@/components/button/action';
import { catchedPokemonsAtom } from '@/store/pokedex';

const chartConfig = {
  catched: {
    label: "Catched",
    color: "hsl(var(--chart-2))",
  },
  wild: {
    label: "Wild",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const useGraph = (): { action: Action, graph: React.ReactNode } => {
  const [openGraph, setOpenGraph] = useState(false);
  const catchedPokemons = useAtomValue(catchedPokemonsAtom)
  const total: number = 151
  const chartData = [{ catched: catchedPokemons, wild: total - catchedPokemons }]

  const graph = (
    <Dialog open={openGraph} onOpenChange={() => setOpenGraph((value) => !value)}>
      <DialogContent>
        <DialogHeader className='text-start'>
          <DialogTitle>Keep going Trainer 💪</DialogTitle>
          <DialogDescription>
            <p>Here&apos;s a snapshot of your journey as a Pokémon Trainer!</p>
          </DialogDescription>
        </DialogHeader>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {catchedPokemons.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Already catched
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="wild"
              fill="var(--color-wild)"
              stackId="a"
              cornerRadius={10}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="catched"
              stackId="a"
              cornerRadius={10}
              fill="var(--color-catched)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </DialogContent>
    </Dialog>
  )

  return { action: () => setOpenGraph(true), graph: graph }
}

export default function GraphButton() {
  const { action, graph } = useGraph();
  return (
    <>
      <ActionButton.Root tooltip='Show progress graph' >
        <ActionButton.Action action={action} Icon={ChartPie} />
      </ActionButton.Root>
      {graph}
    </>
  )
}
