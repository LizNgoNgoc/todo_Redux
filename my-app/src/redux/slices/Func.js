import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false,

}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        checkClick: (state, action) => {
            state.task = action.payload
        }
    }
})

export const {checkClick} = funcSlice.actions
export default funcSlice.reducer