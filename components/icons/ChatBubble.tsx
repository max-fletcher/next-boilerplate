
import { cn } from "@/lib/utils";
import { TIconTypes } from "@/types/icon.types";

const ChatBubble = ({ classes = '', width = 20, height = 20, isActive = false }: TIconTypes) => {
  return (
    <svg 
      className={cn('fill-background dark:fill-[#030712] stroke-black dark:stroke-white', { 'fill-[#030712] dark:fill-white stroke-white dark:stroke-black' : isActive }, classes)}
      style={{width, height}}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.2998 9.14225C18.3445 9.83408 18.3445 10.5506 18.2998 11.2424C18.0713 14.7777 15.2946 17.5938 11.8088 17.8254C10.6195 17.9045 9.37796 17.9043 8.19112 17.8254C7.78242 17.7983 7.33696 17.7008 6.9533 17.5428C6.52643 17.3669 6.31296 17.279 6.20449 17.2923C6.09602 17.3057 5.93862 17.4218 5.62386 17.6538C5.06886 18.0631 4.36968 18.3571 3.33282 18.3318C2.80851 18.3191 2.54636 18.3127 2.42899 18.1126C2.31163 17.9125 2.4578 17.6355 2.75013 17.0815C3.15557 16.3132 3.41247 15.4336 3.02322 14.7288C2.35282 13.7222 1.78337 12.53 1.70016 11.2424C1.65545 10.5506 1.65545 9.83408 1.70016 9.14225C1.92863 5.60699 4.70528 2.79094 8.19112 2.55923C9.19312 2.49262 9.40096 2.48213 10.4166 2.52807" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.08337 12.5H12.9167M7.08337 8.33333H10" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.3333 4.58333C18.3333 6.19417 17.0275 7.5 15.4167 7.5C13.8058 7.5 12.5 6.19417 12.5 4.58333C12.5 2.9725 13.8058 1.66667 15.4167 1.66667C17.0275 1.66667 18.3333 2.9725 18.3333 4.58333Z" strokeWidth="1.25"/>
    </svg>
  )
}

export default ChatBubble
