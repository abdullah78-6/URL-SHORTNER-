import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { db } from "../utils/db.js";
const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"});
    

}
const Register=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
                    await db.query(
        `CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                password VARCHAR(255)
            )
        `
    )
                    const [exist]=await db.query(`SELECT*FROM users WHERE email=?`,[email]);
                    if(exist.length>0){
                         return res.json({status:false,message:"USER IS ALREADY EXIST "});
                    }
                    if(!validator.isEmail(email)){
                        return res.json({status:false,message:"PLEASE ENTER A VALID EMAIL "});
                    }
                    if(password.length<8){
                        return res.json({status:false,message:"PLEASE ENTER A STRONG PASSWORD "});
                    }
                    const salt=await bcrypt.genSalt(10);
                    const hashedpassword=await bcrypt.hash(password,salt);
                   const [result]= await db.execute(
                        "INSERT INTO users(name,email,password) VALUES(?,?,?) ",[name,email,hashedpassword]
                    )
                    console.log(result);
                 return res.json({status:true,message:"USER REGISTER SUCCESSFULLY"});
            
            
                    
                } catch (error) {
                    console.log(error);
                    return res.json({status:false,result:"SIGN-UP ERROR"});
                    
                }

}
const Login=async(req,res)=>{
    const {email,password}=req.body;
 
            try {
                const [user]= await db.query(`SELECT*FROM users WHERE email=?`,[email]);
                if(user.length===0){
                    return res.json({status:false,message:"USER DOES NOT EXIST "});
                }
                const usere=user[0];
                const ismatch=await bcrypt.compare(password,usere.password);
                if(!ismatch){
                    return res.json({status:false,message:"PASSWORD IS INCORRECT"});
                }
                const token=createtoken(usere.id);
                res.cookie("token",token,{
                    httpOnly:true,
                    secure:true,
                    sameSite:"strict",//strict for local server
                    maxAge:24*60*60*1000
                })
        
                return res.json({status:true,
                    user:{
                       email:usere.email
                    },
                    message:"LOGIN SUCCESSFULLY"});
                    console.log("after login ",usere.email);
                
            } catch (error) {
                console.log("ERROR",error);
                return res.json({status:false,message:"LOGIN ERROR"});
                
            }

}
const Getprofile=async(req,res)=>{
     try {
                    const token=req.cookies.token;
                    if(!token){
                        return res.json({status:false});
                }
                const decoded=jwt.verify(token,process.env.JWT_SECRET);
                //  const user=await adminmodel.findById(decoded.id).select("email");
                const [rows]=await db.query(`SELECT id,name,email  FROM users WHERE id=?`,[decoded.id]);
                 if(rows.length===0){
                        return res.json({status:false});
             }
                    res.json({status:true,email:rows[0]});
        } catch (error) {
                    res.json({status:false,message:"Failed to getprofile"});
        }

}
const Googlesignin=async(req,res)=>{

}
const Logout=async(req,res)=>{
    try {
        res.clearCookie("token",{
        httpOnly:true,
        secure: true,
        sameSite:"strict"//strict for local server
    });
    return res.json({status:true,message:"Logged Out "})
        
    } catch (error) {
        console.log("logout ",error);
        res.json({status:false,message:"Logout error"});
        
    }

}
export {Register,Login,Getprofile,Googlesignin,Logout}