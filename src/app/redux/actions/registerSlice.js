import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const registerUser = createAsyncThunk(
    'postDataRegister',
    async (values) => {
        const response = await axios.post("http://localhost:3000/api/users", {
            identity_number: "ADM2023080002",
            name: values.firstName + ' ' +values.lastName,
            telp: values.telp,
            gender: values.gender,
            place_of_birth: values.place_of_birth,
            date_of_birth: values.date_of_birth,
            religion: values.religion,
            email: values.email,
            password: values.password,
            roleId: values.roleId,
            status: values.status
        }).then( (response) => {
            console.log(JSON.stringify(response.data));
        }).catch( (error) => {
            console.log(error);
        });
        return response.data
    }
)

{registerUser ? <Navigate to="/login" /> : ''}

const registSlice = createSlice({
    name: "register",
    initialState: {
        loading: false,
        data: {},
        error:'',
        isSuccess:''
    },
    reducers: {},
    extraReducers : builder=>{
        builder.addCase(registerUser.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = []
            state.isSuccess = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export const {extraReducers}= registSlice.actions
export default registSlice.reducer
// export default registerUser;