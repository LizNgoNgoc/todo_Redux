import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'; // импортируем методы для работы


export const userApi = createApi({
    reducerPath: "userApi", // прописываем название для стейта
    baseQuery : fetchBaseQuery({ // обеспечиваем взаимодействие с api
        baseUrl : "https://testapiservisefortesting.onrender.com/", // указываем url сервера, который мы используем
    }),
    endpoints : (builder) => ({ // передаем эндпоинты(конечные точки) - шлюзы(серверные процессы с внешним интерфейсом)
        getUserData : builder.query({ // используем конструктор запросов
            query : () => ({ // делаем запрос
                url : "user/me", // прописываем путь на сервер через url 
                method : "GET", //прописываем метод запроса
                headers : {
                    authorization : localStorage.getItem("token") // авторизация - передаем token в localStorage
                }
            })
        })
    })
})

export const { useGetUserDataQuery } = userApi // экспортируем метод