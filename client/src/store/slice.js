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
         frontendurl:"",
         trimedurl:""

    },
    reducers:{
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        settrimedurl(state,action){
            state.trimedurl=action.payload;
        },
        setfrontendurl(state,action){
            state.frontendurl=action.payload;
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
