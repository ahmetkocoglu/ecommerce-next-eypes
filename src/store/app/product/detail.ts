import { ProductType } from '@/types/productType';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
    product: {} as ProductType
}

export const productSlice = createSlice({
    initialState,
    name: 'product',
    reducers: {
        setProduct: (state, action: PayloadAction<ProductType>) => {
            state.product = action.payload
        }
    }
})

export default productSlice.reducer

export const {setProduct}= productSlice.actions