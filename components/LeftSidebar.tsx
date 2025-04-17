"use client"

import { User } from "@/types/User.types"
import Logo from "./navbar/Logo"
import Image from "next/image"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import TableOfContentsIcon from "./icons/TableOfContentsIcon"
// import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"
import CartIcon from "./icons/Cart"
import OpenBoxIcon from "./icons/OpenBox"
import SquareArrowUpIcon from "./icons/SquareArrowUp"
import BoxIcon from "./icons/Box"

export const sidebarLinks = [
  {
    imgIcon: TableOfContentsIcon,
    route: "/",
    label: "Tableau de bord",
  },
  {
    imgIcon: CartIcon,
    route: "/commandes",
    label: "Commandes",
  },
  {
    imgIcon: BoxIcon,
    route: "/produits",
    label: "Produits",
  },
  {
    imgIcon: OpenBoxIcon,
    route: "/emballage",
    label: "Emballage",
  },
  {
    imgIcon: SquareArrowUpIcon,
    route: "/upsells",
    label: "Upsells",
  },
];

const LeftSidebar = ({user}: {user: User}) => {
  const pathname = usePathname()

  return (
    <div className="min-w-72 w-1/4">
      <div className="h-12 flex items-center ms-5">
        <Logo text="Admin Panel" />
      </div>
      <div className="mx-5 dark:bg-[#1F2937] h-9 flex items-center px-3 rounded-md">
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

      {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          console.log(isActive, item)

          return (
            <Link
              key={item.label}
              href={item.route}
              className={cn('sidebar-link', { 'bg-black dark:bg-white' : isActive } )} // A util function that merges classes. Uses twMerge under the hood.
            >
                <div className="flex justify-center items-center relative size-6">
                  <item.imgIcon width={20} height={20} isActive={isActive} />
                </div>
                <p className={cn("sidebar-label", { "text-white dark:text-black": isActive }) }>
                  {item.label}
                </p>
            </Link>
          )
        })}
    </div>
  );
}

export default LeftSidebar