"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HamburgerIcon from "../icons/Hamburger";

export function ToggleNavbar({classes} : {classes?: string}) {

  return (
    <div className={cn("h-full flex items-center", classes)}
    >
      <Button
        onClick={() => {
          console.log('Toggle navbar');
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
