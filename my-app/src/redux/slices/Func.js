import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false,
    str : '',
    function : null,
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
    showModal: (state, action) => {
        return state === action.payload
    },
    hideModal: (state) => {
        return state.initialState;
    }
    }
})

export const {showModal} = funcSlice.actions
export default funcSlice.reducer