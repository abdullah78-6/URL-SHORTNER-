import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { control } from '../store/slice'
import axios from "axios"
import toast from 'react-hot-toast'
import Barcode from "react-barcode";
import {QRCodeCanvas} from "qrcode.react";
import { FaCopy } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
const Url = ({url}) => {
    const frontendurl=useSelector(state=>state.main.frontendurl);
    const dispatch=useDispatch();
    const trimedurl=useSelector(state=>state.main.trimedurl);
    const backendemail=useSelector(state=>state.main.backendemail);
    const barcode=useSelector(state=>state.main.barcode);
    
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
    const Genrateqr=()=>{
        if(!trimedurl){
            toast.error("PLEASE ENTER A URL");
            return ;
        }
        else{
            dispatch(control.setbarcode(trimedurl));
        }

    }
    const Download=()=>{
        if(!barcode){
            toast.error("Please Genrate A QR");
            return ;
        }
        const canvas=document.querySelector("canvas");
        const pngurl=canvas.toDataURL("images/png");
        const link=document.createElement("a");
        link.href=pngurl;
        link.download="TRIMED_URL_BARCODE.png"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const Deleteqr=()=>{
        dispatch(control.setbarcode(""));

    }
    const Copyurl=()=>{
        if(!trimedurl){
            toast.error("Please Short The Url");
            return ;
        }
        navigator.clipboard.writeText(trimedurl)
        toast.success("Copied");
    }
  return (
    <div>
        <div>
            <form onSubmit={Submiturl}>
                <div className='flex justify-center items-center gap-4 text-xl flex-col'>
                    
                    <div>
                        <label htmlFor='url'>Enter long url</label>
                    </div>
                    <div>
                        <input onChange={(e)=>dispatch(control.setfrontendurl(e.target.value))} id="url" type="text" placeholder='Enter Long Url' required/>
                    </div>
                    <div >
                        <div>
                        {trimedurl?<button type='button' onClick={Copyurl}><FaCopy/></button>:<></>}
                   </div>
                    </div>
                    <div>
                    <button type="submit">Short Url</button>
                </div>
                </div>
                
            </form>
        </div>
        <div>
            <a href={trimedurl} target='_blank'>{trimedurl}</a>
           
           
        </div>
        <div>
          {barcode?<QRCodeCanvas value={barcode}/>:<></>}
        </div>
        <div>
            {barcode?<button onClick={Download}><FaDownload /></button>:<></>}
        </div>
        <div >
            {trimedurl&&!barcode?<button className='flex justify-center items-center gap-3 text-2xl bg-amber-300 p-2 text-lea' onClick={Genrateqr}>Genrate QR <span><FaQrcode /></span></button>:<></>}

        </div>
        <div>
            {barcode?<button  onClick={Deleteqr}>DELETE QR</button>:<></>}
        </div>
        
   
    </div>
  )
}

export default Url
