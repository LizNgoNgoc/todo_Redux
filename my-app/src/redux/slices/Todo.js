import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = action.payload
        },
        editTask: (state, action) => {
           
        }
    },
})

export const { addTodo, editTask } = todoSlice.actions
export default todoSlice.reducer