import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
    
    }
})

export const {} = funcSlice.actions
export default funcSlice.reducer