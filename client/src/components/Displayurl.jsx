import React, { useEffect } from 'react'
import axios from "axios"
import { control } from '../store/slice'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
const Displayurl = ({url}) => {
const dispatch=useDispatch();
const date=new Date();
const backendemail=useSelector(state=>state.main.backendemail);
const allurls=useSelector(state=>state.main.Historyurl);
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
    <div>
        <h1>RECENT URLs OF CURRENT AND OLD DATES {date.toLocaleString()}</h1>
        <div>
            
    {backendemail&&allurls
    
    .map((i,index)=>(
        <div key={index}>

            <div>
        <h1 className='cursor-text'>{i.urls}</h1>
        </div>
        <div>
     {i.urls?<button onClick={()=>Deleteurl(i.urls)}>Delete History</button>:<></>}
        </div>
        </div>
    ))}    
      </div>
    </div>
  )

}

export default Displayurl

