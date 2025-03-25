import { pacifico } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const Logo = ({ text } : {text: string}) => {
  return (
    <div className={cn("h-12", pacifico.className)}>
        {text}
    </div>
  )
}

export default Logo