import React from 'react'

interface StatisticsCardProp {
  header: string
  Icon: React.FC
  title: string
  subtitle: string
  subtitleClasses?: string
}

const StatisticsCard = ({header, title, Icon, subtitle, subtitleClasses}: StatisticsCardProp) => {
  return (
    <div className='m-3'>
      <div className='flex justify-between'>
        <div className=''>{header}</div>
        <div className=''><Icon /></div>
      </div>
      <div className=''>
        {title}
      </div>
    </div>
  )
}

export default StatisticsCard