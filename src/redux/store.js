import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './slice/activeBoardSlice'
import { userReducer } from './slice/userSlice'

export const store = configureStore({
  reducer: {
    activeBoard: activeBoardReducer,
    user: userReducer
  }
})
