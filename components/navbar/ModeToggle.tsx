"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle({classes} : {classes?: string}) {
  const { setTheme } = useTheme();

  return (
    <div className={cn("h-full flex items-center", classes)}
    >
      <Button
        onClick={() => {
          setTheme("dark");
        }}
        className="flex dark:hidden justify-center"
        variant="outline"
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        className="hidden dark:flex justify-center"
        variant="outline"
        size="icon"
      >
        <Moon className="-rotate-90 h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </div>
  );
}
