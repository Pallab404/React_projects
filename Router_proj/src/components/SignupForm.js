import React from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'



const SignupForm = ({setisLoggedin}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({firstname:'',lastname:'',email:'',password:'', confirmPassword:''})
    const changeHandler=(e)=>{
        setFormData(prevData=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false)

    const submitHandler=(e)=>{
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error('Passwords do not match')
            return
        }
        
        const form ={
            ...formData,
            accountType
        }
        setisLoggedin(true)
        console.log(form)
        toast.success('Account created successfully')
        navigate('/dashboard')
    }

    const [accountType,setAccountType] = useState("student")
  return (
    <div className='w-full'>
      {/* student instructor tab */}
      <div className='flex bg-richblack-700 p-1 gap-x-1 rounded-full max-w-max mt-2 '>
        <button className={`${accountType === "student"? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
        onClick={()=> setAccountType("student")}>Student</button>
        <button className={`${accountType === "instructor"? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
        onClick={()=> setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='flex items-center gap-x-3 w-full mt-1'>
            <label  className='w-full '>
                <p className='text-white'>First Name <sup className='text-red-500'>*</sup></p>
                <input required type="text" name='firstname' value={formData.firstname} onChange={changeHandler} placeholder='first name'  className=' mt-1 rounded-[5px] w-full p-1 outline-none bg-richblack-700 text-white' />
            </label>
            <label className='w-full'>
                <p className='text-white'>Last Name <sup className='text-red-500'>*</sup></p>
                <input required type="text" name='lastname' value={formData.lastname} onChange={changeHandler} placeholder='Last name'  className='w-full mt-1 rounded-[5px] p-1 outline-none bg-richblack-700 text-white' />
            </label>
        </div>
        <label>
            <p className='text-white mt-1'>Email Address  <sup className='text-red-500'>*</sup></p>
            <input required type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='abc@gmail.coms'
             className='w-[100%] mt-1 rounded-[5px] p-1 outline-none bg-richblack-700 text-white'/>
        </label>

        <div className='flex items-center w-full mt-1 gap-x-3'>
            <label className='relative w-full'>
                <p className='text-white'>Password <sup className='text-red-500'>*</sup></p>
                <input required type={showPassword?("text") : ("password")} name='password' value={formData.password} onChange={changeHandler} placeholder='password'  className='w-[100%] mt-1 rounded-[5px] p-1 outline-none bg-richblack-700 text-white' />
                <span className='absolute text-white mt-4 right-2' 
                onClick={()=>{
                    setShowPassword(!showPassword)
                }}>{showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}</span>
            </label>
            <label className='relative w-full'>
                <p className='text-white'>Confirm Password <sup className='text-red-500'>*</sup></p>
                <input required type={showPassword?("text") : ("password")} name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='confirm password'  className='w-[100%] mt-1 rounded-[5px] p-1 outline-none bg-richblack-700 text-white'/>
                <span className='absolute text-white mt-4 right-2' onClick={()=>{
                    setShowPassword(!showPassword)
                }}>{showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}</span>
            </label>
        </div>
        <button className='w-full bg-yellow-400 text-black rounded-[4px] mt-5 p-1'>Create Account</button>
        
      </form>
    </div>
  )
}

export default SignupForm
