import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GLobals } from '../globals/globalFunction'





export default function Home() {

  // const dispatch =useDispatch()

  // const initialState = async()=>{
  
  //     await GLobals.loginChangeHandler(() => {
  //           dispatch(logOut());
  //       });
    
  //   }
  
  // useEffect(() => {
  //   initialState()  
  // },);

  const isLog = useSelector((state) => state.isLoggin.value)
  // This block is to protect the route and if he still login his account still open
  const router = useRouter()
  const dispatch =useDispatch()

  const initialState = async()=>{
  
    await GLobals.loginChangeHandler(() => {
          dispatch(logOut());
      });
  
  }

useEffect(() => {
  initialState()  
  if(isLog) {router.push("/login")}
},);

  return (
    <section className='font-bold text-center w-screen'>
      ISLogged ?
 {isLog &&  <>
 <h1 className='text-'>{isLog?"true":"false"}</h1>
      <button className='text-red-500 mx-5' onClick={()=>dispatch(logIn())}>Login</button>
      <button className='text-red-500' onClick={()=>dispatch(logOut())}>LogOut</button>
  </>
}
    </section>
  )
}
