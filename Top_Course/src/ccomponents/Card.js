import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({course,likedCourse,setLikedCourse}) => {
  function clickHandler(){
    // console.log("liked course" , likedCourse);
    if((Array.isArray(likedCourse))&&(likedCourse.includes(course.id))){
      //pehle se liked hai
      setLikedCourse((prev)=>{
        prev.filter((cid)=> (cid !== course.id))
      })
      toast.warning("liked removed");
    }
    else{
      setLikedCourse((prev)=>
        Array.isArray(prev) ? [...prev,course.id] : [course.id]
      )
      toast.success("liked successfully...")
    }
  }


  return (
    <div className='w-[300px] bg-bgDark rounded-ms overflow-hidden '>
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='absolute w-[30px] h-[30px] rounded-full bg-white right-2 grid place-content-center bottom-[-13px]'>
            <button onClick={clickHandler}>
              {
               (Array.isArray(likedCourse))&&(likedCourse.includes(course.id)) ? (<FcLike fontSize="1.5rem"/>) : (<FcLikePlaceholder fontSize="1.5rem"/>)
              }  
            </button>
        </div>
      </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
              {
                course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
              }
              </p>
        </div>
    </div>
  )
}

export default Card
