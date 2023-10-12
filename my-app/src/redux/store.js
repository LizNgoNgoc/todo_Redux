import { configureStore } from "@reduxjs/toolkit";
import GetDate from "./slices/Date";
import registrationSlice from "./slices/Registration";
import Todo from "./slices/Todo";

export const store = configureStore ({
    reducer : {
        // GetDate,
        Todo,
        registrationSlice
    }
})

