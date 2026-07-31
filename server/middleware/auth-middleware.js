import jwt from "jsonwebtoken"
const authmiddleware=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.jsn({status:false,message:"Not Authorized Login Again"});
    }
    try {
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET);
        if(!req.body){
            req.body={}
        }
        req.body.userid=tokendecode.id;
        next();
        
    } catch (error) {
        console.log("middleware error",error);
        
    }

}
export default authmiddleware