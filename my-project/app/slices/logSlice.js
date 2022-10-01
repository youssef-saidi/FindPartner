import { userlogIn, userlogOut } from '../appReducers';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: false,
}

export const logSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    logIn: userlogIn,
    logOut: userlogOut,
  },
})


export const { logIn, logOut } = logSlice.actions;
export default logSlice.reducer