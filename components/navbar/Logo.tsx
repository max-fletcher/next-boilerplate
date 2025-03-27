import { pacifico } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Logo = ({ text, link = '/' } : {text: string, link?: string}) => {  
  return (
    <Link href={link} className={cn("text-xl ms-7", pacifico.className)}>
        {text}
    </Link>
  )
}

export default Logo