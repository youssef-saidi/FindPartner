import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from '../app/slices/logSlice';
import { GLobals } from '../globals/globalFunction';


const Layout = ({children}) => {
  return (
    <>
    {children}
    </>
  )
}

initialState();
export default Layout