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
    <div className='font-semibold capitalize  text-gray-900 bg-gradient-to-r from-[#48abec] to-[#6773b4] w-full h-full min-h-screen '>
        <h1 className='text-4xl   text-[#314ce0]  cursor-pointer text-center '>Link<span className='text-pink-500 '>Short</span></h1>   
        <div className="max-w-3xl mx-auto mt-4 rounded-lg border border-yellow-300 bg-yellow-50 px-5 py-4 shadow-sm">
  <h1 className="text-center text-sm md:text-base font-medium text-yellow-900 leading-relaxed">
    <span className="font-bold">⚠️ Note:</span> If you created your account using your
    <span className="font-semibold"> Name, Email, and Password</span>, please continue
    signing in with the <span className="font-semibold">Email & Password</span> option.
    Avoid using <span className="font-semibold">Google Sign-In</span> with the same
    email address, as it may create a separate account or prevent access to your
    existing account.
  </h1>
</div>
      <div className='flex justify-center  items-center mt-20 '>
      
      
        <form onSubmit={Submit} className='flex justify-center items-center flex-col gap-6 p-2 md:p-7 xl:p-7 lg:p-7 rounded-xl  bg-white shadow-2xs'>
          {type=="Sign up"&&
          <div className='flex  items-center gap-5 flex-col'>
            
          <div>
            <label className='text-xl  text-blue-700' htmlFor='name'>Enter Name</label>
          </div>
          <div>
            <input  className=' border border-gray-500 px-7 py-1  rounded-lg'autoComplete='none'  onChange={Onchangehandler} name="name" value={Authdata.name} type="text"placeholder='Full Name 'required id="name"/>
          </div>
          </div>}
         
          <div className='flex items-center gap-5 flex-col'>
         
          <div>
            <label  className='text-xl  text-blue-700'  htmlFor='email'>Enter Email</label>
          </div>
          <div>
            <input autoComplete='none'    className=' border border-gray-500 px-7 py-1  rounded-lg ' onChange={Onchangehandler} name="email" value={Authdata.email} type="email"placeholder='Email Id'required id="email"/>
          </div>
          </div>
          <div className='flex  items-center gap-5 flex-col'>
          <div>
            <label className='text-xl  text-blue-700' htmlFor='password'>Password</label>
          </div>
          <div>
            <input autoComplete='none' className=' border border-gray-500 px-7 py-1  rounded-lg    ' onChange={Onchangehandler} name="password" value={Authdata.password} type="password"placeholder='Enter Password'required id="password"/>
          </div>
          </div>
          
          <div className='flex flex-col gap-5 justify-center items-center'>
        
            {type==="Sign up"?
            <div>
            <button className='text-[#247cb6] hover:underline' type="button" onClick={()=>dispatch(control.settype("login"))}>Already have a account</button>
            </div>
            :
            <div>
            <button className='text-[#247cb6] hover:underline' onClick={()=>dispatch(control.settype("Sign up"))} type="button">Create a new account</button>
            </div>}
           {type==="Sign up"?
           <div>
          
           <button className='bg-[#247cb6] hover:scale-110 transition ease-in-out duration-150 py-2 px-9 text-white rounded-3xl ' type='submit'>Sign Up</button>
           </div>
           :
           <div>
           <button className='bg-[#247cb6] hover:scale-110 transition ease-in-out duration-150 py-2 px-9 text-white rounded-3xl ' type='submit'>Sign in </button>
           </div>
           }
           {type==="login"&&
              <div>
              <button  className='flex justify-center items-center gap-4 bg-white px-7 py-2  text-gray-900 border border-gray-400 rounded-xl hover:scale-110 transition ease-in-out duration-300   ' type="button" onClick={GoogleLogin}> <span className='text-2xl'><FcGoogle/></span>Continue with Google </button>
              </div>}
         
          </div>
        </form>
     
     
      </div>
      
    </div>
  )
}

export default Signup
