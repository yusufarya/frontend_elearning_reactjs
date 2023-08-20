import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./actions/registerSlice"

const store = configureStore({
    reducer: {register: registerReducer},
});

// console.log("ON CREATE STORE: ", store.getState())

store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState())
})

export default store;