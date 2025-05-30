import React from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const SearchField = ({ className }: {className?: string }) => {
  return (
    <div className='flex items-center'>
        <Input className={cn('border-2 border-border dark:border-background bg-background w-full', className)} placeholder='Search'/>
    </div>
  )
}

export default SearchField