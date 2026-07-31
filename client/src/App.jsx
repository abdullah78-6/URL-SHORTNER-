import Signup from "./components/Signup"
import {Route,Routes,Navigate} from "react-router-dom"
import Url from "./components/Url";
import Home from "./components/Home";
import { control } from "./store/slice";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from "axios"
function App() {
  const backendeurl="http://localhost:9000"
  const backendemail=useSelector(state=>state.main.backendemail);
  const dispatch=useDispatch();
  const Fetch=async()=>{
      try {
        const res=await axios.get(backendeurl+"/api/auth/profile",{
          
          withCredentials:true
        });
        if(res.data.status){
          dispatch(control.setbackendemail(res.data.email));
        }

      } catch (error) {
        console.log("fetch profile server",error);
        
      }
      
    }
    useEffect(()=>{
      Fetch();

    },[])
  
  return <div>
  <Routes>
      <Route path="/Login" element={!backendemail?<Signup url={backendeurl}/>:<Navigate to="/"/>}/>
      <Route path="/" element={backendemail?<Home url={backendeurl}/>:<Navigate to="/Login"/>}/>
    
      
    </Routes>
    <h1>{backendemail.email}</h1>
  </div>


}

export default App
