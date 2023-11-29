import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
    modalName: (state, action) => {
        return state = action.payload
    }
    }
})

export const {modalName} = funcSlice.actions
export default funcSlice.reducer