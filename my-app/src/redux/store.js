import { configureStore } from "@reduxjs/toolkit";
import GetDate from "./slices/Date";

export const store = configureStore ({
    reducer : {
        GetDate
    }
})