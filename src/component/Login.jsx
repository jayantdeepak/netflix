import React, { useRef, useState } from 'react'
import Header from './Header'
import { chechValidate } from '../utils/validation'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import  {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useSelector } from 'react-redux';


const Login = () => {

  const Dispatch=useDispatch()
  const navigate=useNavigate()
    let [isSignedin ,setsignedin]=useState(true)
    let [errmsg,seterrmsg]=useState(null)
    let email=useRef(null)
    let password=useRef(null)
    let name=useRef(null)

    function toogelsignin(){
        setsignedin(!isSignedin)}


    function submitform(e){
      let msg=  chechValidate(email.current.value,password.current.value)
        msg?seterrmsg(msg):seterrmsg(null)
        if (msg !== null)return
        if(isSignedin){
        


      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   let {uid ,displayName,email}=user
   

updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  let {uid ,displayName,photoURL,email}=user
  Dispatch(adduser({uid:uid,displayName:name.current.value,photoURL:photoURL,email:email}))
  navigate("/browse")
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    
    //console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    // ..
  });
  
 
          

        }
else{
  
  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // login 
    const user = userCredential.user;
    // console.log(user)
    let {uid ,displayName,photoURL,email}=user
    Dispatch(adduser({uid:uid,displayName:displayName,photoURL:photoURL,email:email}))
  
    navigate("/browse")
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+":"+errorMessage)
  });
}}
   
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      </div >
      <div className='w-3/12 h-2/3 left-1/3 top-1/4 absolute p-8  bg-black'>
      <form  
       onSubmit={(e)=>{e.preventDefault()}}
        >
        <h1 className='font-bold text-white text-3xl py-4'>Sign In</h1>
        <div className='h-auto w-full'>
         {isSignedin &&<input ref={name} type='text' placeholder='full name' className='p-2 w-full mx-2'></input>}  
        <input ref={email} type='text' placeholder='Email address' className='p-2 w-full my-2 mx-2'></input>
        <input ref={password} type='password' placeholder='Password' className='p-2 w-full  m-2'></input>
       <div className='text-white'>{errmsg}</div> 
        <button type='submit' onClick={submitform}  className='bg-red-700 w-full p-5 m-3  text-white'>{isSignedin?"sign up":"log in"}</button>
        <div  onClick={toogelsignin} className=' text-white'>{isSignedin?"Already registered user login":"new user? signup"}
        </div>
        </div>

       
      
      </form>
      </div>
    </div>
  )
}

export default Login
