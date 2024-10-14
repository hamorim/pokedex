'use client'

import { useState } from 'react';
import { ChartPie } from 'lucide-react'
import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { useAtomValue } from 'jotai';
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { 
  ChartConfig, 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart"
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

export default function GraphButton() {
  const [openGraph, setOpenGraph] = useState(false);
  const catchedPokemons = useAtomValue(catchedPokemonsAtom)
  const total: number = 151
  const chartData = [{ catched: catchedPokemons, wild: total-catchedPokemons }]
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild><Button variant='outline' onClick={() => setOpenGraph(true)}><ChartPie /></Button></TooltipTrigger>
          <TooltipContent>
            <p>Show progress graph</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
                            Already cacthed
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
    </>
  )
}
