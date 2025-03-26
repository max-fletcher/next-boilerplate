import { pacifico } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const Logo = ({ text } : {text: string}) => {
  return (
    <div className={cn("text-xl ms-5", pacifico.className)}>
        {text}
    </div>
  )
}

export default Logo