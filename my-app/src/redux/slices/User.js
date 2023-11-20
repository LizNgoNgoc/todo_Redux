import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        addUser:(state, action) => {
            return state = action.payload
        },
        userLogout: (state) => {
            localStorage.clear()
            return state = {...initialState, name : ''}
        },
        patchName: (state, action) => {
            console.log(action.payload);
            return state = {...initialState, name: action.payload}
        }
    }
})
export const {addUser, userLogout, patchName} = userSlice.actions
export default userSlice.reducer
