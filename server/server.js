import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser";
import Authrouter from "./routes/auth-routes.js";
import { Connect } from "./utils/db.js";
import Urlrouter from "./routes/url-routes.js";
import Finalrouter from "./routes/finl-routes.js";
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
app.use("/api/auth",Authrouter);
app.use("/",Urlrouter);
app.use("/api/url",Finalrouter);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("server is listining on ",port);

})