import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({

     reducerPath: 'api',  // This is default

     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), // This is also pretty default

     endpoints: (builder) => ({
          getTodos: builder.query({query: () => '/todos'})
     })

})

export const {useGetTodosQuery} = apiSlice;