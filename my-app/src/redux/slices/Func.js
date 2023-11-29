import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: false,
    str : '',
    function : null,
    modal: {
        type: ''
    }
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
    showModal: (state, action) => {
        return state.modal.type === action.payload
    },
    hideModal: (state) => {
        return state.initialState;
    }
    }
})

export const {showModal} = funcSlice.actions
export default funcSlice.reducer