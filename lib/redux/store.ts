import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/redux/features/counterSlice'
import { extendedApiSlice } from './features/postsSlice'

export const store = configureStore({
  // define all slices with their reducers here
  reducer: {
    counter: counterReducer, // for counter slice
    [extendedApiSlice.reducerPath]: extendedApiSlice.reducer, // for extendedApiSlice
  },
  // The middleware line ensures RTK Query can: Cache responses, Automatically manage background refetching & Handle invalidations
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(extendedApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch