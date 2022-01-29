import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import localUsers from "../../App";
import axios from "axios";
import { useParams } from 'react-router-dom';



export const getUsers = createAsyncThunk(
    "get/Users",
    async () => {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        const fetch_data = res.data;
        return fetch_data;
     })


    
    const studentSlice = createSlice({
    name: "student",
    initialState: {
        users:[],
        status:null,
    },
    reducers:{
        getDelete:(state,action) => {
            state.users = state.users.filter((item) => item.name.common !== action.payload.name.common)
            state.status = "delete_activated"
        },
        getUpdate:(state,action) => {
            state.users.map((user)=>{
                if(user.ccn3 == action.payload.name){
                    user.name.common = action.payload.username
                    user.population = action.payload.population
                }
            })
        }
    },

    extraReducers:{
        [getUsers.pending]:(state,action) => {
            state.status = "pending"
        },
        [getUsers.fulfilled]:(state,{payload}) => {
            state.status = "success";
            state.users =  payload;
        },
        [getUsers.rejected]:(state,action) => {
            state.status = "failed"
            
        }
    }
    
});


export const {getDelete,getUpdate} = studentSlice.actions


export default studentSlice.reducer;