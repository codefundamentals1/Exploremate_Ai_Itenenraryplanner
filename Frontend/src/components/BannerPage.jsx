import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const BannerPage = () => {

  
  return (

    <div className=' bg-[#1a1a92db] w-full py-[100px]' >
    <div className='max-w-[1240px]  my-[150px] mx-auto text-center'>
      <div className='font-bold text-black text-3xl'>
        Explore with
      </div>
      <div className= ' mt-2 text-white font-bold text-[70px]'>
Expolremate
      </div>
      <div className= 'mt-3 text-[50px] text-white font-bold ' >
        Explore 
        <ReactTyped strings={[" Anything on Expolrem@te" , " with friends" ,"The Places",]} 
        typeSpeed={100}
        loop ={true}
        backSpeed={120}
        backDelay={100}
       
         />
         
        

      </div>
      <Link to= 'main'>   
       <button type="button" className= " m-4 text-white   hover:bg-blue-800   border border-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Get Started
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
</Link>
  

    </div>
    </div>
  )
}

export default BannerPage