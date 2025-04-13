"use client"

import { User } from "@/types/User.types"
import Logo from "./navbar/Logo"
import Image from "next/image"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import TableOfContentsIcon from "./icons/TableOfContentsIcon"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const sidebarLinks = [
  {
    imgIcon: <TableOfContentsIcon
            width={20}
            height={20}
          />,
    route: "/",
    label: "Tableau de bord",
  },
  {
    imgIcon: <TableOfContentsIcon
            width={20}
            height={20}
          />,
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgIcon: <TableOfContentsIcon
            width={20}
            height={20}
          />,
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgIcon: <TableOfContentsIcon
            width={20}
            height={20}
          />,
    route: "/payment-transfer",
    label: "Transfer Funds",
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
          // console.log(pathname, item.route)

          return (
            <Link
              key={item.label}
              href={item.route}
              className={cn('sidebar-link', { 'active' : isActive } )} // A util function that merges classes. Uses twMerge under the hood.
              >
                <div className="flex justify-center items-center relative size-6">
                  {item.imgIcon}
                </div>
                <p className={cn("sidebar-label", { "!text-blue-500": isActive }) }>
                  {item.label}
                </p>
            </Link>
          )
        })}
    </div>
  );
}

export default LeftSidebar