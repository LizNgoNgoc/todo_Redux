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
        }
    }
})
export const {addUser, userLogout} = userSlice.actions
export default userSlice.reducer
