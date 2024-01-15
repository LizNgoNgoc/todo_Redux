import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


export const apiTask = createApi({
    reducerPath : 'taskApi',
    baseQuery : fetchBaseQuery({
        baseUrl : "https://testapiservisefortesting.onrender.com/", 
    }),
    endpoints : (builder) => ({
        apiTodos: builder.query({
            query: () => ({
                url:'todo/todos',
                method: 'GET',
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
        }),
        deleteTodo: builder.mutation({
            query: (_id) => ({
                url: `todo/delete?id=${_id}`,
                method: 'DELETE',
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
        })
    })
})

export const { useApiTodosQuery, useDeleteTodoMutation } = apiTask;