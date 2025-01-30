import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'

const Signup = ({setisLoggedin}) => {
  return (
    <Template
      title="Join the million learning to code with studyNotion for free"
      dec1="Build skills for today, tomorrow, and beyond."
      dec2="Education to future-proof your career."
      img={signup}
      formType="signup"
      setisLoggedin = {setisLoggedin}
    />
  )
}

export default Signup
