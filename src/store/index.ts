import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import tokenReducer from "@/store/app/auth/token";
import basketReducer from "@/store/app/auth/basket";
import userReducer from "@/store/app/auth/user";

import { loginApi } from "@/services/auth";
import { productApi } from "@/services/product";
import { menuApi } from "@/services/menu";
import { categoryApi } from "@/services/category";

export const store = configureStore({
    reducer: {
        tokenState: tokenReducer,
        basketState: basketReducer,
        userState: userReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
        loginApi.middleware,
        productApi.middleware,
        menuApi.middleware,
        categoryApi.middleware
    )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch