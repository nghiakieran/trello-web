import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { activeBoardReducer } from './slice/activeBoardSlice'
import { userReducer } from './slice/userSlice'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'] // slice user storaged localstorage
}

const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  user: userReducer
})

const persistedReducer = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})
