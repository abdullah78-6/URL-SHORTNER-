import { db } from "../utils/db.js"
const Geturl=async(req,res)=>{
    const {userid}=req.body;
    try {
    const [rows]=await db.query(
    "SELECT urls FROM users WHERE id=?",[userid]
    )
    res.json({status:true,url:rows});
    
    
        
    } catch (error) {
        console.log("get url error",error.message);
        
    }

}
const Deleteurl=async(req,res)=>{
    const {url2,userid}=req.body;
    try {
    const [rows]=await db.query(
     "UPDATE  users SET urls='' WHERE id=?",[userid]
    )
      return res.json({status:true,message:"History Deleted"});  
        
    } catch (error) {
        console.log("delete url error",error);
        
    }

}
export {Geturl,Deleteurl}