import express from "express"
import { redirecturl, Shorturl } from "../controller/url-controller.js";
import authmiddleware from "../middleware/auth-middleware.js";
const Urlrouter=express.Router();
Urlrouter.post("/short",authmiddleware,Shorturl);
Urlrouter.get("/:id",authmiddleware,redirecturl);
export default Urlrouter;