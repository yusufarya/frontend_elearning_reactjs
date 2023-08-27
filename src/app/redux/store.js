import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./actions/userSlice"

const store = configureStore({
    reducer: {
        userReducer: userReducer
    },
});

// console.log("ON CREATE STORE: ", store.getState())

store.subscribe(() => {
    // console.log("STORE CHANGE: ", store.getState())
})

export default store;