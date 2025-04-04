import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


const Testimonials = ({reviews}) => {
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 <0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1)
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length)
        {
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }

    function surpriceHandler(){
        let randomIndex = Math.floor(Math.random()* reviews.length);
        setIndex(randomIndex)
    }
  return (
    <div className="w-[600px] bg-white rounded-md mt-12 relative flex flex-col items-center">
      <Card reviews={reviews[index]}/>

      <div className="flex flex-row justify-center w-[100%]">

        <button onClick={leftShiftHandler}
        className="mr-2 text-2xl text-purple-500"><FiChevronLeft/></button>
        <button onClick={rightShiftHandler}
        className="ml-2 text-2xl text-purple-500"><FiChevronRight></FiChevronRight></button>
      </div>
      <div className='py-4'>
        <button onClick={surpriceHandler} 
        className="bg-purple-400 font-bold py-2 px-8 text-white rounded-md transition ease-in-out delay-75 hover:bg-purple-600 ">Surprice Me</button>
      </div>
    </div>
  )
}

export default Testimonials
