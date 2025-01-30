import React from 'react'
import { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { NavLink,useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({setisLoggedin}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({email:'',password:''})
    const changeHandler=(e)=>{
        setFormData(prevData=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }

    const[showPassword, setShowPassword] = useState(false)
    const submitHandler=(e)=>{
        e.preventDefault()
        setisLoggedin(true)
        toast.success('Logged in')
        navigate('/dashboard')

    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p className='text-white mt-3'>Email Address  <sup className='text-red-500'>*</sup></p>
            <input required type="email" value={formData.email} name='email' onChange={changeHandler}
            placeholder='abc@gmail.com' className='w-[100%] mt-2 rounded-[5px] p-1 outline-none bg-richblack-700 text-white' />
        </label>
        <label className='relative'>
            <p className='text-white mt-2'>Password <sup className='text-red-500'>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} value={formData.password} name='password' onChange={changeHandler}
            placeholder='password' className='w-[100%] mt-2 rounded-[5px] p-1 outline-none bg-richblack-700 text-white' />
            <span className='text-white absolute mt-4 right-3 cursor-pointer '
             onClick={()=>{
                setShowPassword(!showPassword)
            }}>{showPassword? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}</span>
            <NavLink to="#">
                <p className='text-blue-400 mt-1 text-[13px] max-w-max ml-auto'>Forgot Password</p>
            </NavLink>
        </label>
        <button className='w-full bg-yellow-400 text-black rounded-[4px] mt-5 p-1'>Sign In</button>
    </form>
  )
}

export default LoginForm
