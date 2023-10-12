import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./featchers/api/apiSlice";
import userTokenInformationSlice from "./featchers/userTokenInformationSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        users:userTokenInformationSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})


export default store 