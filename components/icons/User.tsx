import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const UserIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.88505 10.3211C3.94187 10.8827 1.46891 12.0294 2.97511 13.4644C3.71088 14.1653 4.53033 14.6667 5.56058 14.6667H11.4394C12.4697 14.6667 13.2891 14.1653 14.0249 13.4644C15.5311 12.0294 13.0581 10.8827 12.1149 10.3211C9.9032 9.00406 7.0968 9.00406 4.88505 10.3211Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5 4.33334C11.5 5.9902 10.1569 7.33334 8.5 7.33334C6.84315 7.33334 5.5 5.9902 5.5 4.33334C5.5 2.67649 6.84315 1.33334 8.5 1.33334C10.1569 1.33334 11.5 2.67649 11.5 4.33334Z"/>
    </svg>
  )
}

export default UserIcon