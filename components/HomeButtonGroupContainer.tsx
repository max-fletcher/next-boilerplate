"use client";

import { useState } from "react";
import { HomeButtonGroup } from "./HomeButtonGroup";

interface ButtonGroupProps {
  className?: string;
  buttonClassName?: string;
  buttonActiveClassName?: string;
  orientation?: "horizontal" | "vertical";
  isToggle?: boolean;
  isPill?: boolean;
}

const HomeButtonGroupContainer = (props: ButtonGroupProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = (buttonName: string) => {
    console.log(`${buttonName} clicked`);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const buttons = [
    { label: "Button 1", onClick: () => handleClick("Button 1") },
    { label: "Button 2", onClick: () => handleClick("Button 2") },
    { label: "Button 3", onClick: () => handleClick("Button 3") },
  ];

  return (
      <HomeButtonGroup buttons={buttons} {...props} loading={loading} />
  );
};

export default HomeButtonGroupContainer;
