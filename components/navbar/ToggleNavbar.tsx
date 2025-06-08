"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HamburgerIcon from "../icons/Hamburger";
import { useSidebar } from "@/contexts/SidebarContext";

export function ToggleNavbar({classes} : {classes?: string}) {
  const { toggleSidebar } = useSidebar()

  return (
    <div className={cn("h-full flex items-center", classes)}
    >
      <Button
        onClick={() => {
          toggleSidebar()
        }}
        className="flex justify-center"
        variant="outline"
        size="icon"
      >
        <HamburgerIcon />
      </Button>
    </div>
  );
}
