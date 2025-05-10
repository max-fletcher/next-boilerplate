import { geist } from '@/lib/fonts/fonts'
import { cn } from '@/lib/utils'
import { TIconTypes } from '@/types/icon.types'
import React from 'react'

interface StatisticsCardProps {
  header: string
  Icon: ({ classes, width, height, isActive }: TIconTypes) => JSX.Element
  classes: string,
  title: string
  subtitle: string|React.ReactNode
  subtitleClasses?: string
}

const StatisticsCard = ({header, title, Icon, classes, subtitle, subtitleClasses}: StatisticsCardProps) => {
  return (
    <div className={cn("w-full border radius-xl p-3.5 rounded-xl", geist.className, classes)}>
      <div className='flex justify-between'>
        <div className='text-sm font-medium max-w-24 xl:max-w-full'>{header}</div>
        <div className=''><Icon width={16} height={16} /></div>
      </div>
      <div className='text-2xl font-bold mt-3'>
        {title}
      </div>
      <div className={cn("text-xs font-normal mt-1", subtitleClasses)}>
        {subtitle}
      </div>
    </div>
  )
}

export default StatisticsCard