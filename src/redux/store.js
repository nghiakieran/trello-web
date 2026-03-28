import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './slice/activeBoardSlice'

export const store = configureStore({
  reducer: {
    activeBoard: activeBoardReducer
  },
})
