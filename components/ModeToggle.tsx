"use client"

import * as React from "react"
// import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
  <div>
    <Button className="bg-slate-400 dark:bg-red-600" onClick={() => {
        console.log('dark clicked');
        setTheme("dark")
      }} variant="outline" size="icon">
      Dark
    </Button>
    <Button className="bg-slate-400 dark:bg-red-600" onClick={
        () => {
          console.log('light clicked');
          setTheme("light")
        }
      } variant="outline" size="icon">
      Light
    </Button>
  </div>
  )
}