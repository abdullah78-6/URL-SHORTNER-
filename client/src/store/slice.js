import {createSlice} from "@reduxjs/toolkit"
const clientslice=createSlice({
    name:"client",
    initialState:{
        backendemail:"",
         Authdata:{
            name:"",
            email:"",
            password:""
         },
         type:"Sign up",

    },
    reducers:{
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        setAuthdata(state,action){
            const {name,value}=action.payload;
           state.Authdata[name]=value;

        },
        settype(state,action){
            state.type=action.payload;
        }

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;
