import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../app/logSlice'


export default function Home() {
  const isLog = useSelector((state) => state.isLoggin.logSliceReducer.value)
  const dispatch =useDispatch()
  console.log(isLog)
  return (
    <section className='font-bold text-center w-screen'>
      ISLogged ?
      <h1 className='text-'>{isLog?"true":"false"}</h1>
      <button className='text-red-500 mx-5' onClick={()=>dispatch(logIn(true))}>Login</button>
      <button className='text-red-500' onClick={()=>dispatch(logOut(false))}>LogOut</button>

    </section>
  )
}
