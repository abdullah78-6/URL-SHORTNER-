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
import { motion } from "motion/react";
const Url = ({url}) => {
    const frontendurl=useSelector(state=>state.main.frontendurl);
    const dispatch=useDispatch();
    const trimedurl=useSelector(state=>state.main.trimedurl);
    const backendemail=useSelector(state=>state.main.backendemail);
    const barcode=useSelector(state=>state.main.barcode);
  const mobikemenu=useSelector(state=>state.main.mobilemenu);    
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
  <motion.div
  initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 5, y: 0 }}
    transition={{ duration: 0.6, delay:  0.15 }}
    viewport={{ once: false }}
   className={`min-h-screen bg-gradient-to-b from-[#f8fcff] via-[#eef8ff] to-white px-5 py-12 ${mobikemenu&&"mt-80 lg:mt-0 xl:mt-0"}`}>

    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-100 p-8 md:p-10">

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#314ce0]">Shorten</span>{" "}
          <span className="text-pink-500">Your URL</span>
        </h1>

        <p className="mt-3 text-gray-600">
          Convert long URLs into short, clean and shareable links instantly.
        </p>
      </div>

      <form onSubmit={Submiturl} className="mt-10">

        <div className="space-y-6">

          <div>
            <label
              htmlFor="url"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              Enter Long URL
            </label>

            <input
              id="url"
              type="text"
              required
              placeholder="https://example.com/very-long-url"
              onChange={(e) =>
                dispatch(control.setfrontendurl(e.target.value))
              }
              className="w-full rounded-xl border border-blue-200 px-5 py-3 outline-none focus:border-[#314ce0] focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#314ce0] text-white py-3 rounded-xl font-semibold hover:bg-[#2439c4] transition duration-300"
          >
            Short URL
          </button>

        </div>

      </form>

      {trimedurl && (
        <div className="mt-10">

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Your Short URL
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4">

            <a
              href={trimedurl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 break-all bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-[#314ce0] font-medium"
            >
              {trimedurl}
            </a>

            <button
              type="button"
              onClick={Copyurl}
              className="w-14 h-14 rounded-xl bg-pink-500 text-white flex justify-center items-center hover:bg-pink-600 transition"
            >
              <FaCopy size={20} />
            </button>

          </div>

        </div>
      )}

      {trimedurl && !barcode && (
        <div className="flex justify-center mt-10">

          <button
            onClick={Genrateqr}
            className="flex items-center gap-3 bg-[#314ce0] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2439c4] transition"
          >
            Generate QR
            <FaQrcode />
          </button>

        </div>
      )}

      {barcode && (
        <div className="mt-10 flex flex-col items-center">

          <div className="bg-white p-5 rounded-2xl shadow-lg border border-blue-100">
            <QRCodeCanvas value={barcode} />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <button
              onClick={Download}
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
            >
              <FaDownload />
              Download
            </button>

            <button
              onClick={Deleteqr}
              className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition"
            >
              Delete QR
            </button>

          </div>

        </div>
      )}

    </div>

  </motion.div>
);
}

export default Url
