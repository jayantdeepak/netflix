import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, useNavigate} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Error from './Error'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { adduser, removeuser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'

const Body = () => {
 let dispatch=useDispatch()
 
    const appRouter=createBrowserRouter([{
        path:"/",
        element:<Login/>,
        errorElement:<Error/>
    },{
        path:"/browse",
        element:<Browse/>,
        errorElement:<Error/>
    }])
    // useEffect(()=>{
    //   onAuthStateChanged(auth,(user)=>{
    //     if(user){
    //       console.log(user)
    //       // const {uid,email,displayname}=user;
    //       // dispatchEvent(adduser({uid:uid,email:email,displayname:displayname}))
    //     }
    //     else{
    //       dispatch(removeuser())
    //     }
    //   })
    // },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
     
    </div>
  )
}

export default Body
