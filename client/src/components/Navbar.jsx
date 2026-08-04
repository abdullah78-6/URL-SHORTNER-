import React from 'react'
import { control } from '../store/slice'
import {easeInOut, motion,AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from 'react-redux'
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios"
import {toast} from "react-hot-toast"
import { RxCross2 } from "react-icons/rx";
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
  const mobilemenu=useSelector(state=>state.main.mobilemenu);
  return (
    <div className='font-semibold p-4 capitalize bg-gradient-to-r from-[#48abec] to-[#6773b4] text-white'>
      
      <div className='flex justify-between items-center' >
          <h1 onClick={()=>dispatch(control.setnavclass(""))} className='text-4xl text-[#314ce0] cursor-pointer'>Link<span className='text-pink-500'>Short</span></h1>
    
      
        <ul className=' hidden lg:flex justify-center items-center gap-35 capitalize text-xl       xl:flex justify-center items-center gap-35 capitalize text-xl'>
        <a href="#pricing" onClick={()=>dispatch(control.setnavclass("one"))} className={`${navclass==="one"?"border-b-4 border-pink-500  cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`}>pricing</a>
        <a href="#tools" onClick={()=>dispatch(control.setnavclass("two"))} className={`${navclass==="two"?"border-b-4 border-pink-500 cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`}  >tools</a>
        <a href="#help" onClick={()=>dispatch(control.setnavclass("three"))} className={`${navclass==="three"?"border-b-4 border-pink-500 cursor-pointer hover:text-blue-300  transition ease-in-out duration-200":"cursor-pointer hover:text-blue-300 hover:underline transition ease-in-out duration-200"}`} >help</a>
        </ul>
        
      
        <div className='flex justify-between items-center gap-8'>
        <div className='hidden xl:block lg:block'>
         {backendemail?<button className='bg-cyan-900 rounded-xl text-xl hover:bg-cyan-950 transition ease-in-out duration-200 p-2' onClick={Logout}>Logout</button>:<></>}

           
           </div>
           <div className='hidden xl:block lg:block' >
            <h1 className='bg-white hover:text-white hover:bg-cyan-900  transition ease-in-out duration-200 cursor-pointer text-cyan-900 text-2xl rounded-4xl  w-12 h-12 flex justify-center items-center' ><span>{backendemail.email.slice(0,1)}</span></h1> 
           </div>
           <div className='xl:hidden lg:hidden text-gray-700 text-4xl font-bold'>
        {mobilemenu?
         <motion.button 
           key="cross"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ duration: 0.3 }}
                       aria-label="Close menu"
                      className='text-[#D91656]'
          onClick={()=>dispatch(control.setmobilemenu(false))}><RxCross2 className='text-4xl '/></motion.button>: 
        <motion.button 
         key="hamburger"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Open menu"
                     className='text-[#36ADA3]'
        
        onClick={()=>dispatch(control.setmobilemenu(true))}><GiHamburgerMenu className='text-4xl' /></motion.button>}
          </div>
           </div>
           </div>
           {mobilemenu&&
           <AnimatePresence>
           <motion.div 
           key="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
           className='xl:hidden lg:hidden  relative'>
            <div className=' mt-2 gap-5 text-2xl capitalize 
              flex flex-col items-center 
              rounded-2xl border border-white/10
              bg-blue-500 backdrop-blur-xl
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
              overflow-hidden
              absolute left-4 right-4 top-[calc(100%+0.75rem)]
              p-2
            '>
              <a href="#pricing" onClick={()=>dispatch(control.setmobilemenu(false))} className='    flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer select-none text-white/80 capitalize tracking-wide transition-colors duration-200 hover:bg-white/5 hover:text-pink-600' >pricing</a>
              <a href="#tools" onClick={()=>dispatch(control.setmobilemenu(false))} className='    flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer select-none text-white/80 capitalize tracking-wide transition-colors duration-200 hover:bg-white/5 hover:text-pink-600'  >tools</a>
              <a href="#help" onClick={()=>dispatch(control.setmobilemenu(false))} className='    flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer select-none text-white/80 capitalize tracking-wide transition-colors duration-200 hover:bg-white/5 hover:text-pink-600'  >help</a>
              <div className='flex justify-center items-center gap-9 flex-wrap '>
                <div>
           {backendemail?<button className='bg-pink-600 rounded-xl text-xl hover:bg-pink-900 transition ease-in-out duration-200 p-2' onClick={Logout}>Logout</button>:<></>}   
           </div>
           <div>
           <h1 className='bg-white hover:text-white hover:bg-cyan-900  transition ease-in-out duration-200 cursor-pointer text-cyan-900 text-2xl rounded-4xl  w-12 h-12 flex justify-center items-center' ><span>{backendemail.email.slice(0,1)}</span></h1> 
           </div>
           </div>
            </div>
            
            </motion.div>
            </AnimatePresence>
            }
               
    </div>
  )
}

export default Navbar
