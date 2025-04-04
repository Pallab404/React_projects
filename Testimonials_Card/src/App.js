import React from 'react'
import Tesitimonials from './Components/Testimonials'
import reviews from './data'

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-[100vh] bg-slate-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold ">Our Testimonials</h1>
      </div>
      <div className="w-[10%] border-b-4 border-purple-400 mt-1"></div>
      <Tesitimonials reviews={reviews}/>
    </div>
  )
}

export default App