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
            const _id = action.payload._id
           return {...state, todos : state.todos.map(item => {
            return _id === item._id ? action.payload : item
           })}
        }
    },
})

export const { addTodo, editTask } = todoSlice.actions
export default todoSlice.reducer