import React from 'react'
import frame from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'


const Template = ({title, dec1, dec2, img,formType, setisLoggedin}) => {
  return (
    <div className=' w-11/12 max-w-[1160px] flex justify-between items-start mx-auto gap-x-12 py-12 gap-y-0'>
        <div className='flex flex-col w-11/12 max-w-[480px] p-5 pl-5'>
            <h1 className=' text-white text-3xl font-bold'>{title}</h1>
            <p className=' text-white'>
                <span>{dec1}</span><br />
                <span className='italic text-blue-400'>{dec2}</span>
            </p>

            {formType === 'signup' ? 
            (<SignupForm setisLoggedin={setisLoggedin}/>) : 
            (<LoginForm setisLoggedin={setisLoggedin}/>)}

            <div className='flex items-center gap-1 '>
                <div className='w-[49%] h-[1px] border-[1px] border-richblack-700'></div>
                <p className='text-richblack-700'>or</p>
                <div className='w-[49%] h-[1px] border-[1px] border-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center text-richblack-100 border-richblack-700 rounded-[8px] border p-2 gap-x-1'>
                <FcGoogle/>
                <p>
                Sign in with Google</p></button>
        </div>

        <div className='relative'>
            <img src={frame} alt="" width={400} height={584} loading='lazy'/>
            <img src={img} alt="" width={400} height={498} loading='lazy' className='absolute -top-4 -left-4 '/>
        </div>
    </div>
  )
}

export default Template
