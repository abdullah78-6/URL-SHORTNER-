import express from "express"
import { Getprofile, Googlesignin, Login, Logout, Register } from "../controller/auth-controller.js";
const Authrouter=express.Router();
Authrouter.post("/signup",Register);
Authrouter.post("/login",Login);
Authrouter.get("/profile",Getprofile);
Authrouter.post("/logout",Logout);
Authrouter.post("/google_signin",Googlesignin);
export default Authrouter;