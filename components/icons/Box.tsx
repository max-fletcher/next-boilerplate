import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const BoxIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5 14.6667C7.95453 14.6667 7.43347 14.4465 6.39129 14.0063C3.79709 12.9105 2.5 12.3625 2.5 11.4409C2.5 11.1828 2.5 6.70967 2.5 4.66667M8.5 14.6667C9.04547 14.6667 9.56653 14.4465 10.6087 14.0063C13.2029 12.9105 14.5 12.3625 14.5 11.4409V4.66667M8.5 14.6667V7.56987" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.05061 6.46091L4.10315 5.51856C3.03438 5.0014 2.5 4.74282 2.5 4.33333C2.5 3.92384 3.03438 3.66526 4.10315 3.14809L6.05061 2.20574C7.25253 1.62413 7.85353 1.33333 8.5 1.33333C9.14647 1.33333 9.74747 1.62413 10.9494 2.20574L12.8969 3.14809C13.9656 3.66526 14.5 3.92384 14.5 4.33333C14.5 4.74282 13.9656 5.0014 12.8969 5.51856L10.9494 6.46091C9.74747 7.04253 9.14647 7.33333 8.5 7.33333C7.85353 7.33333 7.25253 7.04253 6.05061 6.46091Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 8L5.83333 8.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.8333 2.66667L5.16663 6.00001" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default BoxIcon