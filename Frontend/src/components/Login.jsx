import React,{useState} from 'react'
// import {Facebook,GitHub,Google} from '@mui/icons-material'
import { FaFacebook,FaGoogle } from "react-icons/fa6";
import loginBack from "../images/loginback.png"


const Login = () => {

  const [isLogin,setIsLogin] = useState(true);

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const [registerName,setRegisterName] = useState("");
  const [registerAvatar,setRegisterAvatar] = useState("");

  console.log("email is" +loginEmail)
  
  const LoginForm = () => {
    return(
       <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
             <h2 className='p-3 text-3xl font-bold text-pink-400'>Exploremate</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In!</h3>
             <div className='flex space-x-2 m-4 items-center justify-center'>
                <div className="socialIcon">
                <FaFacebook />
                </div>
                <div className="socialIcon">
                <FaGithub/>
                </div>
                <div className="socialIcon">
                <FaGoogle/>  
                </div>
             </div>
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center'>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className="bg-[#3f4bef] hover:bg-[#1f2471]   text-white font-bold py-2 px-6 mb-3 rounded-full">
  Sign in 
</button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
             <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
          </div>
    )
  }
  
  const  SignUpForm = () => {
     return(
        <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
              <h2 className='p-3 text-3xl font-bold text-white'>Horiz</h2>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
             <div className='flex space-x-2 m-4 items-center justify-center'>
                <div className="socialIcon border-white">
                <FaFacebook className="text-white"/>
                </div>
                <div className="socialIcon border-white">
                <FaGitHub className="text-white"/>
                </div>
                <div className="socialIcon border-white">
                <FaGoogle className="text-white"/>  
                </div>
             </div>
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center mt-2'>
             <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Avatar URL'></input>
              <button className="bg-tahiti-900 hover:bg-white text-white font-bold py-2 px-6 mb-3 rounded-full">
  Sign up
</button>

             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
             <p className='text-white mt-4 text-sm'>Already have an account?</p>
             <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
          </div>
     )
  }

  return (
    <div className="bg-[url('/src/images/loginback.png')]  bg-no-repeat  bg-cover flex flex-col items-center justify-center min-h-screen md:py-2">
    <main className="flex items-center w-full px-2 md:px-20">
      <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
        <p className='text-6xl text-blue-500 font-bold'>ExploreM@te</p>
        <p className='font-medium text-lg leading-1 text-pink-400'> Explore with Exploremate </p>
      </div>
      {
        
        isLogin? (
         <LoginForm/>
        ):(
         <SignUpForm/>
        )
      }
    </main>
    </div>
  )
}

export default Login
