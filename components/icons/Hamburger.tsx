import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const HamburgerIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
    </svg>
  )
}

export default HamburgerIcon