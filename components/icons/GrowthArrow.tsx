import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const GrowthArrowIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.8333 8.66668V5.33334H10.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8334 5.33334L10.5001 8.66668C9.91168 9.25508 9.61755 9.54921 9.25648 9.58174C9.19675 9.58714 9.13675 9.58714 9.07702 9.58174C8.71595 9.54921 8.42181 9.25508 7.83341 8.66668C7.24501 8.07828 6.95085 7.78414 6.58979 7.75161C6.53011 7.74621 6.47005 7.74621 6.41037 7.75161C6.04931 7.78414 5.75512 8.07828 5.16675 8.66668L3.16675 10.6667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default GrowthArrowIcon