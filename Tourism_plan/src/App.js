import {useState} from 'react';
import Tour from './component/Tour.js';
import data from './data.js';
const App = () => {

  const [tours,setTours] = useState(data);

  const removeTour=(id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  const refreshHandler=()=>{
    setTours(data);
  }

  if (tours.length ===0) {
    return(
      <div className='refresh'>
        <h2>No Tours Left </h2>
        <button className='btn-white' onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }

  return (
      <div>
        <Tour tours={tours} removeTour={removeTour}></Tour>
      </div>
  )};

export default App;
