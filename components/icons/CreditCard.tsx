import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const CreditCardIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15.1667" y="2" width="12" height="13.3333" rx="2" transform="rotate(90 15.1667 2)" />
      <ellipse cx="4.49992" cy="11.3333" rx="0.666667" ry="0.666667" fill="white"/>
      <path d="M1.83341 4.66666L15.1667 4.66666L15.1667 7.33332L1.83341 7.33332L1.83341 4.66666Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default CreditCardIcon