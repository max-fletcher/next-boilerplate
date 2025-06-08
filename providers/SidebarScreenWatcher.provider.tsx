"use client"

import { useEffect, useRef } from "react"
import { useSidebar } from "@/contexts/SidebarContext"

const SidebarScreenWatcherProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen, closeSidebar } = useSidebar()
  const wasBelowLg = useRef<boolean>(typeof window !== "undefined" ? window.innerWidth < 1024 : false)

  useEffect(() => {
    const handleResize = () => {
      const isBelowLg = window.innerWidth < 1024

      // If we moved from below 1024px to 1024px or above → close sidebar
      if (wasBelowLg.current && !isBelowLg && isSidebarOpen) {
        closeSidebar()
      }

      wasBelowLg.current = isBelowLg
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isSidebarOpen, closeSidebar])

  return <>{children}</> // render children without altering them
}

export default SidebarScreenWatcherProvider