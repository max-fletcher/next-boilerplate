'use client'

import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/redux/store'
import { decrement, increment } from '@/lib/redux/features/counterSlice'

// This uses a plain-old slice to increment/decrement a counter non-asynchronously. Use this as a reference.
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="space-y-4">
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default Counter