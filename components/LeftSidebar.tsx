"use client"

import { User } from "@/types/User.types"
import Logo from "./navbar/Logo"
import Image from "next/image"
import { geist } from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import TableOfContentsIcon from "./icons/TableOfContentsIcon"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "./ui/button"
import { sidebarLinksGroup1, sidebarLinksGroup2 } from "@/constants"
import { useSidebar } from "@/contexts/SidebarContext"
import { useEffect, useRef } from "react"
import { useSession, signOut } from "next-auth/react"

const LeftSidebar = ({user}: {user: User}) => {
  const pathname = usePathname()
  const { isSidebarOpen, closeSidebar } = useSidebar() // Using Context To Control Sidebar
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()

  console.log('next auth session data', session)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar()
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isSidebarOpen, closeSidebar])

  return (
    <>
      {/* Backdrop i.e dark-tinted background behind side-nav when opened */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" />
      )}


      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 z-50 min-w-72 w-1/5 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isSidebarOpen,
            "-translate-x-full": !isSidebarOpen,
            "lg:translate-x-0 lg:static lg:shadow-none": true
          }
        )}
      >
        <div className="bg-background opacity-100 overflow-y-auto h-screen lg:h-auto">
          <div className="min-h-[1100px] xl:min-h-[900px]">
            <div className="h-12 flex items-center ms-5">
              <Logo text="Admin Panel" />
            </div>
            <div className="dark:bg-[#1F2937] h-9 flex items-center px-3 rounded-md sidebar-margin">
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

            <div className="sidebar-group-1 sidebar-margin">
              {sidebarLinksGroup1.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

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

            <div className="sidebar-group-2 sidebar-margin">
              {sidebarLinksGroup2.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

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

            <div className="sidebar-group-3 sidebar-margin">
              <Button
                className={cn('sidebar-link' )} // A util function that merges classes. Uses twMerge under the hood.
                onClick={() => signOut()}
              >
                  <div className="flex justify-center items-center relative size-6">
                    <TableOfContentsIcon width={20} height={20} />
                  </div>
                  <p className={cn("sidebar-label") }>
                    Logout
                  </p>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default LeftSidebar