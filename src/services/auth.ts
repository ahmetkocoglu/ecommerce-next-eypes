import { setToken } from "@/store/app/auth/token"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const loginApi = createApi({
    reducerPath: 'loginApi',
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
    endpoints:(builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body
            }),
            transformResponse: (result: {token: string}) => result,
            async onQueryStarted(_args, {dispatch, queryFulfilled}){
                try {
                    const {data} = await queryFulfilled
                    dispatch(setToken(data.token))
                } catch (error){

                }
            }
        })
    })
})

export const {useLoginMutation} = loginApi