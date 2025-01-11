import { useState } from "react";
import "./App.css";

function App() {
  const decreaseHandler=()=>{
    setCount(count-1);
  }
  const increaseHandler=()=>{
    setCount(count+1);
  }

  const resetHandler=()=>{
    setCount(0);
  }

  const[count,setCount]=useState(0);


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center flex-col items-center bg-[#344151]" >
      <div className="text-[#0398d4] font-medium text-3xl">Increment & Decrement</div>
      <div className="flex justify-center items-center gap-12 rounded-sm bg-white py-3 text-[25px] my-5 text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 w-20 text-center text-5xl border-[#bfbfbf]"> - </button>
        <div className="text-4xl gap-4 font-bold" >{count}</div>
        <button onClick={increaseHandler}className="border-l-2 w-20 text-center text-5xl border-[#bfbfbf]"> + </button>
      </div>
      <button className="bg-[#0398d4] text-[white] text-[20px] px-4 py-3 rounded-sm w-[100px]" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
