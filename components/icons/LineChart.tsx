import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const LineChartIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.8334 5.66668C10.8334 4.37801 9.78875 3.33334 8.50008 3.33334C7.21142 3.33334 6.16675 4.37801 6.16675 5.66668C6.16675 6.95534 7.21142 8.00001 8.50008 8.00001" strokeLinecap="round"/>
      <path d="M6.16675 10.3333C6.16675 11.622 7.21142 12.6667 8.50008 12.6667C9.78875 12.6667 10.8334 11.622 10.8334 10.3333C10.8334 9.04467 9.78875 8 8.50008 8" strokeLinecap="round"/>
      <path d="M8.5 2V14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  )
}

export default LineChartIcon