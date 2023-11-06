import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        checkClick: (state) => {
           return {...state, click : !state.click}
        },
    }
})

export const {checkClick} = funcSlice.actions
export default funcSlice.reducer