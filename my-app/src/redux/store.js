import { configureStore } from "@reduxjs/toolkit";
import GetDate from "./slices/Date";
import registrationSlice from "./slices/Registration";

export const store = configureStore ({
    reducer : {
        // GetDate,
        registrationSlice
    }
})

