import React from 'react'
import logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedin = props.isLoggedin;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <NavLink to="/Dashboard">
            <img src={logo} alt="" width={160} height={60} loading='lazy' />
        </NavLink>

        <nav className='text-white'>
            <ul className='flex gap-5'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>

        </nav>

        <div className='flex gap-x-4 items-center'>
            {
                !isLoggedin &&
                <NavLink to="/login" >
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>Log in</button>
                </NavLink>
            }

            {
                !isLoggedin &&
                <NavLink to="/signup" >
                    <button onClick={()=>{
                        setIsLoggedIn(false)
                    }} className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '
                    >Sign up</button>
                </NavLink>
            }

            {
                isLoggedin &&
                <NavLink to="/logout" >
                    <button
                    onClick={()=>{
                        setIsLoggedIn(false)
                        toast.success('Logged out')
                    }} className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '
                    >Logout</button>
                </NavLink>
            }

            {
                isLoggedin &&
                <NavLink to="/dashboard" >
                    <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700 '>Dashboard</button>
                </NavLink>
            }
        </div>
        
    </div>
  )
}

export default Navbar
