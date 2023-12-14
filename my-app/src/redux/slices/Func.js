import { createSlice } from "@reduxjs/toolkit";

const theme = JSON.parse(localStorage.getItem('darkTheme'))

const initialState = {
    form : {
        str : '',
        function : null,
        attr : ''
    },
    modalActive : false,
    darkTheme : false,
    toggle : false,
}

if(theme) {
    initialState.darkTheme = theme.theme
    initialState.toggle = theme.toggle
}

function saveLocal(obj) {
    localStorage.setItem('darkTheme', JSON.stringify(obj))
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
        setDarkTheme : (state, action) => {
            saveLocal({theme : !state.darkTheme, toggle : action.payload})
            return {...state, darkTheme : !state.darkTheme, toggle : action.payload}
        }
    }
})

export const {showModal, setModalActiveTrue, setModalActiveFalse, setDarkTheme} = funcSlice.actions
export default funcSlice.reducer