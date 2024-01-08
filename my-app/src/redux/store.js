import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slices/Registration";
import { setupListeners } from "@reduxjs/toolkit/query";

import todoSlice from "./slices/Todo";
import userSlice  from "./slices/User";
import formSlice from "./slices/Form";
import funcSlice from "./slices/Func";
import { userApi } from "./query/user";

const store = configureStore ({
    reducer : {
        funcSlice,
        todoSlice,
        userSlice,
        registrationSlice,
        formSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            userApi.middleware,
        )
    }
})
setupListeners(store.dispatch);
export {store}


