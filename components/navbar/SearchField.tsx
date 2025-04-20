import React from 'react'
import { Input } from '../ui/input'

const SearchField = () => {
  return (
    <div className='flex items-center'>
        <Input className='border-2 border-border dark:border-background bg-background' placeholder='Search'/>
    </div>
  )
}

export default SearchField