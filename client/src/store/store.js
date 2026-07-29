import {configureStore} from "@reduxjs/toolkit"
import client from "./slice.js"
const Clientstore=configureStore({
    reducer:{
        main:client
    }

})
export default Clientstore;