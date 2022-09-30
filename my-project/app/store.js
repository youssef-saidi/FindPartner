import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  logSliceReducer  from './logSlice'
import { createWrapper } from 'next-redux-wrapper'

const combinedReducer=combineReducers({
  logSliceReducer
})

export const store = () =>
  configureStore({
    reducer: {
      isLoggin: combinedReducer
    },
  })


export const wrapper = createWrapper(store)