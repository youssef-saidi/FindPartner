import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logSliceReducer from './slices/logSlice'
import { createWrapper } from 'next-redux-wrapper'
import  sideReducer  from './slices/sideSlice'

const combinedReducer = combineReducers({
  logSliceReducer
})

export const store = () =>
  configureStore({
    reducer: {
      isLoggin: combinedReducer,
      sideBar: sideReducer,
    },
  })
export const wrapper = createWrapper(store)