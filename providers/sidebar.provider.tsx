"use client"

import { SidebarProvider } from "@/contexts/SidebarContext"
import SidebarScreenWatcherProvider from "./SidebarScreenWatcher.provider"

export default function ClientLayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarScreenWatcherProvider>
        {children}
      </SidebarScreenWatcherProvider>
    </SidebarProvider>
  )
}