import { setToken } from "@/store/app/auth/token"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.phito.xyz/api/v1",
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = localStorage.getItem('token') as string

            if (token !== '') {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints:(builder) => ({
        getProduct: builder.query<any, string>({
            query: (url) => `/product/${url}`,
        }),
        setFavorite: builder.mutation({
            query: (body) => ({
                url: '/favorite',
                method: 'POST',
                body
            }),
            transformResponse: (result: { data: any }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    
                } catch (error) {
                    
                }
            }
        }),
        setRating: builder.mutation({
            query: (body) => ({
                url: '/rating',
                method: 'POST',
                body
            }),
        }),
        addBasket: builder.mutation({
            query: (body) => ({
                url: '/movement/add-basket',
                method: 'POST',
                body
            }),
        })
    })
})

export const {useGetProductQuery, useSetFavoriteMutation, useSetRatingMutation, useAddBasketMutation} = productApi