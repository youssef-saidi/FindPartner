import { createSlice } from '@reduxjs/toolkit';


export const userlogIn = (state, action) => {
    state.value = action.payload
}

export const userlogOut = (state, action) => {
    state.value = action.payload
}