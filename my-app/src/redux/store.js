import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slices/Registration";
// import Todo from "./slices/Todo";
import todoSlice from "./slices/Todo";
import userSlice  from "./slices/User";
import formSlice from "./slices/Form";
import funcSlice from "./slices/Func";

export const store = configureStore ({
    reducer : {
        funcSlice,
        // GetDate,
        todoSlice,
        userSlice,
        registrationSlice,
        formSlice
    }
})

