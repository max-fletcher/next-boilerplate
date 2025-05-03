"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartConfig } from "./ui/chart"
import { cn } from "@/lib/utils";

interface CustomBarChartProps {
  className?: string;
  chartData: any[] | undefined;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    theme: {
      light: "hsla(var(--chart-1))",
      dark: "hsla(var(--chart-1))",
    },
  },
} satisfies ChartConfig

const CustomBarChart = ({className, chartData}: CustomBarChartProps) => {
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

export default CustomBarChart