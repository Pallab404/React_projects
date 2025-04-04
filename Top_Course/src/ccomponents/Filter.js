import React from 'react'

const Filter = ({filterData,categury,setCategury}) => {

  function clickHandler(title){
    setCategury(title)
    // console.log(title)
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max py-4 justify-center gap-y-4 space-x-4 mx-auto'>
      { filterData?.map( (data)=>{
        return(
            <button className={`text-l px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${categury === data.title ? "bg-opacity-60 border-white" : "border-transparent bg-opacity-40"}`}

             key={data.id} onClick={()=>clickHandler(data.title)}>
                {data.title} 
            </button>
        )
      })}
    </div>
  )
}

export default Filter

