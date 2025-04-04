import React, { useEffect, useState } from "react";
import Navbar from "./ccomponents/Navbar";
import Filter from "./ccomponents/Filter";
import Cards from "./ccomponents/Cards";
import Spinner from "./ccomponents/Spinner";
import {apiUrl,filterData} from "../src/data";
import { toast } from "react-toastify";

function App(){
  const [courses,setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [categury,setCategury] = useState(filterData[0].title) // bydefault it is all categury .. 

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let response = await res.json();
      setCourses(response.data);   //data is the key , if u see the response in the console u'll see the data key;
      // console.log(courses);
    } catch (error) {
      toast.error("Backend is down");
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();

  },[]);

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} 
                categury={categury} 
                setCategury={setCategury}/>
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          (!loading && courses) ? ( <Cards courses = {courses} categury ={categury}/>) : (<Spinner/>) 
        }
       
      </div>

    </div>
  )
}

export default App;