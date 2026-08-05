import {nanoid} from 'nanoid'
import { db } from "../utils/db.js";
 const urldatabase=new Map();
const Shorturl=async(req,res)=>{
    const {frontendurl,userid}=req.body;
    try {
       if(!frontendurl){
        return res.json({status:false,message:"Long Url Is Required"});
       }
 
       const shortid=nanoid(2);
       urldatabase.set(shortid,frontendurl);
       const shorturl=`https://sv-23d0.onrender.com/${shortid}`;
       const [rows]=await db.query(
        "SELECT urls FROM users WHERE id=?",[userid]
       )
       if(rows.length>0){
        let previousurls=rows[0].urls||"";
        previousurls+=previousurls?","+shorturl:shorturl;
        await db.query(
              "UPDATE users SET urls=? WHERE id=?",
            [previousurls,userid]
        )
       }
       
       return res.json({status:true,message:"Url Size Short Sucessfully",url:shorturl})
       
        
    } catch (error) {
        console.log("url short error",error);
        
    }
    
}
const redirecturl=async(req,res)=>{
    const {id}=req.params;
    const longurl=urldatabase.get(id);
    if(!longurl){
        return res.json({status:false,message:"Url Not Found"});
    }
    res.redirect(longurl);

}
export {Shorturl,redirecturl}
