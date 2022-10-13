import '../styles/globals.css'
import { wrapper } from '../app/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLobals } from '../globals/globalFunction'
import { logOut } from '../app/slices/logSlice'





function MyApp({ Component, pageProps }) {

  
  return <Component {...pageProps} />

}
export default wrapper.withRedux(MyApp);
