import { createSlice } from "@reduxjs/toolkit"

const date = new Date()

const initialState = {
    date: date ,
    today : `${date.getDate() < 10 ? '0' + (date.getDate()) 
    : date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) 
    : date.getMonth() + 1}.${date.getFullYear()}`
}

export const GetDate = createSlice({
    name : 'date',
    initialState,
    reducers : {
    }
})


export default GetDate.reducer