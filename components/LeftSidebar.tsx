import { User } from "@/types/User.types"
import Logo from "./navbar/Logo"
import Image from "next/image"

import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"

const LeftSidebar = ({user}: {user: User}) => {
  return (
    <div className="min-w-72 w-1/4">
      <div className="h-12 flex items-center">
          <Logo text="Admin Panel" />
      </div>
      <div className="mx-5 dark:bg-[#1F2937] h-9 flex items-center px-3">
          <Image className="rounded-full aspect-square object-cover" src="/profile.png" width={20} height={20} alt="menu-icon" />
          <div className={cn('ms-2 font-medium text-sm', geist.className)}>
            {user.name}
          </div>
        </div>
    </div>
  )
}

export default LeftSidebar