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
         trimedurl:"",
         Historyurl:[],
         barcode:"",
         navclass:""


    },
    reducers:{
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        setbarcode(state,action){
            state.barcode=action.payload;
        },
        settrimedurl(state,action){
            state.trimedurl=action.payload;
        },
        setHistoryurl(state,action){
            state.Historyurl=action.payload;
        },
        setfrontendurl(state,action){
            state.frontendurl=action.payload;
        },
        setAuthdata(state,action){
            const {name,value}=action.payload;
           state.Authdata[name]=value;

        },
        setnavclass(state,action){
            state.navclass=action.payload;

        },
        settype(state,action){
            state.type=action.payload;
        }

    }
})
export const control=clientslice.actions;
export default clientslice.reducer;
