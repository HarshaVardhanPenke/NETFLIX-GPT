import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignUpForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    
    <div>
        <Header/>
        <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_medium.jpg' alt='bgImage'></img>
        </div>
        <form className='absolute w-3/12 bg-black text-white p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-sm'>
          
          <h1 className='font-semibold text-3xl my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type='text' placeholder='Full Name' className='w-full p-4 my-2 bg-gray-700 opacity-80 rounded-sm' ></input>}
          <input type='email' placeholder='Email Address' className='w-full p-4 my-2 bg-gray-700 opacity-80 rounded-sm' ></input>
          <input type='password' placeholder='Password'className='w-full p-4 my-2 bg-gray-700 opacity-80 rounded-sm'></input>
          <button className='w-full p-2 my-6 bg-red-700 text-white rounded-sm'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a User Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login