import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TButtonProps {
  text: string,
  icon?: string,
  classes?: string
}

const CustomButton = ({ text, icon, classes = '' }: TButtonProps) => {
  return (
    <Button className={cn(`'bg-primary text-primary-foreground', ${classes}`)}>
        {/* {icon && <Image src={icon} width={20} height={20} alt={text} className='text-slate-800' />} */}
        {text} 
        <br />
        {icon}
    </Button>
  )
}

export default CustomButton