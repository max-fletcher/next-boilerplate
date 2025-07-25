'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon, Loader2 } from 'lucide-react';

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

interface ButtonInfo {
  label: string;
  onClick: () => void;
  icon?: LucideIcon;
  disabled?: boolean;
}

interface HomeButtonGroupProps {
  buttons: ButtonInfo[];
  color?: string; 
  variant?: ButtonVariant;
  size?: 'default' | 'sm' | 'lg';
  isOutline?: boolean;
  className?: string;
  buttonClassName?: string;
  buttonActiveClassName?: string;
  orientation?: 'horizontal' | 'vertical';
  isToggle?: boolean;
  isPill?: boolean;
  loading?:boolean
}

const HomeButtonGroup = ({
  buttons,
  color,
  variant = 'default',
  size = 'default',
  isOutline = false,
  className,
  buttonClassName,
  buttonActiveClassName = 'buttonGroupBg dark:bg-red-900',
  orientation = 'horizontal',
  isToggle = false,
  isPill = false,
  loading = false,
}: HomeButtonGroupProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(isToggle ? 0 : null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, buttons.length);
  }, [buttons]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % buttons.length;
      buttonRefs.current[nextIndex]?.focus();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (index - 1 + buttons.length) % buttons.length;
      buttonRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <div
      className={cn(
        'inline-flex',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        isPill ? 'rounded-full' : 'rounded-md',
        'shadow-sm md:gap-3',
        className
      )}
      role='group'
      style={{ '--button-color': color } as React.CSSProperties}
    >
      {buttons.map((button, index) => {
        const Icon = button.icon;
        const isActive = activeIndex === index;
        return (
          <Button
            key={index}
            variant={isOutline ? 'outline' : variant}
            size={size}
            onClick={() => {
              if(isToggle && index !== activeIndex) {
                setActiveIndex(index);
                button.onClick();
              }
            }}
            disabled={button.disabled}
            className={cn(
              orientation === 'horizontal'
                ? 'first:rounded-l-md last:rounded-r-md rounded-none'
                : 'first:rounded-t-md last:rounded-b-md rounded-none',
              index !== 0 && orientation === 'horizontal' && '-ml-px',
              index !== 0 && orientation === 'vertical' && '-mt-px',
              isOutline &&
                orientation === 'horizontal' &&
                'border-r-[1px] last:border-r-0',
              isOutline &&
                orientation === 'vertical' &&
                'border-b-[1px] last:border-b-0',
              isPill && 'first:rounded-l-full last:rounded-r-full',
              'transition-colors hover:bg-primary/90 hover:text-primary-foreground',
              'focus:relative focus:z-10',
              color && `hover:bg-[var(--button-color)] hover:text-white`,
              buttonClassName,
              isActive && buttonActiveClassName,
            )}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-pressed={isToggle ? isActive : undefined}
          >
            {loading && isActive ? (
              <Loader2 className='mr-0 md:mr-1 h-4 w-1 md:w-4 animate-spin' />
            ) : (
              Icon && <Icon className='mr-2 h-4 w-1 md:w-4' />
            )}
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

export { HomeButtonGroup };