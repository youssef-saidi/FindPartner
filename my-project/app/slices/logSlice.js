import { userlogIn, userlogOut } from '../appReducers';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: true,
}

export const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    logIn: userlogIn,
    logOut: userlogOut,
  },
})


export const { logIn, logOut } = logSlice.actions;
export default logSlice.reducer