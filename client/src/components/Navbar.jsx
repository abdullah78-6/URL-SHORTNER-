import React from 'react'
import { control } from '../store/slice'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import {toast} from "react-hot-toast"
const Navbar = ({url}) => {
  const Logout=async()=>{
      try {
        const res=await axios.post(url+"/api/auth/logout",
          {},
          {
          withCredentials:true
          }
        );
        if(res.data.status){
          toast.success(res.data.message);
          dispatch(control.setbackendemail(""));
          dispatch(control.settrimedurl(""));
        }
        else{
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("logout server",error);
        
      }
    }
  const dispatch=useDispatch();
  const backendemail=useSelector(state=>state.main.backendemail);
  const navclass=useSelector(state=>state.main.navclass);
  return (
    <div className='font-semibold p-4 capitalize bg-gradient-to-r from-[#48abec] to-[#6773b4] text-white'>
      
      <div className='flex justify-between items-center' >
          <h1 onClick={()=>dispatch(control.setnavclass(""))} className='text-4xl text-[#314ce0] cursor-pointer'>Link<span className='text-pink-500'>Short</span></h1>
    
      
        <ul className='flex justify-center items-center gap-35 capitalize text-xl'>
        <li onClick={()=>dispatch(control.setnavclass("one"))} className={`${navclass==="one"?"border-b-4 border-pink-500  cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`}>pricing</li>
        <li onClick={()=>dispatch(control.setnavclass("two"))} className={`${navclass==="two"?"border-b-4 border-pink-500 cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`}  >tools</li>
        <li onClick={()=>dispatch(control.setnavclass("three"))} className={`${navclass==="three"?"border-b-4 border-pink-500 cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`} >help</li>
        </ul>
        
      
        <div className='flex justify-between items-center gap-8'>
        <div>
         {backendemail?<button className='bg-cyan-900 rounded-xl text-xl hover:bg-cyan-950 transition ease-in-out duration-200 p-2' onClick={Logout}>Logout</button>:<></>}

           
           </div>
           <div  >
            <h1 className='bg-white hover:text-white hover:bg-cyan-900  transition ease-in-out duration-200 cursor-pointer text-cyan-900 text-2xl rounded-4xl  w-12 h-12 flex justify-center items-center' ><span>{backendemail.email.slice(0,1)}</span></h1> 
           </div>
           </div>
           </div>
    </div>
  )
}

export default Navbar
