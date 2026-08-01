import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import {toast} from "react-hot-toast"
import { control } from '../store/slice'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import  {auth}  from '../../firebase.js'
const Signup = ({url}) => {
    const dispatch=useDispatch();
    const Authdata=useSelector(state=>state.main.Authdata);
    const type=useSelector(state=>state.main.type);
    const backendemail=useSelector(state=>state.main.backendemail);
    const Onchangehandler=(e)=>{
      dispatch(control.setAuthdata({
        name:e.target.name,
        value:e.target.value
      }))

    }
    const Fetch=async()=>{
      try {
        const res=await axios.get(url+"/api/auth/profile",{
          
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
    
    const Submit=async(e)=>{
      e.preventDefault();
      let newurl=url;
      if(type==="login"){
        newurl=newurl+"/api/auth/login"
      }
      else{
        newurl=newurl+"/api/auth/signup"
      }
      try {
         const response=await axios.post(newurl,Authdata,{
            withCredentials:true
        });

    if(response.data.status){
       
          if(type==="login"){
          const res=await axios.get(url+"/api/auth/profile",{
            withCredentials:true,
        })
        if(res.data.status){
            dispatch(control.setbackendemail(res.data.email));
       }
        else{
            dispatch(control.setbackendemail(""));
        
        }
       
       
          }
        
       
        
        toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
      } catch (error) {
        console.log("backend server error while authentication ",error)
        
      }
   

    }
    const GoogleLogin=async(e)=>{
      e.preventDefault();
      const provider=new GoogleAuthProvider();
      const result=await signInWithPopup(auth,provider);
      try {
        const res=await axios.post(url+"/api/auth/google_signin",
          {
            email:result.user.email,
            name:result.user.displayName
          
          },
          
          {
            withCredentials:true
          }

        );
        if(res.data.status){
          toast.success(res.data.message);
          Fetch();
          dispatch(control.setbackendemail(res.data.email));
        }
        else{
        toast.error(res.data.message);
        }
        
      } catch (error) {
        console.log("goolge login server error",error);
        
      }

    }
  return (
    <div className='font-semibold capitalize h-screen text-gray-900 '>
      <div className='flex justify-center items-center h-screen'>
        <form onSubmit={Submit} className='flex justify-center items-center flex-col gap-6 border-2 p-15 rounded-xl bg-[#cfd6d8] shadow-2xs'>
          {type=="Sign up"&&
          <div className='flex  items-center gap-5 flex-col'>
            
          <div>
            <label className='text-xl  text-[#6a58e0]' htmlFor='name'>Enter Name</label>
          </div>
          <div>
            <input className=' border-2 border-amber-900 px-7 py-3  rounded-lg  focus:ring-2 ring-blue-600  ' onChange={Onchangehandler} name="name" value={Authdata.name} type="text"placeholder='Full Name 'required id="name"/>
          </div>
          </div>}
         
          <div className='flex items-center gap-5 flex-col'>
         
          <div>
            <label  className='text-xl  text-[#6a58e0]'  htmlFor='email'>Enter Email</label>
          </div>
          <div>
            <input className=' border-2 border-amber-900 px-7 py-3  rounded-lg  focus:ring-2 ring-blue-600  ' onChange={Onchangehandler} name="email" value={Authdata.email} type="email"placeholder='Email Id'required id="email"/>
          </div>
          </div>
          <div className='flex  items-center gap-5 flex-col'>
          <div>
            <label className='text-xl  text-[#6a58e0]' htmlFor='password'>Password</label>
          </div>
          <div>
            <input className=' border-2 border-amber-900 px-7 py-3  rounded-lg  focus:ring-2 ring-blue-600  ' onChange={Onchangehandler} name="password" value={Authdata.password} type="password"placeholder='Enter Password'required id="password"/>
          </div>
          </div>
          
          <div className='flex flex-col gap-5 justify-center items-center'>
        
            {type==="Sign up"?
            <div>
            <button className='bg-[#776f77] hover:scale-110 transition ease-in-out duration-150 p-2 px-9 rounded-lg text-white ' type="button" onClick={()=>dispatch(control.settype("login"))}>Already have a account</button>
            </div>
            :
            <div>
            <button className='bg-[#776f77] hover:scale-110 transition ease-in-out duration-150 p-2 px-9 rounded-lg text-white ' onClick={()=>dispatch(control.settype("Sign up"))} type="button">Create a new account</button>
            </div>}
           {type==="Sign up"?
           <div>
          
           <button className='bg-[#210F37] hover:scale-110 transition ease-in-out duration-150 py-2 px-9 text-white rounded-3xl ' type='submit'>Sign Up</button>
           </div>
           :
           <div>
           <button className='bg-[#210F37] hover:scale-110 transition ease-in-out duration-150 py-2 px-9 text-white rounded-3xl ' type='submit'>Sign in </button>
           </div>
           }
           {type==="login"&&
              <div>
              <button  className='flex justify-center items-center gap-4 bg-gray-400 p-4 text-gray-900 rounded-xl hover:scale-110 transition ease-in-out duration-150   ' type="button" onClick={GoogleLogin}> <span className='text-2xl'><FcGoogle/></span>Continue with Google </button>
              </div>}
         
          </div>
        </form>
     
     
      </div>
      
    </div>
  )
}

export default Signup
