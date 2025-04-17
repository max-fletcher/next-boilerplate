// import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const CartIcon = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 17 16" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.83337 13.6666C7.83337 14.2189 7.38566 14.6666 6.83337 14.6666C6.28109 14.6666 5.83337 14.2189 5.83337 13.6666C5.83337 13.1143 6.28109 12.6666 6.83337 12.6666C7.38566 12.6666 7.83337 13.1143 7.83337 13.6666Z" strokeWidth="1.2"/>
      <path d="M13.8334 13.6666C13.8334 14.2189 13.3857 14.6666 12.8334 14.6666C12.2811 14.6666 11.8334 14.2189 11.8334 13.6666C11.8334 13.1143 12.2811 12.6666 12.8334 12.6666C13.3857 12.6666 13.8334 13.1143 13.8334 13.6666Z" strokeWidth="1.2"/>
      <path d="M4.50004 2.66671H12.5C13.9728 2.66671 15.1667 3.86061 15.1667 5.33337V8.66671C15.1667 10.1395 13.9728 11.3334 12.5 11.3334H7.16671C5.69395 11.3334 4.50004 10.1395 4.50004 8.66671V2.66671ZM4.50004 2.66671C4.50004 1.93033 3.90309 1.33337 3.16671 1.33337H1.83337M4.50004 5.33337H14.8334" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CartIcon;
