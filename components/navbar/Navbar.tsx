import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import SearchField from "./SearchField"
import { geist } from "@/lib/fonts/fonts"
import { User } from "@/types/User.types"
import { cn } from "@/lib/utils"
import ChatBubble from "../icons/ChatBubble"

const Navbar = ({user}: {user: User}) => {
  return (
    <div className="w-full h-14 flex justify-between items-center ps-9 pe-5">
      <div>
        <SearchField />
      </div>
      <div className="flex items-center justify-end min-w-20">
        <ModeToggle />
        <div className="flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 border border-input bg-background shadow-sm
          h-9 w-9 justify-center hover:cursor-pointer ms-3"
        >
          <ChatBubble />
        </div>
        <div className="dark:bg-[#1F2937] h-9 flex items-center px-3 rounded-md ms-3">
          <Image
            className="rounded-full aspect-square object-cover"
            src="/profile.png"
            width={20}
            height={20}
            alt="menu-icon"
          />
          <div className={cn("ms-2 font-medium text-sm", geist.className)}>
            {user.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar