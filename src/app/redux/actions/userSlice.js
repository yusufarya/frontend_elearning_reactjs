import { createSlice } from "@reduxjs/toolkit";

const registSlice = createSlice({
    name: "register",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    reducers: {
        apiRequestStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        apiRequestSuccess: (state) => {
            state.loading = false;
        },
        apiRequestFailure: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
})

const loginSlice = createSlice({
    name: "login",
    initialState : {},
    reducers: {
        apiLoginToken : (state, action) => {
            state.data = action.payload
        }
    }
})

export const {apiRequestStart, apiRequestSuccess, apiRequestFailure}= registSlice.actions
// export default registSlice.reducer //
export const {apiLoginToken} = loginSlice.actions
export default loginSlice.reducer