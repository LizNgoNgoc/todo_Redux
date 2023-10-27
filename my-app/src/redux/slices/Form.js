import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    view : false,
    editTask : {},
    formComponent : {}
}


export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {

    }
})

// export {} = formSlice.actions
export default formSlice.reducer