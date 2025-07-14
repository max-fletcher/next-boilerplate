"use client"

import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import SearchField from "./SearchField"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import ChatBubble from "../icons/ChatBubble"
import { ToggleNavbar } from "./ToggleNavbar"
import { useSession } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession() // you can use this hook "useSession" to get token data in a client component, that was stored in jwt method

  return (
    <div className="bg-background opacity-100 z-10 sticky top-0 flex w-full h-14 justify-end md:justify-between items-center px-9">
      <ToggleNavbar classes="lg:hidden" />
      <div className="w-full md:w-[60%] ms-5 md:mx-0">
        <SearchField />
      </div>
      <div className="hidden md:flex items-center justify-end min-w-20">
        <ModeToggle classes="me-2" />
        <div className="flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 border border-input bg-background shadow-sm
          h-9 w-9 justify-center hover:cursor-pointer"
        >
          <ChatBubble />
        </div>
        <div className="dark:bg-[#1F2937] h-9 flex items-center px-3 rounded-md ms-3 w-36">
          <Image
            className="rounded-full aspect-square object-cover"
            src={session?.user?.avatar ? session?.user?.avatar : "/profile.png"}
            width={20}
            height={20}
            alt="menu-icon"
          />
          <div className={cn("ms-2 font-medium text-sm", geist.className)}>
            {session?.user?.name ? session?.user?.name : 'Anonymous User'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar