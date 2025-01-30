import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
const [isloggedin, setisLoggedin] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flrx flex-col">
      <Navbar isLoggedin={isloggedin} setIsLoggedIn={setisLoggedin} />

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element={<Login setisLoggedin={setisLoggedin}/>}/>
        <Route path="/signup" element={<Signup setisLoggedin={setisLoggedin}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
    
  );
}
 
export default App;
