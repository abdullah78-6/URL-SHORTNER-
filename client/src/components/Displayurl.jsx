import React, { useEffect } from 'react'
import axios from "axios"
import { control } from '../store/slice'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import {motion} from "motion/react"
const Displayurl = ({url}) => {
const dispatch=useDispatch();
const date=new Date();
const backendemail=useSelector(state=>state.main.backendemail);
const allurls=useSelector(state=>state.main.Historyurl);
const trimedurl=useSelector(state=>state.main.trimedurl);
const Fetch=async()=>{
    const res=await axios.get(url+"/api/url/get_url",{
        withCredentials:true
    })
    if(res.data.status){
        dispatch(control.setHistoryurl(res.data.url));
        
        
    }

}
const Deleteurl=async(url2)=>{
    if(!url2){
        toast.error("There Is No Records");
        return ;
    }
    const res=await axios.post(url+"/api/url/del_url",
        {
            url2:url2
        },
        {
     withCredentials:true
        }
        
    )
  
        toast.success(res.data.message);
        Fetch();
}
useEffect(()=>{
Fetch();

},[])
  return (
  <motion.div
  initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 5, y: 0 }}
    transition={{ duration: 0.6, delay:  0.15 }}
    viewport={{ once: false }}
   className="max-w-6xl mx-auto px-4 py-10">

    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#314ce0]">
        Recent <span className="text-pink-500">URLs</span>
      </h1>

      <p className="mt-2 text-gray-600 text-sm md:text-base">
        Current & Previous URLs
      </p>

      <p className="mt-1 text-xs md:text-sm text-gray-500">
        {date.toLocaleString()}
      </p>
    </div>

    <div className={`mt-10 space-y-5 `}>
    
      {backendemail && 
        allurls.map((i, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 ${i.urls===""?"hidden":""}`}
          >

            <div className="flex-1">
              <h2 className="text-sm font-medium text-gray-500 mb-2">
                Short URL's
              </h2>

              <h1 className="break-all cursor-text text-[#314ce0] font-medium text-sm md:text-base">
                {i.urls}
              </h1>
            </div>

            <div className="flex justify-center md:justify-end">
              {i.urls ? (
                <button
                  onClick={() => Deleteurl(i.urls)}
                  className="px-5 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition duration-300"
                >
                  Delete History
                </button>
              ) : (
                <></>
              )}
            </div>

          </div>
        ))}

    </div>

  </motion.div>
);

}

export default Displayurl

