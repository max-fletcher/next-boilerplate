"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartConfig } from "./ui/chart"
import { cn } from "@/lib/utils";
import { geist } from "@/lib/fonts/fonts";
// import { useTheme } from 'next-themes'

interface HomeBarChartProps {
  className?: string;
}

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "September", desktop: 237 },
  { month: "October", desktop: 73 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    theme: {
      light: "hsla(var(--chart-1))",
      dark: "hsla(var(--chart-1))",
    },
  },
} satisfies ChartConfig

const HomeBarChart = ({className}: HomeBarChartProps) => {
  // const { resolvedTheme } = useTheme()

  // const barColor = resolvedTheme === 'dark' ? '#4ade80' : '#3b82f6' // green in dark, blue in light

  return (
    <ChartContainer config={chartConfig} className={cn("min-h-[100px] w-full", className)}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          style={{
            fontSize: '14px',
            fontWeight: '500',
          }}
        />
        <YAxis
          width={30}
          axisLine={false}
          tickLine={false}
          style={{
            fontSize: '14px',
            fontWeight: '500',
          }}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

export default HomeBarChart