import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form : {
        str : '',
        function : null,
        attr : ''
    },
    modalActive : false
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
        },
        setModalActiveTrue : (state) => {
            return {...state, modalActive : true}
        },
        setModalActiveFalse : (state) => {
            return {...state, modalActive : false}
        },
    }
})

export const {showModal, setModalActiveTrue, setModalActiveFalse} = funcSlice.actions
export default funcSlice.reducer