import { setBasket } from "@/store/app/auth/basket"
import { setToken } from "@/store/app/auth/token"
import { setUser } from "@/store/app/auth/user"
import { UserType } from "@/types/userType"
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
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body
            }),
            transformResponse: (result: { token: string }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setToken(data.token))
                } catch (error) {

                }
            }
        }),
        register: builder.mutation({
            query: (body) => ({
                url: '/auth/sign-up',
                method: 'POST',
                body,
            }),
        }),
        getMe: builder.query<any, string>({
            query: () => '/user/me',
            transformResponse: (result: { basket: any[], user: UserType }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;                    
                    dispatch(setBasket(data.basket))
                    dispatch(setUser(data.user))
                } catch (error) {
                    localStorage.removeItem('token')
                }
            }
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } = loginApi