import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logSliceReducer from './slices/logSlice'
import { createWrapper } from 'next-redux-wrapper'
import  sideReducer  from './slices/sideSlice'
import conversationReducer from './slices/conversationSlice'

// const combinedReducer = combineReducers({
  
// })

export const store = () =>
  configureStore({
    reducer: {
      isLoggin: logSliceReducer,
      sideBar: sideReducer,
      conversation: conversationReducer,
    },
  })
export const wrapper = createWrapper(store)