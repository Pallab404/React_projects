
import { useState } from 'react'
import './App.css'

function App() {
  
  const [formData, setFormData] = useState({
    firstname:"",lastname:"", email:"", country:"",street:"",state:"",pin:"",city:"",comments:false,candidate:false, offer:false ,pushNotification:"", 
  })
  // console.log(formData)
  const changeHandler=(e)=>{
    const {name,value,type,checked} = e.target;
    setFormData(prevData=>{
      return{
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    }
    )
  }

  const subitHandler=(e)=>{
    e.preventDefault();
    console.log(formData);
    
  }

  return (
    <div className='w-[100vw]  bg-slate-300 flex justify-center items-center flex-col'>
      <div>
        <h1 className='text-xl text-purple-700 mb-1'>React Form</h1>
      </div>
      <div className='w-[500px] border-none bg-purple-500 rounded-[10px]' >

        <form onSubmit={subitHandler}
        className='flex justify-center items-start flex-col p-4'>
          <label htmlFor="" className='text-white text-base'>First Name</label>
          <input type="text" name='firstname' value={formData.firstname} placeholder='First Name' onChange={changeHandler}
          className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>Last Name</label>
          <input type="text" name='lastname' value={formData.lastname} placeholder='Last Name' onChange={changeHandler}
           className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>Email Address</label>
          <input type="email" name='email' value={formData.email} placeholder='abc@gmail.com' onChange={changeHandler}
          className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>Country</label>
          <select name="country" id="country" value={formData.country} onChange={changeHandler}
          className='w-[100%] outline-none p-2 rounded-sm'>
            <option value="India">India</option>
            <option value="Usa">Usa</option>
            <option value="Spain">Spain</option>
          </select>

          <label htmlFor="" className='text-white text-base'>Street/Address</label>
          <input type="text" name="street" value={formData.street}
          placeholder='1234 main st' onChange={changeHandler}
           className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>City</label>
          <input type="text" name='city' value={formData.city} placeholder='City' onChange={changeHandler} 
          className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>State</label>
          <input type="text" name='state' value={formData.state} placeholder='State' onChange={changeHandler} 
          className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <label htmlFor="" className='text-white text-base'>Pin</label>
          <input type="text" name='pin' value={formData.pin} placeholder='Pin' onChange={changeHandler} 
          className='w-[100%] outline-none rounded-[2px] p-2 mt-1' />

          <p htmlFor="" className='text-white mt-1 mb-3'>By email</p>

          <div>
            <input type="checkbox" onChange={changeHandler} checked={formData.comments} name='comments' value={formData.comments}/>
            <label htmlFor="" className='text-white ml-2' >Comments</label>
            <p className='text-white ml-5'>Get notified when someone posts a comment on a posting</p>
          </div>
          <div>
            <input type="checkbox" onChange={changeHandler} checked={formData.candidate} name='candidate' value={formData.candidate}/>
            <label htmlFor="" className='text-white ml-2'>Candidates</label>
            <p className='text-white ml-5'>Get notified when a cendidate applies for a job</p>
          </div>
          <div>
            <input type="checkbox" onChange={changeHandler} checked={formData.offer} name='offer' value={formData.offer}/>
            <label htmlFor="" className='text-white ml-2'>Offers</label>
            <p className='text-white ml-5'>Get notified when a cendidate accepts or rejects a offer</p>
          </div>

          <p className='text-white mt-1'>Push Notification</p>
          <p className='text-white mb-2'>Thses are delivered via SMS to your mobile phone</p>
          
          <div>
            <input type="radio" id='eve' name='pushNotification' value="everything" onChange={changeHandler} checked={formData.pushNotification==="everything"} />
            <label htmlFor="eve" className='text-white ml-2'>Everything</label>
          </div>
          <div>
            <input type="radio" id='eve' name='pushNotification' value="Same as Email" onChange={changeHandler} checked={formData.pushNotification==="Same as Email"} />
            <label htmlFor="eve" className='text-white ml-2'>Same as Email</label>
          </div>
          <div>
            <input type="radio" id='eve' name='pushNotification' value="no push notification" onChange={changeHandler} checked={formData.pushNotification ==="no push notification"} />
            <label htmlFor="eve" className='text-white ml-2'>no push notification</label>
          </div>

          <button className='bg-blue-500 text-white p-[10px] border-none rounded-[5px] mt-2'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default App
