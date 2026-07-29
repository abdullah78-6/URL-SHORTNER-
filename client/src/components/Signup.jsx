import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import {toast} from "react-hot-toast"
import { control } from '../store/slice'
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
          console.log("login oura hua ",res.data.email);
        }

      } catch (error) {
        console.log("fetch profile server",error);
        
      }
      
    }
    useEffect(()=>{
      Fetch();

    },[])
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
        }
        else{
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("logout server",error);
        
      }
    }
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
            console.log("login oura hua ",res.data.email);
        
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
    const GoogleLogin=async()=>{

    }
  return (
    <div>
      <div>
        <form onSubmit={Submit}>
          {type=="Sign up"&&
          <div>
            
          <div>
            <label htmlFor='name'>Enter Name</label>
          </div>
          <div>
            <input onChange={Onchangehandler} name="name" value={Authdata.name} type="text"placeholder='Full Name 'required id="name"/>
          </div>
          </div>}
         
          <div>
         
          <div>
            <label htmlFor='email'>Enter Email</label>
          </div>
          <div>
            <input onChange={Onchangehandler} name="email" value={Authdata.email} type="email"placeholder='Email Id'required id="email"/>
          </div>
          </div>
          <div>
          <div>
            <label htmlFor='password'>Password</label>
          </div>
          <div>
            <input onChange={Onchangehandler} name="password" value={Authdata.password} type="password"placeholder='Enter Password'required id="password"/>
          </div>
          </div>
          
          <div className='flex flex-col gap-5 justify-center items-center'>
        
            {type==="Sign up"?
            <div>
            <button type="button" onClick={()=>dispatch(control.settype("login"))}>Already have a account</button>
            </div>
            :
            <div>
            <button onClick={()=>dispatch(control.settype("Sign up"))} type="button">Create a new account</button>
            </div>}
           {type==="Sign up"?
           <div>
          
           <button type='submit'>Sign Up</button>
           </div>
           :
           <div>
           <button type='submit'>Sign in </button>
           </div>
           }
           {type==="login"&&
              <div>
              <button type="button" onClick={GoogleLogin}>Continue with Google</button>
              </div>}
         
          </div>
        </form>
     {backendemail?<button onClick={Logout}>Logout</button>:<></>}
     {backendemail?<h1>{backendemail.email}</h1>:<></>}
      </div>
      
    </div>
  )
}

export default Signup
