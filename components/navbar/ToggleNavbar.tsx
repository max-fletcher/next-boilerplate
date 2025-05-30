"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HamburgerIcon from "../icons/Hamburger";

export function ToggleNavbar({classes} : {classes?: string}) {

  return (
    <div className={cn("h-full flex items-center", classes)}
    >
      <Button
        onClick={() => {
          // setTheme("dark");
          console.log('Toggle navbar');
        }}
        className="flex justify-center"
        variant="outline"
        size="icon"
      >
        {/* <Sun className="h-[1.2rem] w-[1.2rem] transition-all" /> */}
        <HamburgerIcon />
      </Button>
    </div>
  );
}
