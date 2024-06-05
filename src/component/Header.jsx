import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeuser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Header = () => {
  const Dispatch=useDispatch()
  const navigate=useNavigate()
  let presentUser=useSelector((store)=>store.user)

  useEffect(()=>{
   
    console.log(presentUser)

  },[])

  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    Dispatch(removeuser())
    navigate("/")  
  }


  return (
    <div className='h-50 z-10 w-full px-8 py-2 bg-gradient-to-b from-black justify-between flex absolute'> 
        <img className='h-16' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
    {presentUser&& <div> <button onClick={logout} className='font-bold text-center py-4 text-white'>Signout</button><div>{presentUser.displayName}</div></div>}
    </div>
  )
}

export default Header
