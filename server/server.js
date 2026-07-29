import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser";
import Authrouter from "./routes/auth-routes.js";
import { Connect } from "./utils/db.js";
const app=express();
Connect();
app.use(cors({
    origin:[
        "http://localhost:5173"
    ],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.json({message:"SERVER IS READY TO WORK "});

})
app.use("/api/auth",Authrouter);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("server is listining on ",port);

})