import { createSlice } from '@reduxjs/toolkit';


export const userlogIn = (state, action) => {
    state.value = true
}
export const userlogOut = (state, action) => {
    state.value = false
}