import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3050/api/v1",
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = localStorage.getItem('token') as string

            if (token !== '') {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getMenus: builder.query<any, string>({
            query: (url) => `${url}`,
        }),
    })
})

export const {
    useGetMenusQuery
} = menuApi