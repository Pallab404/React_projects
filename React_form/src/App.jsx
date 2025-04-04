
import { useState } from 'react'
import './App.css'

function App() {
  const [formData , setFormData] = useState({
    firstName:"",lastName:"",email:"",password:"",comments:"",isVisible:false , mode:"" , favcar:""
  });

  console.log(formData)

  const changeHandler=(e)=>{

    const {name,checked,value,type} = e.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,

        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className='flex justify-center items-center w-[100vw] h-[100vh] flex-col'>
        <div>
          <h1 className='text-[30px] text-[#3159be]'>React Form</h1>
        </div>
        <div>
          {/* the value attribute is used to maintain the state of each input tag */}
          <form onSubmit={submitHandler} 
          className='flex justify-center items-center flex-col border-none rounded-[10px] w-[400px] mt-4 p-[20px] bg-purple-300'>


            <input onChange={changeHandler} name='firstName' value={formData.firstName} type="text" required placeholder='First name' className='mt-3 p-[10px]  w-[100%] rounded-sm outline-none' />


            <input onChange={changeHandler} name='lastName' value={formData.lastName} type="text" required placeholder='Last name' className='mt-3 p-[10px]  w-[100%] rounded-sm outline-none' /> 


            <input onChange={changeHandler} name='email' value={formData.email} type="email"  required placeholder='abc@gmail.com' className='mt-3 p-[10px]  w-[100%] rounded-sm outline-none'/>
            <input onChange={changeHandler} name='password' type="password" required  placeholder='password' className='mt-3 p-[10px]  w-[100%] rounded-sm outline-none'/>

            
            <textarea onChange={changeHandler} name="comments" value={formData.comments} placeholder='enter your text' className='mt-3 p-[10px] w-[100%] rounded-sm outline-none'></textarea>

            {/* checkbox */}
            <div className='mt-[10px]'>
              <input type="checkbox"
               checked ={formData.isVisible}
               name="isVisible" onChange={changeHandler} value={formData.isVisible} id='isvisible' />
              <label htmlFor="isvisible" className='text-base text-gray-600 ml-[10px]' >Am i visible</label>
            </div>

            {/* radio button */}
            <div className='mt-2'>
              <input type="radio" name='mode' id='onOFF' onChange={changeHandler} value="online" checked={formData.mode === "online"}/>
              <label htmlFor="onOFF" className='ml-[10px] text-base text-gray-600'>Online</label>
            </div>
            <div>
              <input type="radio" name='mode' id='onOFF' onChange={changeHandler} value="offline"
              checked={formData.mode === "offline"}/>
              <label htmlFor="onOFF" className='ml-[10px] text-base text-gray-600'>Offline</label>
            </div>

            {/* dropdown menu */}
            <div>
              <label htmlFor="favcar" className='mr-[10px] text-base text-gray-600'>Your fav car</label>
              <select name="favcar" id="favcar" value={formData.favcar} onChange={changeHandler}>
                <option value="scorpio">Scorpio</option>
                <option value="fortuner">Fortuner</option>
                <option value="thar">Thar</option>
                <option value="legender">Legender</option>
              </select>
            </div>

            <button className='mt-5 p-[10px] bg-purple-900 text-white border-none rounded-[10px]'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
