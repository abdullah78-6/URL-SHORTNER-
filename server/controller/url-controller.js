import {nanoid} from 'nanoid'
const urldatabase=new Map();
const Shorturl=async(req,res)=>{
    const {frontendurl}=req.body;
    try {
       if(!frontendurl){
        return res.json({status:false,message:"Long Url Is Required"});
       }
 
       const shortid=nanoid(2);
       urldatabase.set(shortid,frontendurl);
       const shorturl=`http://localhost:9000/${shortid}`;
       console.log(urldatabase);
       return res.json({status:true,message:"Url Size Short Sucessfully",url:shorturl})
       
        
    } catch (error) {
        console.log("url short error",error);
        
    }
    
}
const redirecturl=(req,res)=>{
    const {id}=req.params;
    const longurl=urldatabase.get(id);
    if(!longurl){
        return res.json({status:false,message:"Url Not Found"});
    }

    res.redirect(longurl);

}
export {Shorturl,redirecturl}