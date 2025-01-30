import React from 'react'
import Template from '../components/Template'
import login from '../assets/login.png'

const Login = ({setisLoggedin}) => {
  return (
    <Template
    title="Welcome Back"
    dec1="Build skills for today, tomorrow, and beyond."
    dec2="Education to future-proof your career."
    img={login}
    formType='login'
    setisLoggedin={setisLoggedin}
    />
  )
}

export default Login
