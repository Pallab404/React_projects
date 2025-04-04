import React from 'react'
import {FaQuoteLeft, FaQuoteRight, } from 'react-icons/fa'

const Card = ({reviews}) => {
  return (
    <div className="flex flex-col items-center w-[100%] p-10 justify-center">
      <div className="absolute top-[-4rem] left-7 rounded-full">
         <img className="aspect-square h-[140px] w-[140px] rounded-full z-[20] " 
         src={reviews.image} alt="not available"/>
        <div className='h-[140px] w-[140px] rounded-full absolute top-[-6px] bg-purple-600 z-[-10]'></div>
      </div>
      <div className="text-xl font-bold capitalize">
        <p>{reviews.name}</p>
      </div>
      <div className="text-purple-400  text-sm uppercase">
        <p>{reviews.job}</p>
      </div>
      <div className="text-purple-600 mt-5 mx-auto">
        <FaQuoteLeft/>
      </div>
      <div className='text-slate-500 text-center mt-4'>
        {reviews.text}
      </div>
      <div className="text-purple-600 pt-3 mt-5">
        <FaQuoteRight/>
      </div>  
    </div>
  )
}

export default Card
