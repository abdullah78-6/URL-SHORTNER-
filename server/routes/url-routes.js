import express from "express"
import { redirecturl, Shorturl } from "../controller/url-controller.js";
const Urlrouter=express.Router();
Urlrouter.post("/short",Shorturl);
Urlrouter.get("/:id",redirecturl);
export default Urlrouter;