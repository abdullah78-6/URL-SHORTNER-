import express from "express"
import { Deleteurl, Geturl } from "../controller/final-url-controller.js";
import authmiddleware from "../middleware/auth-middleware.js";
const Finalrouter=express.Router();
Finalrouter.get("/get_url",authmiddleware,Geturl);
Finalrouter.post("/del_url",authmiddleware,Deleteurl);
export default Finalrouter;