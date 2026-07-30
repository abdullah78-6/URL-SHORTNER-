import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { control } from '../store/slice'
import axios from "axios"
import toast from 'react-hot-toast'
const Url = ({url}) => {
    const frontendurl=useSelector(state=>state.main.frontendurl);
    const dispatch=useDispatch();
    const trimedurl=useSelector(state=>state.main.trimedurl);
    const Submiturl=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post(url+"/short",
                {frontendurl},
                    
                { 
                    withCredentials:true,
                },
            );
            if(res.data.status){
                toast.success(res.data.message);
                dispatch(control.settrimedurl(res.data.url));
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log("url short server error",error);
            
        }

    }
  return (
    <div>
        <div>
            <form onSubmit={Submiturl}>
                <div>
                    
                    <div>
                        <label htmlFor='url'>Enter long url</label>
                    </div>
                    <div>
                        <input onChange={(e)=>dispatch(control.setfrontendurl(e.target.value))} id="url" type="text" placeholder='Enter Long Url' required/>
                    </div>
                </div>
                <div>
                    <button type="submit">Short Url</button>
                </div>
            </form>
        </div>
        <div>
            {/* {trimedurl?<a href={trimedurl} target="_blank">Trimed url</a>:<></>} */}
            <a href={trimedurl} target='_blank'>{trimedurl}</a>
           
        </div>
   
    </div>
  )
}

export default Url
