import React, { useState } from 'react'
import Card from './Card'

const Cards = ({courses,categury}) => {

    const [likedCourse,setLikedCourse] = useState([]);

    const getCourses = ()=>{
        // console.log(courses);
        if(categury === "All"){
            let allCourse =[];
            Object.values(courses).forEach((courseCategury)=>{
                courseCategury.forEach((course)=>{
                    allCourse.push(course);
                })
            })
            return allCourse;
        }
        else{
            // return Array.isArray(courses[categury]) ? courses[categury] : [];
            
            return courses[categury];
        }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses()?.map((course)=>{
                return <Card key={course.id} course={course} likedCourse={likedCourse} setLikedCourse={setLikedCourse} />
            })
        }
    </div>
  )
}

export default Cards
