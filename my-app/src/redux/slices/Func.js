import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form : {
        str : '',
        function : null,
        attr : ''
    }
    
}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
    showModal: (state, action) => {
        return {...state, form : action.payload}
    },
    hideModal: (state) => {
        return state
    }
    }
})

export const {showModal} = funcSlice.actions
export default funcSlice.reducer