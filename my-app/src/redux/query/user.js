import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://testapiservisefortesting.onrender.com/",
    }),
    endpoints : (builder) => ({
        getUserData : builder.query({
            query : () => ({
                url : "user/me",
                method : "GET"
            })
        })
    })
})

export const { useGetUserDataQuery } = userApi
console.log(userApi);