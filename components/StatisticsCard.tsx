import { geist } from '@/lib/fonts/fonts'
import { cn } from '@/lib/utils'
import { TIconTypes } from '@/types/icon.types'
import React from 'react'

interface StatisticsCardProp {
  header: string
  Icon: ({ classes, width, height, isActive }: TIconTypes) => JSX.Element
  title: string
  subtitle: string
  subtitleClasses?: string
}

const StatisticsCard = ({header, title, Icon, subtitle, subtitleClasses}: StatisticsCardProp) => {
  return (
    <div className={cn("w-full border radius-xl p-3.5 rounded-xl", geist.className)}>
      <div className='flex justify-between'>
        <div className='text-sm font-medium'>{header}</div>
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