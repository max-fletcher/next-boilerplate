import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const TicketIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.74912 14.3415L6.39555 13.5381C6.05203 13.3343 5.88026 13.2323 5.68963 13.2264C5.48363 13.22 5.30883 13.3178 4.93762 13.5381C4.52188 13.7849 3.69521 14.4647 3.16047 14.1405C2.83325 13.9421 2.83325 13.4383 2.83325 12.4305V5.33334C2.83325 3.44772 2.83325 2.50492 3.41904 1.91913C4.00483 1.33334 4.94763 1.33334 6.83325 1.33334H10.1666C12.0522 1.33334 12.995 1.33334 13.5808 1.91913C14.1666 2.50492 14.1666 3.44772 14.1666 5.33334V12.4305C14.1666 13.4383 14.1666 13.9421 13.8394 14.1405C13.3047 14.4647 12.478 13.7849 12.0622 13.5381C11.7187 13.3343 11.5469 13.2323 11.3563 13.2264C11.1503 13.22 10.9755 13.3178 10.6043 13.5381L9.25072 14.3415C8.88565 14.5583 8.70305 14.6666 8.49992 14.6666C8.29679 14.6666 8.11419 14.5583 7.74912 14.3415Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 5.33334L6.5 9.33334" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 9.33334H10.494M6.50598 5.33334H6.5" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default TicketIcon